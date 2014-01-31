var parser = require('rssparser');
var options = {};
var prajavani = {
		"state":"http://www.prajavani.net/taxonomy/term/30/all/feed",
		"national":"http://www.prajavani.net/taxonomy/term/31/all/feed",
		"foreign":"http://www.prajavani.net/taxonomy/term/33/all/feed",
		"sports":"http://www.prajavani.net/taxonomy/term/64/all/feed",
		"bengalore":"http://www.prajavani.net/taxonomy/term/32/all/feed",
		"udupi":"http://www.prajavani.net/taxonomy/term/47/all/feed",
		"chamarajanagara":"http://www.prajavani.net/taxonomy/term/43/all/feed",
		"bellary":"http://www.prajavani.net/taxonomy/term/60/all/feed",
		"shivamoga":"http://www.prajavani.net/taxonomy/term/37/all/feed",
		"bidar":"http://www.prajavani.net/taxonomy/term/39/all/feed",
		"uttarakannada":"http://www.prajavani.net/taxonomy/term/56/all/feed",
		"chikkaballapura":"http://www.prajavani.net/taxonomy/term/35/all/feed",
		"bagalkote":"http://www.prajavani.net/taxonomy/term/61/all/feed",
		"mysore":"http://www.prajavani.net/taxonomy/term/46/all/feed",
		"dakshinakannada":"http://www.prajavani.net/taxonomy/term/53/all/feed",
		"kodagu":"http://www.prajavani.net/taxonomy/term/44/all/feed",
		"chikkamagaluru":"http://www.prajavani.net/taxonomy/term/49/all/feed",
		"bijapura":"http://www.prajavani.net/taxonomy/term/59/all/feed",
		"yadagiri":"http://www.prajavani.net/taxonomy/term/52/all/feed",
		"koppala":"http://www.prajavani.net/taxonomy/term/50/all/feed",
		"chitradurga":"http://www.prajavani.net/taxonomy/term/36/all/feed",
		"bengalore":"http://www.prajavani.net/taxonomy/term/32/all/feed",
		"ramanagara":"http://www.prajavani.net/taxonomy/term/66/all/feed",
		"kolara":"http://www.prajavani.net/taxonomy/term/65/all/feed",
		"tumkuru":"http://www.prajavani.net/taxonomy/term/34/all/feed",
		"bengalorerural":"http://www.prajavani.net/taxonomy/term/48/all/feed",
		"raichuru":"http://www.prajavani.net/taxonomy/term/41/all/feed",
		"gadag":"http://www.prajavani.net/taxonomy/term/58/all/feed",
		"davanagere":"http://www.prajavani.net/taxonomy/term/38/all/feed",
		"belagavi":"http://www.prajavani.net/taxonomy/term/55/all/feed",
		"haveri":"http://www.prajavani.net/taxonomy/term/57/all/feed",
		"Gulbarga":"http://www.prajavani.net/taxonomy/term/40/all/feed",
		"Dharwad":"http://www.prajavani.net/taxonomy/term/54/all/feed",
		"Mandya":"http://www.prajavani.net/taxonomy/term/63/all/feed",
		"Hasana":"http://www.prajavani.net/taxonomy/term/45/all/feed",
		"Sapthahikapuravani":"http://www.prajavani.net/taxonomy/term/76/all/feed",
		"kamanabillu":"http://www.prajavani.net/taxonomy/term/84/all/feed",
		"karnatakadarshana":"http://www.prajavani.net/taxonomy/term/77/all/feed",
		"shikshana":"http://www.prajavani.net/taxonomy/term/79/all/feed",
		"metro":"http://www.prajavani.net/taxonomy/term/78/all/feed",
		"krushi":"http://www.prajavani.net/taxonomy/term/83/all/feed",
		"commerce":"http://www.prajavani.net/taxonomy/term/62/all/feed",
		"technology":"http://www.prajavani.net/taxonomy/term/82/all/feed",
		"bhumika":"http://www.prajavani.net/taxonomy/term/80/all/feed",
		"sahithyapuravani":"http://www.prajavani.net/taxonomy/term/85/all/feed",
		"kride":"http://www.prajavani.net/taxonomy/term/51/all/feed",
		"kanasinamane":"http://www.prajavani.net/taxonomy/term/86/all/feed",
		"antharala":"http://www.prajavani.net/taxonomy/term/119/all/feed",
		"e_bhanuvara":"http://www.prajavani.net/taxonomy/term/74/all/feed",
		"jathi_samvadha":"http://www.prajavani.net/taxonomy/term/8626/all/feed",
		"lifestyle":"http://www.prajavani.net/taxonomy/term/71/all/feed",
		"pravasa":"http://www.prajavani.net/taxonomy/term/70/all/feed",
		"agogya":"http://www.prajavani.net/taxonomy/term/72/all/feed",
		"food_ahara":"http://www.prajavani.net/taxonomy/term/73/all/feed",
		"gruhalankara":"http://www.prajavani.net/taxonomy/term/75/all/feed",
		"sinima":"http://www.prajavani.net/taxonomy/term/138/all/feed",
		"tv":"http://www.prajavani.net/taxonomy/term/139/all/feed",
		"kale":"http://www.prajavani.net/taxonomy/term/142/all/feed",
		"nruthya":"http://www.prajavani.net/taxonomy/term/140/all/feed",
		"navu_nodidha_cinema":"http://www.prajavani.net/taxonomy/term/143/all/feed"
	}
