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

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))

	.get('/gossip', (req, res) => {
		
		let pageView = "Start"

		let domains = "google.com,facebook.com"			
		domains = domains.split(",")
		
		async.eachLimit(domains, 2, function (url, callback) {
			pageView = pageView + "/n" + url
		}, function (err) {
			if(err){
				pageView = pageView + "Failed: " + url
			}
		})

		res.send(pageView)		
		
	})
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))
