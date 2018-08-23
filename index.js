var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))

var site_array = [
    "facebook.com",
    "youtube.com",
    "twitter.com",
    "microsoft.com",
    "linkedin.com",
    "wikipedia.org",
    "plus.google.com",
    "apple.com",
    "instagram.com",
    "wordpress.org",
    "adobe.com",
    "en.wikipedia.org",
    "itunes.apple.com",
    "wordpress.com",
    "youtu.be",
    "vimeo.com",
    "blogspot.com"];


var async = require("async");
var axios = require('axios');
var htmlToText = require('html-to-text');
var sw = require('stopword');
var natural = require('natural');

var limit = 5;
var index = [];
var itemsProcessed = 0;

function callbackDone () {
    console.log('all done');
    Object.keys(index).forEach(function(key) {
        var val = index[key];
        if (val < 10) {
            delete index[key]
        }
    });
    console.log(index);

}

function freq(text, callback){
    var words = text
        .toLowerCase()
        .replace(/[0-9]/g, " ")
        .replace(/\W/g, " ")
        .replace(/\s+/g, " ")
        .split(" ");
    words = sw.removeStopwords(words);
    words.forEach(function (word) {
        word = natural.PorterStemmer.stem(word);
        if (word.length<20 && word.length>1) {
            if (!(index.hasOwnProperty(word))) {
                index[word] = 0
            }
            index[word]++
        }
    });
    if(itemsProcessed === site_array.length) {
        callbackDone();
    }
    return callback(index);
}

function clean(html, file, callback){
    var clean_text = htmlToText.fromString(html, {
        wordwrap: null,
        ignoreHref: true,
        ignoreImage: true,
        preserveNewlines: true
    });
    clean_text = clean_text.replace(/[^\x00-\x7F]/g, " ");
    clean_text = clean_text.replace(/\s+/g, " ");
    return callback(clean_text, file)
}

function getHtml(url,callback){
    axios.get(url)
        .then(function (response) {

            console.log(url);
            console.log(response.status);
            body = response.data;
            clean(body, url, function(result, file_name){
                console.log(result.length);
                freq(result,function(result){
                    itemsProcessed++;
                    console.log(itemsProcessed,site_array.length);
                })
            })
        })
        .catch(function (error) {
            itemsProcessed++;
            console.log(itemsProcessed,site_array.length);
            if(itemsProcessed === site_array.length) {
                callbackDone();
            }
            console.log(error.code);
        });
}


async.forEachLimit(site_array,limit,function (item, callback) {
    getHtml("http://"+item);
    callback(null);
},function (err) {
    console.log(err);
});




