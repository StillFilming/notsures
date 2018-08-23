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
"blogspot.com",
"pinterest.com",
"goo.gl",
"maps.google.com",
"play.google.com",
"yahoo.com",
"googletagmanager.com",
"amazon.com",
"player.vimeo.com",
"bit.ly",
"docs.google.com",
"tumblr.com",
"github.com",
"flickr.com",
"mozilla.org",
"w3.org",
"get.adobe.com",
"go.microsoft.com",
"apache.org",
"sourceforge.net",
"gravatar.com",
"godaddy.com",
"nytimes.com",
"drive.google.com",
"sites.google.com",
"reddit.com",
"soundcloud.com",
"europa.eu",
"php.net",
"t.co",
"bbc.co.uk",
"cnn.com",
"mcc.godaddy.com",
"nih.gov",
"weebly.com",
"amazonaws.com",
"accounts.google.com",
"virginmedia.com",
"dropbox.com",
"theguardian.com",
"t-online.de",
"httpd.apache.org",
"qq.com",
"gnu.org",
"forbes.com",
"tinyurl.com",
"validator.w3.org",
"creativecommons.org",
"msn.com",
"issuu.com",
"github.io",
"oracle.com",
"wsj.com",
"aol.com",
"bing.com",
"imdb.com",
"live.com",
"archive.org",
"paypal.com",
"m.facebook.com",
"go.com",
"wix.com",
"slideshare.net",
"reuters.com",
"www.ncbi.nlm.nih.gov",
"huffingtonpost.com",
"ibm.com",
"myspace.com",
"mysql.com",
"washingtonpost.com",
"wikimedia.org",
"bloomberg.com",
"wixsite.com",
"mit.edu",
"cpanel.net",
"windows.microsoft.com",
"telegraph.co.uk",
"debian.org",
"ebay.com",
"cpanel.com",
"medium.com",
"bp.blogspot.com",
"harvard.edu",
"stanford.edu",
"hp.com",
"opera.com",
"cnet.com",
"vk.com",
"dailymail.co.uk",
"weibo.com",
"bbc.com",
"wp.com",
"nasa.gov",
"talktalk.co.uk",
"macromedia.com",
"time.com",
"about.com",
"usatoday.com",
"imgur.com",
"businessinsider.com",
"jimdo.com",
"free.fr",
"addthis.com",
"wired.com",
"dailymotion.com",
"surveymonkey.com",
"digg.com",
"blogger.com",
"sina.com.cn",
"eventbrite.com",
"who.int",
"googleusercontent.com",
"ted.com",
"gc.ca",
"web.archive.org",
"webs.com",
"livejournal.com",
"cdc.gov",
"un.org",
"nature.com",
"wiley.com",
"feedburner.com",
"youtube-nocookie.com",
"stumbleupon.com",
"statcounter.com",
"loc.gov",
"tripod.com",
"2.bp.blogspot.com",
"ietf.org",
"sciencedirect.com",
"typepad.com",
"latimes.com",
"google.co.uk",
"scribd.com",
"berkeley.edu",
"washington.edu",
"independent.co.uk",
"www.gov.uk",
"techcrunch.com",
"kickstarter.com",
"jigsaw.w3.org",
"geocities.com",
"list-manage.com",
"feeds.feedburner.com",
"npr.org",
"amazon.co.uk",
"yelp.com",
"nationalgeographic.com",
"launchpad.net",
"4.bp.blogspot.com",
"1.bp.blogspot.com",
"i0.wp.com",
"3.bp.blogspot.com",
"commons.wikimedia.org",
"photobucket.com",
"guardian.co.uk",
"i1.wp.com",
"i2.wp.com",
"xinhuanet.com",
"etsy.com",
"wpa.qq.com",
"163.com",
"sun.com",
"baidu.com",
"deviantart.com",
"news.bbc.co.uk",
"spotify.com",
"samsung.com",
"ft.com",
"google.de",
"springer.com",
"nginx.org",
"themeforest.net",
"abcnews.go.com",
"hugedomains.com",
"youku.com",
"cloudfront.net",
"s3.amazonaws.com",
"behance.net",
"princeton.edu",
"wikia.com",
"addtoany.com",
"disqus.com",
"buzzfeed.com",
"mashable.com",
"cornell.edu",
"cbsnews.com",
"taobao.com",
"chrome.google.com",
"skype.com",
"foxnews.com",
"cnbc.com",
"engadget.com",
"whitehouse.gov",
"tripadvisor.com",
"theatlantic.com",
"intel.com",
"translate.google.com",
"parallels.com",
"android.com",
"economist.com",
"us.com",
"sohu.com",
"fr.wikipedia.org",
"change.org",
"miitbeian.gov.cn",
"noaa.gov",
"miibeian.gov.cn",
"dev.mysql.com",
"ca.gov",
"pbs.org",
"example.com",
"buydomains.com",
"altervista.org",
"cisco.com",
"blogspot.co.uk",
"cloudflare.com",
"zend.com",
"zdnet.com",
"redhat.com",
"goodreads.com",
"gizmodo.com",
"nginx.com",
"amzn.to",
"doi.org",
"alibaba.com",
"webmd.com",
"icio.us",
"umich.edu",
"uk.com",
"del.icio.us",
"bandcamp.com",
"eepurl.com",
"ow.ly",
"or.kr",
"kiev.ua",
"theverge.com",
"prnewswire.com",
"netscape.com",
"squarespace.com",
"usda.gov",
"doubleclick.net",
"fb.com",
"blogspot.de",
"uiuc.edu",
"fda.gov",
"oreilly.com",
"dell.com",
"joomla.org",
"imageshack.us",
"state.gov",
"office.com",
"iso.org",
"unesco.org",
"whatsapp.com",
"usnews.com",
"fc2.com",
"booking.com",
"columbia.edu",
"uci.edu",
"nbcnews.com",
"cbc.ca",
"fortune.com",
"epa.gov",
"de.wikipedia.org",
"constantcontact.com",
"stackoverflow.com",
"angelfire.com",
"upenn.edu",
"abc.net.au",
"sciencemag.org",
"yale.edu",
"meetup.com",
"wikihow.com",
"ning.com",
"ifeng.com",
"qc.ca",
"yandex.ru",
"books.google.com",
"wisc.edu",
"psu.edu",
"vice.com",
"marriott.com",
"ox.ac.uk",
"symantec.com",
"ustream.tv",
"sciencedaily.com",
"businesswire.com",
"utexas.edu",
"chicagotribune.com",
"fb.me",
"mozilla.com",
"newyorker.com",
"cam.ac.uk",
"ucla.edu",
"researchgate.net",
"worldbank.org",
"google.ca",
"marketwatch.com",
"indiegogo.com",
"mediafire.com",
"arstechnica.com",
"quora.com",
"indiatimes.com",
"fbcdn.net",
"slate.com",
"hilton.com",
"nydailynews.com",
"dropcatch.com",
"open.spotify.com",
"fastcompany.com",
"cmu.edu",
"on.ca",
"umn.edu",
"businessweek.com",
"chinadaily.com.cn",
"over-blog.com",
"amazon.de",
"earthlink.net",
"sfgate.com",
"scientificamerican.com",
"dmoz.org",
"v.qq.com",
"ieee.org",
"about.me",
"bbb.org",
"in.ua",
"mailchimp.com",
"mirror.co.uk",
"sagepub.com",
"giphy.com",
"howstuffworks.com",
"ikea.com",
"academia.edu",
"storify.com",
"spb.ru",
"foursquare.com",
"nps.gov",
"postgresql.org",
"bizjournals.com",
"ubuntu.com",
"zendesk.com",
"nypost.com",
"slashdot.org",
"openssl.org",
"beian.gov.cn",
"list-manage1.com",
"phpbb.com",
"es.wikipedia.org",
"blog.sina.com.cn",
"tinypic.com",
"plesk.com",
"gouv.fr",
"evernote.com",
"smh.com.au",
"drupal.org",
"google.fr",
"nokia.com",
"spiegel.de",
"newsweek.com",
"livestream.com",
"discovery.com",
"barnesandnoble.com",
"cbslocal.com",
"hbr.org",
"weather.com",
"twitch.tv",
"oecd.org",
"vkontakte.ru",
"mapquest.com",
"elegantthemes.com",
"tandfonline.com",
"yolasite.com",
"so.com",
"alexa.com",
"com.com",
"box.com",
"uchicago.edu",
"inc.com",
"delicious.com",
"usgs.gov",
"51.la",
"boston.com",
"verisign.com",
"java.com",
"house.gov",
"entrepreneur.com",
"rt.com",
"ed.gov",
"dropboxusercontent.com",
"go.id",
"cambridge.org",
"usc.edu",
"steampowered.com",
"walmart.com",
"yahoo.co.jp",
"mitre.org",
"nyu.edu",
"ftc.gov",
"britannica.com",
"freebsd.org",
"wiktionary.org",
"myshopify.com",
"appspot.com",
"si.edu",
"irs.gov",
"merriam-webster.com",
"apachefriends.org",
"mayoclinic.org",
"venturebeat.com",
"python.org",
"sakura.ne.jp",
"lifehacker.com",
"bmj.com",
"itu.int",
"thesun.co.uk",
"prezi.com",
"wunderground.com",
"teamviewer.com",
"umd.edu",
"enable-javascript.com",
"uol.com.br",
"news.com.au",
"dribbble.com",
"download.cnet.com",
"purdue.edu",
"instructables.com",
"000webhost.com",
"pcworld.com",
"theglobeandmail.com",
"timeanddate.com",
"blogspot.ca",
"newscientist.com",
"udel.edu",
"hexun.com",
"soup.io",
"kernel.org",
"t.qq.com",
"blogspot.fr",
"technorati.com",
"illinois.edu",
"netflix.com",
"themeisle.com",
"ufl.edu",
"dw.com",
"psychologytoday.com",
"senate.gov",
"w3schools.com",
"mail.ru",
"gofundme.com",
"wp.me",
"census.gov",
"aliexpress.com",
"ap.org",
"prweb.com",
"vmware.com",
"jquery.com",
"qz.com",
"store.steampowered.com",
"fao.org",
"oxfordjournals.org",
"msu.edu",
"wufoo.com",
"govt.nz",
"elsevier.com",
"last.fm",
"unc.edu",
"google.es",
"iana.org",
"ihg.com",
"ign.com",
"ucsd.edu",
"nike.com",
"news.google.com",
"theregister.co.uk",
"ehow.com",
"oup.com",
"jiathis.com",
"answers.com",
"archives.gov",
"opensource.org",
"duke.edu",
"bc.ca",
"rollingstone.com",
"pcmag.com",
"siemens.com",
"msdn.com",
"deloitte.com",
"utoronto.ca",
"rfc-editor.org",
"gmail.com",
"amazon-adsystem.com",
"video.google.com",
"google.it",
"fedoraproject.org",
"homestead.com",
"gob.mx",
"faqs.org",
"groups.yahoo.com",
"pixabay.com",
"novell.com",
"livescience.com",
"akamaihd.net",
"sitemaps.org",
"biomedcentral.com",
"examiner.com",
"sky.com",
"arxiv.org",
"uspto.gov",
"hubspot.com",
"nist.gov",
"pnas.org",
"thetimes.co.uk",
"virginia.edu",
"wpengine.com",
"dictionary.com",
"is.gd",
"thenextweb.com",
"google.co.jp",
"360.cn",
"att.com",
"mac.com",
"tmall.com",
"bitbucket.org",
"indiana.edu",
"jd.com",
"hollywoodreporter.com",
"ebay.co.uk",
"narod.ru",
"express.co.uk",
"kde.org",
"apa.org",
"blog.com",
"googleblog.com",
"thoughtco.com",
"go.th",
"sec.gov",
"networkadvertising.org",
"vox.com",
"variety.com",
"freewebs.com",
"urbandictionary.com",
"plos.org",
"webnode.com",
"t.me",
"nba.com",
"getpocket.com",
"arnebrachhold.de",
"api.whatsapp.com",
"thedailybeast.com",
"salon.com",
"eff.org",
"cpan.org",
"chron.com",
"privacypolicy.news",
"suhosin.org",
"smugmug.com",
"adweek.com",
"blogspot.in",
"wikidot.com",
"bls.gov",
"steamcommunity.com",
"asus.com",
"sony.com",
"flic.kr",
"acs.org",
"xing.com",
"olympic.org",
"cntv.cn",
"chinanews.com",
"platform.twitter.com",
"rutgers.edu",
"openldap.org",
"ucdavis.edu",
"nymag.com",
"ibtimes.com",
"elpais.com",
"lemonde.fr",
"staticflickr.com",
"getbootstrap.com",
"wikispaces.com",
"technologyreview.com",
"reference.com",
"arizona.edu",
"gotowebinar.com",
"bitly.com",
"cctv.com",
"salesforce.com",
"playstation.com",
"nvidia.com",
"craigslist.org",
"politico.com",
"msnbc.com",
"thefreedictionary.com",
"greenpeace.org",
"namecheap.com",
"hhs.gov",
"fifa.com",
"rs6.net",
"shutterstock.com",
"thestar.com",
"mtv.com",
"mlb.com",
"www.gov.cn",
"waw.pl",
"accuweather.com",
"blogspot.com.es",
"cygwin.com",
"navy.mil",
"digitaltrends.com",
"google.co.in",
"perl.org",
"aljazeera.com",
"lycos.com",
"colorado.edu",
"weforum.org",
"shopify.com",
"lg.com",
"amazon.co.jp",
"investopedia.com",
"codeplex.com",
"ethz.ch",
"stackexchange.com",
"azurewebsites.net",
"metro.co.uk",
"asu.edu",
"usa.gov",
"news.nationalgeographic.com",
"ubc.ca",
"fbi.gov",
"hatena.ne.jp",
"us.org",
"jhu.edu",
"army.mil",
"ru.wikipedia.org",
"openstreetmap.org",
"scoop.it",
"phys.org",
"shutterfly.com",
"axs.com",
"twimg.com",
"gartner.com",
"airbnb.com",
"naver.com",
"dot.gov",
"campaign-archive1.com",
"vine.co",
"securityfocus.com",
"campaign-archive2.com",
"blackberry.com",
"warnerbros.com",
"cia.gov",
"biglobe.ne.jp",
"line.me",
"4shared.com",
"lonelyplanet.com",
"philips.com",
"feedproxy.google.com",
"today.com",
"statista.com",
"bitnami.com",
"hardened-php.net",
"bigcartel.com",
"google.com.au",
"rakuten.co.jp",
"dyndns.org",
"zh.wikipedia.org",
"windowsphone.com",
"imagemagick.org",
"computerworld.com",
"target.com",
"openoffice.org",
"lenovo.com",
"tamu.edu",
"secureserver.net",
"csmonitor.com",
"aboutcookies.org",
"google.cn",
"list-manage2.com",
"bostonglobe.com",
"ucl.ac.uk",
"haxx.se",
"ovh.net",
"comcast.net",
"prestashop.com",
"unicef.org",
"lh3.googleusercontent.com",
"ups.com",
"globo.com",
"washingtontimes.com",
"ea.com",
"timesonline.co.uk",
"mcafee.com",
"disney.com",
"panasonic.com",
"icloud.com",
"icann.org",
"autodesk.com",
"softpedia.com",
"caltech.edu",
"go.kr",
"acm.org",
"altavista.com",
"history.com",
"1688.com",
"hubpages.com",
"uber.com",
"people.com",
"bu.edu",
"techtarget.com",
"tiny.cc",
"northwestern.edu",
"gutenberg.org",
"discuz.net",
"pastebin.com",
"ameblo.jp",
"energy.gov",
"mixcloud.com",
"coursera.org",
"xbox.com",
"seattletimes.com",
"nejm.org",
"wustl.edu",
"fcc.gov",
"dhs.gov",
"500px.com",
"digital.com",
"jstor.org",
"gpo.gov",
"vic.gov.au",
"moodle.org",
"liveleak.com",
"hyatt.com",
"thomsonreuters.com",
"perl.com",
"eu.com",
"gettyimages.com",
"gatech.edu",
"thehill.com",
"postimg.org",
"googleapis.com",
"purevolume.com",
"g.co",
"googlepages.com",
"fedex.com",
"douban.com",
"ed.ac.uk",
"envato.com",
"imageshack.com",
"hpe.com",
"mercurynews.com",
"ncsu.edu",
"dp.ua",
"gamespot.com",
"videolan.org",
"squidoo.com",
"allaboutcookies.org",
"photos.google.com",
"theconversation.com",
"tufts.edu",
"tx.us",
"aliyun.com",
"gimp.org",
"asso.fr",
"web.id",
"cba.pl",
"pitt.edu",
"moz.com",
"www.europarl.europa.eu",
"dedecms.com",
"twitpic.com",
"ask.com",
"metacafe.com",
"snopes.com",
"ca.us",
"channel4.com",
"vanityfair.com",
"hawaii.edu",
"medscape.com",
"reverbnation.com",
"nobelprize.org",
"themegrill.com",
"redcross.org",
"lego.com",
"justice.gov",
"thawte.com",
"cancer.org",
"ucsb.edu",
"bell-labs.com",
"nbc.com",
"hatenablog.com",
"osu.edu",
"va.gov",
"item.taobao.com",
"mailchi.mp",
"blogs.com",
"typeform.com",
"lefigaro.fr",
"mediawiki.org",
"amd.com",
"rebelmouse.com",
"utah.edu",
"edublogs.org",
"comsenz.com",
"huanqiu.com",
"starwoodhotels.com",
"google.ru",
"mckinsey.com",
"isc.org",
"voanews.com",
"usps.com",
"boutell.com",
"billboard.com",
"gallup.com",
"unsplash.com",
"vt.edu",
"thelancet.com",
"speedtest.net",
"imf.org",
"nasdaq.com",
"usembassy.gov",
"plusone.google.com",
"avg.com",
"heart.org",
"force.com",
"ny.gov",
"esy.es",
"pwc.com",
"espn.com",
"icq.com",
"skyrock.com",
"cc.com",
"or.id",
"aboutads.info",
"huffingtonpost.co.uk",
"americanexpress.com",
"real.com",
"rapidshare.com",
"gstatic.com",
"google.com.hk",
"ccc.de",
"snapchat.com",
"in.th",
"geocities.jp",
"xkcd.com",
"cern.ch",
"ssrn.com",
"vatican.va",
"posterous.com",
"boingboing.net",
"wa.gov",
"fool.com",
"welt.de",
"fujitsu.com",
"eurekalert.org",
"strikingly.com",
"msk.ru",
"blogspot.com.au",
"smithsonianmag.com",
"scmp.com",
"trendmicro.com",
"jamanetwork.com",
"pinimg.com",
"hc360.com",
"iso.ch",
"admin.ch",
"bluehost.com",
"techradar.com",
"garmin.com",
"squid-cache.org",
"www.nhs.uk",
"avast.com",
"medicalnewstoday.com",
"demon.co.uk",
"philly.com",
"google.nl",
"indeed.com",
"alipay.com",
"nifty.com",
"blogspot.it",
"patch.com",
"it.wikipedia.org",
"herokuapp.com",
"sap.com",
"jetpack.wordpress.com",
"kaspersky.com",
"popsci.com",
"congress.gov",
"amazon.fr",
"cancer.gov",
"ey.com",
"dol.gov",
"tmz.com",
"fema.gov",
"ndtv.com",
"khanacademy.org",
"ew.com",
"weather.gov",
"cri.cn",
"ggpht.com",
"yp.to",
"amazon.ca",
"istockphoto.com",
"denverpost.com",
"miamiherald.com",
"rediff.com",
"info.pl",
"bestbuy.com",
"google.pl",
"proofpoint.com",
"coe.int",
"lulu.com",
"ntp.org",
"goo.ne.jp",
"oregonstate.edu",
"consumerreports.org",
"trello.com",
"linksynergy.com",
"cafepress.com",
"redbull.com",
"athemes.com",
"000webhostapp.com",
"ok.ru",
"smashingmagazine.com",
"rottentomatoes.com",
"telegram.me",
"esa.int",
"nj.com",
"onlamp.com",
"standard.co.uk",
"thestreet.com",
"stuff.co.nz",
"xe.com",
"pp.ua",
"phpmyadmin.net",
"pt.wikipedia.org",
"logitech.com",
"upi.com",
"pagesperso-orange.fr",
"nsw.gov.au",
"siemens.de",
"mpg.de",
"mn.us",
"searchengineland.com",
"patreon.com",
"theage.com.au",
"uga.edu",
"startribune.com",
"hootsuite.com",
"me.com",
"en.m.wikipedia.org",
"findlaw.com",
"netdna-cdn.com",
"georgetown.edu",
"wampserver.com",
"nfl.com",
"hotmail.com",
"purl.org",
"atlassian.com",
"docker.com",
"xfinity.com",
"af.mil",
"accorhotels.com",
"libsyn.com",
"gawker.com",
"spec.org",
"uiowa.edu",
"zol.com.cn",
"unl.edu",
"nielsen.com",
"hrw.org",
"space.com",
"withgoogle.com",
"outlook.com",
"eonline.com",
"cwi.nl",
"sputniknews.com",
"t.cn",
"norton.com",
"libpng.org",
"timeout.com",
"undp.org",
"sf.net"];




