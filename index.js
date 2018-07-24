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
let limit = 2



express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))

	.get('/gossip', (req, res) => {
		
		let pageView = "START"

		let domains = "google.com,facebook.com,youtube.com,twitter.com,microsoft.com,linkedin.com,wikipedia.org,plus.google.com,apple.com,instagram.com,wordpress.org,adobe.com,en.wikipedia.org,itunes.apple.com,wordpress.com,youtu.be,vimeo.com,blogspot.com,pinterest.com,goo.gl,maps.google.com,play.google.com,yahoo.com,googletagmanager.com,amazon.com,player.vimeo.com,bit.ly,docs.google.com,tumblr.com,github.com,flickr.com,mozilla.org,w3.org,get.adobe.com,go.microsoft.com,apache.org,sourceforge.net,gravatar.com,godaddy.com,nytimes.com,drive.google.com,sites.google.com,reddit.com,soundcloud.com,europa.eu,php.net,t.co,bbc.co.uk,cnn.com,mcc.godaddy.com,nih.gov,weebly.com,amazonaws.com,accounts.google.com,virginmedia.com,dropbox.com,theguardian.com,t-online.de,httpd.apache.org,qq.com,gnu.org,forbes.com,tinyurl.com,validator.w3.org,creativecommons.org,msn.com,issuu.com,github.io,oracle.com,wsj.com,aol.com,bing.com,imdb.com,live.com,archive.org,paypal.com,m.facebook.com,go.com,wix.com,slideshare.net,reuters.com,www.ncbi.nlm.nih.gov,huffingtonpost.com,ibm.com,myspace.com,mysql.com,washingtonpost.com,wikimedia.org,bloomberg.com,wixsite.com,mit.edu,cpanel.net,windows.microsoft.com,telegraph.co.uk,debian.org,ebay.com,cpanel.com,medium.com,bp.blogspot.com,harvard.edu,stanford.edu"			
		domains = domains.split(",")
		
		function clean(html, file, callback){
			var clean_text = htmlToText.fromString(html, {
				wordwrap: null,
				ignoreHref: true,
				ignoreImage: true,
				preserveNewlines: true
			})
			clean_text = clean_text.replace(/[^\x00-\x7F]/g, " ")
			clean_text = clean_text.replace(/\s+/g, " ")
			return callback(clean_text, file)
		}
		
		function getHtml(url,callback){
			full_url = "http://www."+url
			unirest.get(full_url).maxRedirects(2).timeout(100000).end(function (result) {
				if(result.error){
					console.log("-------------- Failed: " + result.error)
				} else {
					clean(result.body, url, function(result, file_name){
						var now = new Date()
						console.log(now+" ++++ Collected: " + file_name + " ||||||||| " + result.slice(0,100))
					})
				}
			})
			callback()
		}
		
		var queue = async.queue(function(task, callback){
			getHtml(task,function(err, url){
				return callback(err, url)
			})
		},limit)
		
		queue.drain = function(){
			console.log("All Sent!")
		}
		
		queue.push(domains)
			
		res.send(pageView)		
		
	})
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))

	
	
	