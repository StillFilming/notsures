const unirest = require('unirest')
const htmlToText = require('html-to-text')
const async = require("async")
const cheerio = require('cheerio')
const express = require('express')
const http = require('http')
const https = require('https')
const events = require('events')
const path = require('path')
const FetchStream = require('fetch').FetchStream
const fs = require('fs')
const PORT = process.env.PORT || 5000

let full_url = ""

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))

	.get('/gossip', (req, res) => {
		
		let pageView = "START"

		let domains = "google.com,facebook.com"			
		domains = domains.split(",")
		
		async.eachLimit(domains, 2, function (url, callback) {
			pageView = pageView + "\n" + url
			full_url = "http://www."+url
			
			unirest.get(full_url).maxRedirects(2).timeout(100000).end(function (result) {
				if(result.error){
					pageView = pageView+ "\n" + "-------------- Failed: " + result.error
				} else {
					html_content = result.body
					var clean_text = htmlToText.fromString(html_content, {
						wordwrap: null,
						ignoreHref: true,
						ignoreImage: true,
						preserveNewlines: true
					})
					clean_text = clean_text.replace(/[^\x00-\x7F]/g, " ")
					clean_text = clean_text.replace(/\s+/g, " ")
					pageView = pageView+ "\n" + "++++ Collected: "+url + " ||||||||| " + clean_text.slice(0,100)
				}
			})
			callback()
			
		}, function (err) {
			if(err){
				pageView = pageView+ "\n" + "Failed: " + url
			}
		})

		res.send(pageView)		
		
	})
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))