var async = require("async");
var axios = require('axios');
var htmlToText = require('html-to-text');
var sw = require('stopword');
var natural = require('natural');
var http = require('http');
var https = require('https');
var events = require('events');


http.globalAgent.maxSockets = 10000000;
http.globalAgent.maxFreeSockets = 10000000;
https.globalAgent.maxSockets = 10000000;
https.globalAgent.maxFreeSockets = 10000000;
events.EventEmitter.prototype._maxListeners = 10000000;

process.on('uncaughtException', function (err) {
    console.log(err)
});



var limit = 32;
var index = [];
var itemsProcessed = 0;
var empty_count = 0;
var error_count = 0;
var cus_header = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0'}

function callbackDone () {
    console.log('all done');
    Object.keys(index).forEach(function(key) {
        var val = index[key];
        if (val < 10) {
            delete index[key]
        }
    });
    console.log(Object.keys(index).length);
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
    itemsProcessed++;
    console.log(itemsProcessed,"of",site_array.length,"err",error_count,"emt",empty_count);
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
    full_url = "http://www."+url;
    axios({
        method: 'get',
        url: full_url,
        timeout: 50000,
        maxRedirects: 5//,
        //headers: cus_header
    }).then(function (response) {
            body = response.data;
            clean(body, full_url, function(result, file_name){
                if(result.length>0){
                    //console.log(result.length,url);
                    freq(result,function(result){})
                } else {
                    empty_count++;
                    itemsProcessed++;
                    console.log(itemsProcessed,"of",site_array.length,"err",error_count,"emt",empty_count);
                    if(itemsProcessed === site_array.length) {
                        callbackDone();
                    }
                }
            })
        })
        .catch(function (error) {
            console.log(error.code);
            error_count++;
            itemsProcessed++;
            console.log(itemsProcessed,"of",site_array.length,"err",error_count,"emt",empty_count);
            if(itemsProcessed === site_array.length) {
                callbackDone();
            }
        });
}


async.forEachLimit(site_array,limit,function (item, callback) {
    getHtml(item);
    callback(null);
},function (err) {
    console.log(err);
});