var kannadaprabha = {
		"Khushi":"http://www.kannadaprabha.com/sectionrss--182.html",
		"TopNews":"http://www.kannadaprabha.com/sectionrss-1.html",
		"LatestNews":"http://www.kannadaprabha.com/sectionrss-116.html",
		"Nation":"http://www.kannadaprabha.com/sectionrss-4.html",
		"Sports":"http://www.kannadaprabha.com/sectionrss-7.html",
		"Editorial":"http://www.kannadaprabha.com/sectionrss-38.html",
		"Business":"http://www.kannadaprabha.com/sectionrss-5.html",
		"Politics":"http://www.kannadaprabha.com/sectionrss-128.html",
		"Columns":"http://www.kannadaprabha.com/sectionrss-91.html",
		"Film_Feature":"http://www.kannadaprabha.com/sectionrss-177.html",
		"Film_News":"http://www.kannadaprabha.com/sectionrss-178.html",
		"Film_Review":"http://www.kannadaprabha.com/sectionrss-179.html",
		"Bollywood":"http://www.kannadaprabha.com/sectionrss-180.html",
		"Mysore":"http://www.kannadaprabha.com/sectionrss-130.html",
		"Bangalore":"http://www.kannadaprabha.com/sectionrss-131.html",
		"BangaloreRural":"http://www.kannadaprabha.com/sectionrss-132.html",
		"Bagalkot":"http://www.kannadaprabha.com/sectionrss-133.html",
		"Belgaum":"http://www.kannadaprabha.com/sectionrss-134.html",
		"Bellaryಿ":"http://www.kannadaprabha.com/sectionrss-135.html",
		"Bidar":"http://www.kannadaprabha.com/sectionrss-136.html",
		"Bijapur":"http://www.kannadaprabha.com/sectionrss-137.html",
		"Chamarajanagar":"http://www.kannadaprabha.com/sectionrss-138.html",
		"Chikkamagalur":"http://www.kannadaprabha.com/sectionrss-139.html",
		"Chitradurga":"http://www.kannadaprabha.com/sectionrss-140.html",
		"DakshinaKannada":"http://www.kannadaprabha.com/sectionrss-141.html",
		"Davanagere":"http://www.kannadaprabha.com/sectionrss-142.html",
		"Dharwad":"http://www.kannadaprabha.com/sectionrss-143.html",
		"Gadag":"http://www.kannadaprabha.com/sectionrss-144.html",
		"Gulbarga":"http://www.kannadaprabha.com/sectionrss-145.html",
		"Hassan":"http://www.kannadaprabha.com/sectionrss-146.html",
		"Haveri":"http://www.kannadaprabha.com/sectionrss-147.html",
		"Kodagu":"http://www.kannadaprabha.com/sectionrss-148.html",
		"Kolar":"http://www.kannadaprabha.com/sectionrss-149.html",
		"Koppal":"http://www.kannadaprabha.com/sectionrss-150.html",
		"Mandya":"http://www.kannadaprabha.com/sectionrss-151.html",
		"Raichur":"http://www.kannadaprabha.com/sectionrss-152.html",
		"Shimoga":"http://www.kannadaprabha.com/sectionrss-153.html",
		"Tumkur":"http://www.kannadaprabha.com/sectionrss-154.html",
		"Udupi":"http://www.kannadaprabha.com/sectionrss-155.html",
		"UttaraKannada":"http://www.kannadaprabha.com/sectionrss-156.html",
		"Sapthahikaprabha":"http://www.kannadaprabha.com/sectionrss-158.html",
		"by2coffee":"http://www.kannadaprabha.com/sectionrss-160.html",
		"ArtLiterature":"http://www.kannadaprabha.com/sectionrss-161.html",
		"ScienceTechnologyನ":"http://www.kannadaprabha.com/sectionrss-163.html",
		"HealthLifestyle":"http://www.kannadaprabha.com/sectionrss-164.html",
		"YouthChildren":"http://www.kannadaprabha.com/sectionrss-165.html",
		"WomenLiving":"http://www.kannadaprabha.com/sectionrss-171.html",
		"AgricultureEnvironment":"http://www.kannadaprabha.com/sectionrss-173.html",
		"TravelAutomobile":"http://www.kannadaprabha.com/sectionrss-175.html",
		"AchievementIdealism":"http://www.kannadaprabha.com/sectionrss-176.html",
		"HoranaduKannadiga":"http://www.kannadaprabha.com/sectionrss-114.html",
		"Astrology":"http://www.kannadaprabha.com/sectionrss-107.html"
	}
