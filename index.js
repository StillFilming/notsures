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
const natural = require('natural')
const PORT = process.env.PORT || 5000





express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))

	.get('/gossip', (req, res) => {
		let pageView = "START"
		function gett(startt, endd, conc, cb) {
		
		
			let full_url = ""
			var index = {}
			var cus_header = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0'};
			var count = [];
			var e_count = 0;
			var temp = [];
			var num_err = 0;
			var num_err1 = 0;
			var num_err2 = 0;
			var limit = conc;
			var s = startt;
			var e = endd;

			let domains = "google.com,facebook.com,youtube.com,twitter.com,microsoft.com,linkedin.com,wikipedia.org,plus.google.com,apple.com,instagram.com,wordpress.org,adobe.com,en.wikipedia.org,itunes.apple.com,wordpress.com,youtu.be,vimeo.com,blogspot.com,pinterest.com,goo.gl,maps.google.com,play.google.com,yahoo.com,googletagmanager.com,amazon.com,player.vimeo.com,bit.ly,docs.google.com,tumblr.com,github.com,flickr.com,mozilla.org,w3.org,get.adobe.com,go.microsoft.com,apache.org,sourceforge.net,gravatar.com,godaddy.com,nytimes.com,drive.google.com,sites.google.com,reddit.com,soundcloud.com,europa.eu,php.net,t.co,bbc.co.uk,cnn.com,mcc.godaddy.com,nih.gov,weebly.com,amazonaws.com,accounts.google.com,virginmedia.com,dropbox.com,theguardian.com,t-online.de,httpd.apache.org,qq.com,gnu.org,forbes.com,tinyurl.com,validator.w3.org,creativecommons.org,msn.com,issuu.com,github.io,oracle.com,wsj.com,aol.com,bing.com,imdb.com,live.com,archive.org,paypal.com,m.facebook.com,go.com,wix.com,slideshare.net,reuters.com,www.ncbi.nlm.nih.gov,huffingtonpost.com,ibm.com,myspace.com,mysql.com,washingtonpost.com,wikimedia.org,bloomberg.com,wixsite.com,mit.edu,cpanel.net,windows.microsoft.com,telegraph.co.uk,debian.org,ebay.com,cpanel.com,medium.com,bp.blogspot.com,harvard.edu,stanford.edu"			
			domains = domains.split(",")
			
			var start = new Date()
			
			
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
			
			function freq(text, callback){
				var words = text
						.toLowerCase()
						.replace(/[0-9]/g, " ")
						.replace(/\W/g, " ")
						.replace(/\s+/g, " ")
						.split(" ")
				words.forEach(function (word) {
					word = natural.PorterStemmer.stem(word)
					if (word.length<20 && word.length>1) {
						
						if (!(index.hasOwnProperty(word))) {
							index[word] = 0
						}
					index[word]++
					}
				})
				return callback(index)
			}
			
			function getHtml(url,callback){
				full_url = "http://www."+url				
				var body = []
				cb = 0
				var st = new Date()
				console.log("Limit:",limit)
				console.log("1. Get this site:", full_url)
				var inp = new FetchStream(full_url,{
					headers: cus_header,
					timeout: 10000,
					maxRedirects:3,
					agent: false,
					compress: false,
					pool: false,
					keepAlive: true
				}).setMaxListeners(0)
				inp.on("error",function(e){
					temp.push(e.message+": " + url)
					num_err++
					if (e.message == 'socket hang up') {
						num_err1++
					}
					if (e.message == 'getaddrinfo ENOTFOUND') {
						num_err2++
					}
					console.log("2. --------------------ERROR", e.message, url)
					cb++
					if (cb == 1) {
						return callback(null, url)
					}
				})
				inp.on("data",function(chunk){
					body.push(chunk)
				})
				inp.on("end",function(){
					body = Buffer.concat(body)
					clean(body, url, function(result, file_name){
						//console.log(result.toString())
						var en = new Date()
						var time = ((en - st)/1000).toFixed(4)
						if (result.length<1) {
							e_count++
						}
						console.log("2. Clean site downloaded:", url, time, result.length)
						if (cb == 0) {
							return callback(null, url)
						}
						//console.log(result.toString())
						freq(result,function(result){
							var now = new Date()
							//result = JSON.stringify(result, null, '   ')
							//console.log( now+" ++++ Collected: " + file_name + " ||||||||| " + result.toString().slice(1,100) )
						})
					})
				})
			}
			
			var queue = async.queue(function(task, callback){
				getHtml(task,function(err, url){
					if (err) {
						console.error("An error occurred!", err)
					}
					count.push(1)
					ratio = ((num_err/(count.length))*100).toFixed(2)
					var end = new Date()
					var rate = ((end-start)/(1000*count.length)).toFixed(4)
					console.log("3. Finished: " + count.length, num_err, num_err1, num_err2, "Error: " + ratio + "%", "Empty:", e_count, (((e_count/count.length)*100).toFixed(2)) + "%")
					console.log("4. Speed:", rate, "seconds/site. Time:", ((end-start)/60000).toFixed(2), "Est:", (((e-s)*rate)/60).toFixed(2), "Left:", ((((e-s)*rate)/60)-((end-start)/60000)).toFixed(2))
					return callback(err, url)
				})
			},limit)
			
			queue.drain = function(){
				console.log("DONE!")
				//return cb()
				index = JSON.stringify(index, null, '   ')
				console.log(index.toString().slice(1,100))
			}
			
			
			
			function loop(start,end){
				for(var i = start;i<end;i++){
					queue.push(domains[i],function(err,url){
						if(err){
							console.log("5. Finished with error:", err, url)
						} else {
							console.log("5. Finished task:", url)
						}
					})
				}
			}
			
			
			loop(1,10)
		
		}
		
		gett(0,10,10,function(){
			console.log("FIN")
		})
			
		res.send(pageView)		
		
	})
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))

	
	
	