var udayavani = {
	"rajya":"http://www.udayavani.com/feed.aspx?cat_id=881&languageid=15",
	"rashtriya":"http://www.udayavani.com/feed.aspx?cat_id=883&languageid=15",
	"karnataka":"http://www.udayavani.com/feed.aspx?cat_id=2651&languageid=15",
	"national":"http://www.udayavani.com/feed.aspx?cat_id=2689&languageid=15",
	"international":"http://www.udayavani.com/feed.aspx?cat_id=2694&languageid=15",
	"sports":"http://www.udayavani.com/feed.aspx?cat_id=2695&languageid=15",
	"business":"http://www.udayavani.com/feed.aspx?cat_id=2696&languageid=15",
	"cinema":"http://www.udayavani.com/feed.aspx?cat_id=2697&languageid=15",
	"columns":"http://www.udayavani.com/feed.aspx?cat_id=2719&languageid=15",
	"puravanigalu":"http://www.udayavani.com/feed.aspx?cat_id=936&languageid=15",
	"jagathu":"http://www.udayavani.com/feed.aspx?cat_id=885&languageid=15"
}
var others = {
	"thatskannada":"http://kannada.oneindia.in/rss/kannada-news-fb.xml",
	"varthabharathi":"http://vbnewsonline.com/feeds/rss/",
	"suvarnanews":"http://www.suvarnanews.tv/component/ninjarsssyndicator/?feed_id=1&format=raw",
	"karnatakainfoline":"http://karnatakainfoline.com/feed"
	}

var finalObj =[];	
var feedready = 0;
var count = 0;
var weblinks = new Array();	
weblinks[0] = udayavani.karnataka;
weblinks[1] = kannadaprabha.LatestNews;
weblinks[2] = others.thatskannada;
weblinks[3] = others.suvarnanews;
weblinks[4] = prajavani.national;
weblinks[5] = udayavani.national;
weblinks[6] = kannadaprabha.TopNews;
weblinks[7] = prajavani.state;

var columnistlinks = new Array();
var column_count = 0	;

columnistlinks[0] = udayavani.columns;
columnistlinks[1] = kannadaprabha.Columns;
columnistlinks[2] = prajavani.lifestyle;
columnistlinks[3] = kannadaprabha.Editorial;



exports.init = function(){
	getfeed();
	setInterval(function () {
	getfeed();
  }, 500000);
}
exports.newsfeed = function(socket){
	sendFeed(socket);
	doColumnist(socket);
  setInterval(function () {
  	//doQuery(socket);
  	sendFeed(socket);
  }, 50000);
   // 	  setInterval(function () {
  	// doColumnist(socket);
   //  }, 6000000);
};
function doColumnist(socket)
{
	console.log("Inside Start DoColomnist function");
	parser.parseURL(columnistlinks[(column_count++)%4], options, function(err, out){
    if(out != null)    {
    	socket.emit('columnist',out)
   }
});
}
// Tue, 24 Dec 2013 18:08:45 +0530

function sendFeed(socket)
{
	console.log("Inside Start sendFeed function");
   if(feedready == 1)   {
   	   	socket.emit('message',finalObj);
   }
}

function getfeed()
{
	console.log("Inside Start getfeed function");
	finalObj =[];
	feedready = 0;
	var j = 0;
	for(var i =0 ;i<= 7;i++)	{
		console.log("i -->",i);
		parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ",out.items[0]);
	     	finalObj = finalObj.concat(out.items[0]);
	    	finalObj = finalObj.concat(out.items[1]);
	    	finalObj = finalObj.concat(out.items[2]);
	    	finalObj = finalObj.concat(out.items[4]);
   	}
   if(j == 8)   {
   	finalObj = arrysort(finalObj);
   	feedready = 1;
   }
});
}
}


function arrysort(masterList){
masterList = masterList.sort(function (a, b) {
    return a.distance_in_seconds -  b.distance_in_seconds;
});
return masterList ;
}
// Dec 25 2013 2:00AM		
// function mixin(socket)
// {
// 	console.log("Inside Start mixin function");
// 	var finalObj =[];
// 	var objs =[];
// 	var j = 0;
// 	for(var i =0 ;i<= 4;i++)	{
// 			console.log("i -->",i);
// 	parser.parseURL(weblinks[i], options, function(err, out){
//     if(out != null)    {
//     	console.log("concating j = ",j++," ",out.items[0]);
//     	var obj1 = out.items[0];
//     	var obj2 = out.items[1];
//     	var obj3 = out.items[2];

// 		if(out.url.indexOf("http://www.prajavani.net") != -1){
//     	obj1.paper_source = "ಪ್ರಜಾವಾಣಿ";
//        	obj2.paper_source = "ಪ್ರಜಾವಾಣಿ";
//        	obj3.paper_source = "ಪ್ರಜಾವಾಣಿ";
//        }
//        	else if(out.url.indexOf("http://kannadaprabha.com") != -1)    	{
//     	obj1.paper_source = "ಕನ್ನಡಪ್ರಭ";
//        	obj2.paper_source = "ಕನ್ನಡಪ್ರಭ";
//        	obj3.paper_source = "ಕನ್ನಡಪ್ರಭ";
//        }
//        	else if(out.url.indexOf("http://kannada.oneindia.in") != -1)    	{
//     	obj1.paper_source = "ದಟ್ಸ್‌ಕನ್ನಡ";
//        	obj2.paper_source = "ದಟ್ಸ್‌ಕನ್ನಡ";
//        	obj3.paper_source = "ದಟ್ಸ್‌ಕನ್ನಡ";
//        }
//        	else if(out.url.indexOf("http://www.suvarnanews.tv") != -1)    	{
//     	obj1.paper_source = "ಸುವರ್ಣ ನ್ಯೂಸ್";
//        	obj2.paper_source = "ಸುವರ್ಣ ನ್ಯೂಸ್";
//        	obj3.paper_source = "ಸುವರ್ಣ ನ್ಯೂಸ್";
//        }
//      	finalObj = finalObj.concat(obj1);
//     	finalObj = finalObj.concat(obj2);
//     	finalObj = finalObj.concat(obj3);
//    }
//    if(j == 5)   {
//    	finalObj = arrysort(finalObj);
//    	console.log("j == 3 -->",finalObj);
//    	socket.emit('message',finalObj);
//    }
// });
// }
// }


// function doQuery(socket)
// {
// 	console.log("Inside Start DoQuery function");
// 	parser.parseURL(weblinks[(column_count++)%4], options, function(err, out){
//     if(out != null)    {
//     	socket.emit('message',out)
//     }
  
// });
// }
///to convert lang lat use--http://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&sensor=true_or_false
//http://www.w3schools.com/html/html5_geolocation.asp