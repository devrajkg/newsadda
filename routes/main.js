var parser = require('rssparser');
var options = {};
var prajavani = {
		"state":"http://www.prajavani.net/taxonomy/term/30/all/feed",
		"national":"http://www.prajavani.net/taxonomy/term/31/all/feed",
		"foreign":"http://www.prajavani.net/taxonomy/term/33/all/feed",
		"sports":"http://www.prajavani.net/taxonomy/term/64/all/feed",
		"Bangalore":"http://www.prajavani.net/taxonomy/term/32/all/feed",
		"Udupi":"http://www.prajavani.net/taxonomy/term/47/all/feed",
		"Chamarajanagar":"http://www.prajavani.net/taxonomy/term/43/all/feed",
		"Bellary":"http://www.prajavani.net/taxonomy/term/60/all/feed",
		"Shivamogga":"http://www.prajavani.net/taxonomy/term/37/all/feed",
		"Bidar":"http://www.prajavani.net/taxonomy/term/39/all/feed",
		"Uttara_Kannada":"http://www.prajavani.net/taxonomy/term/56/all/feed",
		"Chikballapur":"http://www.prajavani.net/taxonomy/term/35/all/feed",
		"Bagalkot":"http://www.prajavani.net/taxonomy/term/61/all/feed",
		"Mysore":"http://www.prajavani.net/taxonomy/term/46/all/feed",
		"Dakshina_Kannada":"http://www.prajavani.net/taxonomy/term/53/all/feed",
		"Kodagu":"http://www.prajavani.net/taxonomy/term/44/all/feed",
		"Chikmagalur":"http://www.prajavani.net/taxonomy/term/49/all/feed",
		"Bijapur":"http://www.prajavani.net/taxonomy/term/59/all/feed",
		"Yadgir":"http://www.prajavani.net/taxonomy/term/52/all/feed",
		"Koppal":"http://www.prajavani.net/taxonomy/term/50/all/feed",
		"Chitradurga":"http://www.prajavani.net/taxonomy/term/36/all/feed",
		"Ramanagara":"http://www.prajavani.net/taxonomy/term/66/all/feed",
		"Kolar":"http://www.prajavani.net/taxonomy/term/65/all/feed",
		"Tumkur":"http://www.prajavani.net/taxonomy/term/34/all/feed",
		"Bangalore_Rural":"http://www.prajavani.net/taxonomy/term/48/all/feed",
		"Raichur":"http://www.prajavani.net/taxonomy/term/41/all/feed",
		"Gadag":"http://www.prajavani.net/taxonomy/term/58/all/feed",
		"Davanagere":"http://www.prajavani.net/taxonomy/term/38/all/feed",
		"Belgaum":"http://www.prajavani.net/taxonomy/term/55/all/feed",
		"Haveri":"http://www.prajavani.net/taxonomy/term/57/all/feed",
		"Gulbarga":"http://www.prajavani.net/taxonomy/term/40/all/feed",
		"Dharwad":"http://www.prajavani.net/taxonomy/term/54/all/feed",
		"Mandya":"http://www.prajavani.net/taxonomy/term/63/all/feed",
		"Hassan":"http://www.prajavani.net/taxonomy/term/45/all/feed",
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
		"film":"http://www.prajavani.net/taxonomy/term/138/all/feed",
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
		"Bangalore_Rural":"http://www.kannadaprabha.com/sectionrss-132.html",
		"Ramanagara":"http://www.kannadaprabha.com/sectionrss-132.html",
		"Bagalkot":"http://www.kannadaprabha.com/sectionrss-133.html",
		"Belgaum":"http://www.kannadaprabha.com/sectionrss-134.html",
		"Bellary":"http://www.kannadaprabha.com/sectionrss-135.html",
		"Bidar":"http://www.kannadaprabha.com/sectionrss-136.html",
		"Bijapur":"http://www.kannadaprabha.com/sectionrss-137.html",
		"Chamarajanagar":"http://www.kannadaprabha.com/sectionrss-138.html",
		"Chikmagalur":"http://www.kannadaprabha.com/sectionrss-139.html",
		"Chitradurga":"http://www.kannadaprabha.com/sectionrss-140.html",
		"Dakshina_Kannada":"http://www.kannadaprabha.com/sectionrss-141.html",
		"Davanagere":"http://www.kannadaprabha.com/sectionrss-142.html",
		"Dharwad":"http://www.kannadaprabha.com/sectionrss-143.html",
		"Gadag":"http://www.kannadaprabha.com/sectionrss-144.html",
		"Gulbarga":"http://www.kannadaprabha.com/sectionrss-145.html",
		"Yadgir":"http://www.kannadaprabha.com/sectionrss-145.html",
		"Hassan":"http://www.kannadaprabha.com/sectionrss-146.html",
		"Haveri":"http://www.kannadaprabha.com/sectionrss-147.html",
		"Kodagu":"http://www.kannadaprabha.com/sectionrss-148.html",
		"Kolar":"http://www.kannadaprabha.com/sectionrss-149.html",
		"Chikballapur":"http://www.kannadaprabha.com/sectionrss-149.html",
		"Koppal":"http://www.kannadaprabha.com/sectionrss-150.html",
		"Mandya":"http://www.kannadaprabha.com/sectionrss-151.html",
		"Raichur":"http://www.kannadaprabha.com/sectionrss-152.html",
		"Shivamogga":"http://www.kannadaprabha.com/sectionrss-153.html",
		"Tumkur":"http://www.kannadaprabha.com/sectionrss-154.html",
		"Udupi":"http://www.kannadaprabha.com/sectionrss-155.html",
		"Uttara_Kannada":"http://www.kannadaprabha.com/sectionrss-156.html",
		"Sapthahikaprabha":"http://www.kannadaprabha.com/sectionrss-158.html",
		"by2coffee":"http://www.kannadaprabha.com/sectionrss-160.html",
		"ArtLiterature":"http://www.kannadaprabha.com/sectionrss-161.html",
		"ScienceTechnology":"http://www.kannadaprabha.com/sectionrss-163.html",
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
	"film":"http://www.udayavani.com/feed.aspx?cat_id=2697&languageid=15",
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

var no_of_clicks =0;
var finalObj =[];	
var feedready = 0;
var finalCommerceObj =[];	
var feedCommerceready = 0;
var finalmoviesObj =[];	
var feedmoviesready = 0;
var finalscienceobj =[];	
var feedscienceready = 0;
var finalscienceObj =[];	
var feedspecialready = 0;
var finalspecialObj =[];	
var feedsportdready = 0;
var finalsportsObj =[];	
var feedstateready = 0;
var finalstateObj =[];	
var feedstateready = 0;
var finalnationalObj =[];	
var feednationalready = 0;
var finalcolumnObj =[];	
var feedcolumnready = 0;
var finalagricultureObj =[];	
var feedagricultureready = 0;
var finalforeignObj =[];	
var feedaforeignready = 0;

///
var finalDavanagereObj =[];	
var feedaDavanagereready = 0;

///

var finalDistObj =[];	
var feedDistready = 0;
var count = 0;
var sidefeedlinks = new Array();
var link_count	= 8;
var weblinks = new Array();	
weblinks[0] = udayavani.karnataka;
weblinks[1] = kannadaprabha.LatestNews;
weblinks[2] = others.thatskannada;
weblinks[3] = prajavani.national;
weblinks[4] = udayavani.national;
weblinks[5] = kannadaprabha.TopNews;
weblinks[6] = prajavani.state;
weblinks[7] = kannadaprabha.Politics;
//weblinks[7] = others.suvarnanews;
	
link_count = weblinks.length;
	// for (var i=0; i < weblinks.length; i++) {
 //   feedlinks[i] = weblinks[i]; }

var columnistlinks = new Array();
var column_count = 0	;

columnistlinks[0] = udayavani.columns;
columnistlinks[1] = kannadaprabha.Columns;
columnistlinks[2] = prajavani.lifestyle;
columnistlinks[3] = kannadaprabha.Editorial;

var state = new Array();
state[0] = udayavani.karnataka;;
state[1] = prajavani.state;
state[2] = kannadaprabha.Politics;


var national = new Array();
national[0] = prajavani.national;
national[1] = kannadaprabha.Nation;
national[2] = udayavani.national;

var commerce = new Array();
commerce[0] = prajavani.commerce;
commerce[1] = kannadaprabha.Business;
commerce[2] = udayavani.business;

var sports = new Array();
sports[0] = prajavani.sports;
sports[1] = kannadaprabha.Sports;
sports[2] = udayavani.sports;

var technology = new Array();
technology[0] = prajavani.technology;
technology[1] = kannadaprabha.ScienceTechnology;
//technology[2] = udayavani.sports;

var agriculture = new Array();
agriculture[0] = prajavani.krushi;
agriculture[1] = kannadaprabha.AgricultureEnvironment;
//agriculture[2] = udayavani.sports;

var movies = new Array();
movies[0] = prajavani.film;
movies[1] = kannadaprabha.Film_Review;
movies[2] = udayavani.film;
movies[3] = kannadaprabha.Film_News;
movies[4] = kannadaprabha.Film_Feature;
movies[5] = prajavani.navu_nodidha_cinema;

var special = new Array();
special[0] = prajavani.bhumika;
special[1] = kannadaprabha.HealthLifestyle;
special[2] = udayavani.puravanigalu;

var science = new Array();
science[0] = prajavani.technology;
science[1] = kannadaprabha.ScienceTechnology;

var foreign =  new Array();
foreign[0] = udayavani.international;
foreign[1] = prajavani.foreign;
foreign[2] = kannadaprabha.HoranaduKannadiga;


exports.init = function(){
	no_of_clicks = 0;
	getfeed(weblinks);
	 getcolumnsfeed();
	// getagriculturefeed();
	// getCommercefeed();
	// getstatefeed();
	// getnationalfeed();
	// getmoviesfeed();
	// getsciencefeed();
	// getsportsfeed();
	// getforeignfeed();
	// getspecialfeed();
	getDavanagerefeed();
	// getBangalorefeed();
	// getShivamoggafeed();
	//getspecialfeed();
	//  setInterval(function () {
	//  getfeed(weblinks);
 //   }, 36000);
	//  setInterval(function () {
	//  getcolumnsfeed();
	// getagriculturefeed();
	// getCommercefeed();
	// getstatefeed();
	// getnationalfeed();
	// getmoviesfeed();
	// getsciencefeed();
	// getsportsfeed();
	// getforeignfeed();
	// getspecialfeed();
	// getDavanagerefeed();
	// //getBangalorefeed();
	// getShivamoggafeed();
 //   }, 216000);
}	
exports.newsfeed = function(socket){

no_of_clicks++;
send_no_of_clicks(socket);
 	sendFeed(socket);
 	sendcolumnFeed(socket);
 	//sendDavanagereFeed(socket);
	//doColumnist(socket);
  // setInterval(function () {
  // 	//doQuery(socket);
  // 	sendFeed(socket);
  	
  // }, 5000);

 socket.on('district', function (district) {
 	console.log("inside district -->",district);
 	if(district == 'Davanagere') 	{
 		sendDavanagereFeed(socket);
	}
	else if(district == 'Shivamogga') 	{
 		sendShivamoggaFeed(socket);
 	}
 	else if(district == 'Bangalore') {
 		sendBangaloreFeed(socket);
 	}
 	else{
 		sendDavanagereFeed(socket);
 	}
 });

socket.on('sideOptions', function (ID) {
 	console.log("inside state ------------------->",ID);
 	if(ID == 1) 	{
 		//sendcolumnFeed(socket);
		sendstateFeed(socket);  		
   	}
   	else if(ID == 2)   	{
  		sendnationalFeed(socket);
   	}
   	else if(ID == 3)   	{
 		sendCommerceFeed(socket);
   	}
   	else if(ID == 4)   	{
 		sendsportsFeed(socket);
   	}
   	else if(ID == 5)   	{
 			sendforeignFeed(socket);
   	}
   	else if(ID == 6)   	{
 	 		sendagricultureFeed(socket);
   	}
   	else if(ID == 7)   	{
 	  		sendmoviesFeed(socket);
   	}
   	else if(ID == 8)   	{
 	 		sendspecialFeed(socket);
   	}
   	else if(ID == 9)   	{
 	 		sendscienceFeed(socket);
   	}
   //	sendcolumnFeed(socket);
   	});

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
function send_no_of_clicks(socket)
{
	socket.emit('no_of_clicks',no_of_clicks);
}
function sendCommerceFeed(socket)
{
	console.log("Inside Start sendCommerceFeed function");
   if(feedCommerceready == 1)   {
   	   	socket.emit('message',finalCommerceObj);
   }
}

function sendstateFeed(socket)
{
	console.log("Inside Start sendCommerceFeed function");
   if(feedstateready == 1)   {
   	   	socket.emit('message',finalstateObj);
   }
}
function sendnationalFeed(socket)
{
	console.log("Inside Start sendCommerceFeed function");
   if(feednationalready == 1)   {
   	   	socket.emit('message',finalnationalObj);
   }
}
function sendsportsFeed(socket)
{
	console.log("Inside Start sendCommerceFeed function");
   if(feedsportsready == 1)   {
   	   	socket.emit('message',finalsportsObj);
   }
}
function sendmoviesFeed(socket)
{
	console.log("Inside Start sendCommerceFeed function");
   if(feedmoviesready == 1)   {
   	   	socket.emit('message',finalmoviesObj);
   }
}
function sendforeignFeed(socket)
{
	console.log("Inside Start sendCommerceFeed function");
   if(feedforeignready == 1)   {
   	   	socket.emit('message',finalforeignObj);
   }
}
function sendscienceFeed(socket)
{
	console.log("Inside Start sendCommerceFeed function");
   if(feedCommerceready == 1)   {
   	   	socket.emit('message',finalscienceObj);
   }
}

function sendcolumnFeed(socket)
{
	console.log("Inside Start sendcolumnFeed function");
   if(feedcolumnready == 1)   {
   	   	socket.emit('columnist',finalcolumnObj);
   }
}

function sendagricultureFeed(socket)
{
   if(feedagricultureready == 1)   {
   	   	socket.emit('message',finalagricultureObj);
   }
}
function sendspecialFeed(socket)
{
   if(feedspecialready == 1)   {
   	   	socket.emit('message',finalspecialObj);
   }
}

function getCommercefeed()
{
	console.log("Inside Start getfeed function");
	finalCommerceObj =[];
	feedCommerceready = 0;
	var j = 0;
	for(var i =0 ;i< 3;i++)	{
		console.log("i -->",i);
		parser.parseURL(commerce[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalCommerceObj = finalCommerceObj.concat(out.items[0]);
	    	finalCommerceObj = finalCommerceObj.concat(out.items[1]);
	    	finalCommerceObj = finalCommerceObj.concat(out.items[2]);
	    	finalCommerceObj = finalCommerceObj.concat(out.items[4]);
	    	finalCommerceObj = finalCommerceObj.concat(out.items[5]);
	    	finalCommerceObj = finalCommerceObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 3)  {
   	console.log("Inside Start getfeed function 3333");
   	finalCommerceObj = arrysort(finalCommerceObj);
   	feedCommerceready = 1;
   }
});
}
}

function getstatefeed()
{
	console.log("Inside Start getfeed function");
	finalstateObj =[];
	feedstateready = 0;
	var j = 0;
	for(var i =0 ;i< state.length;i++)	{
		console.log("i -->",i);
		parser.parseURL(state[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalstateObj = finalstateObj.concat(out.items[0]);
	    	finalstateObj = finalstateObj.concat(out.items[1]);
	    	finalstateObj = finalstateObj.concat(out.items[2]);
	    	finalstateObj = finalstateObj.concat(out.items[4]);
	    	finalstateObj = finalstateObj.concat(out.items[5]);
	    	finalstateObj = finalstateObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == state.length)  {
   	console.log("Inside Start getfeed function 3333");
   	finalstateObj = arrysort(finalstateObj);
   	feedstateready = 1;
   }
});
}
}

function getsportsfeed()
{
	console.log("Inside Start getfeed function");
	finalsportsObj =[];
	feedsportsready = 0;
	var j = 0;
	for(var i =0 ;i< sports.length;i++)	{
		console.log("i -->",i);
		parser.parseURL(sports[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalsportsObj = finalsportsObj.concat(out.items[0]);
	    	finalsportsObj = finalsportsObj.concat(out.items[1]);
	    	finalsportsObj = finalsportsObj.concat(out.items[2]);
	    	finalsportsObj = finalsportsObj.concat(out.items[4]);
	    	finalsportsObj = finalsportsObj.concat(out.items[5]);
	    	finalsportsObj = finalsportsObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == sports.length)  {
   	console.log("Inside Start getfeed function 3333");
   	finalsportsObj = arrysort(finalsportsObj);
   	feedsportsready = 1;
   }
});
}
}
function getsciencefeed()
{
	console.log("Inside Start getfeed function");
	finalscienceObj =[];
	feedscienceready = 0;
	var j = 0;
	for(var i =0 ;i< science.length;i++)	{
		console.log("i -->",i);
		parser.parseURL(science[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalscienceObj = finalscienceObj.concat(out.items[0]);
	    	finalscienceObj = finalscienceObj.concat(out.items[1]);
	    	finalscienceObj = finalscienceObj.concat(out.items[2]);
	    	finalscienceObj = finalscienceObj.concat(out.items[4]);
	    	finalscienceObj = finalscienceObj.concat(out.items[5]);
	    	finalscienceObj = finalscienceObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == science.length)  {
   	console.log("Inside Start getfeed function 3333");
   	finalscienceObj = arrysort(finalscienceObj);
   	feedscienceready = 1;
   }
});
}
}

function getnationalfeed()
{
	console.log("Inside Start getfeed function");
	finalnationalObj =[];
	feednationalready = 0;
	var j = 0;
	for(var i =0 ;i< national.length;i++)	{
		console.log("i -->",i);
		parser.parseURL(national[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalnationalObj = finalnationalObj.concat(out.items[0]);
	    	finalnationalObj = finalnationalObj.concat(out.items[1]);
	    	finalnationalObj = finalnationalObj.concat(out.items[2]);
	    	finalnationalObj = finalnationalObj.concat(out.items[4]);
	    	finalnationalObj = finalnationalObj.concat(out.items[5]);
	    	finalnationalObj = finalnationalObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == national.length)  {
   	console.log("Inside Start getfeed function 3333");
   	finalnationalObj = arrysort(finalnationalObj);
   	feednationalready = 1;
   }
});
}
}
function getmoviesfeed()
{
	console.log("Inside Start getfeed function");
	finalmoviesObj =[];
	feedmoviesready = 0;
	var j = 0;
	for(var i =0 ;i< movies.length;i++)	{
		console.log("i -->",i);
		parser.parseURL(movies[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalmoviesObj = finalmoviesObj.concat(out.items[0]);
	    	finalmoviesObj = finalmoviesObj.concat(out.items[1]);
	    	finalmoviesObj = finalmoviesObj.concat(out.items[2]);
	    	finalmoviesObj = finalmoviesObj.concat(out.items[4]);
	    	finalmoviesObj = finalmoviesObj.concat(out.items[5]);
	    	finalmoviesObj = finalmoviesObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == movies.length)  {
   	console.log("Inside Start getfeed function 3333");
   	finalmoviesObj = arrysort(finalmoviesObj);
   	feedmoviesready = 1;
   }
});
}
}

function getforeignfeed()
{
	console.log("Inside Start getfeed function");
	finalforeignObj =[];
	feedforeignready = 0;
	var j = 0;
	for(var i =0 ;i< foreign.length;i++)	{
		console.log("i -->",i);
		parser.parseURL(foreign[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalforeignObj = finalforeignObj.concat(out.items[0]);
	    	finalforeignObj = finalforeignObj.concat(out.items[1]);
	    	finalforeignObj = finalforeignObj.concat(out.items[2]);
	    	finalforeignObj = finalforeignObj.concat(out.items[4]);
	    	finalforeignObj = finalforeignObj.concat(out.items[5]);
	    	finalforeignObj = finalforeignObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == foreign.length)  {
   	console.log("Inside Start getfeed function 3333");
   	finalforeignObj = arrysort(finalforeignObj);
   	feedforeignready = 1;
   }
});
}
}

function getcolumnsfeed()
{
	console.log("Inside Start getColumnsfeed function");
	finalcolumnObj =[];
	feedcolumnready = 0;
	var j = 0;
	for(var i =0 ;i< columnistlinks.length;i++)	{
		parser.parseURL(columnistlinks[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalcolumnObj = finalcolumnObj.concat(out.items[0]);
	    	finalcolumnObj = finalcolumnObj.concat(out.items[1]);
	    	finalcolumnObj = finalcolumnObj.concat(out.items[2]);
	    	finalcolumnObj = finalcolumnObj.concat(out.items[4]);
	    	finalcolumnObj = finalcolumnObj.concat(out.items[5]);
	    	finalcolumnObj = finalcolumnObj.concat(out.items[6]);
   	}
   if(j == columnistlinks.length)  {
   	//console.log("Inside Start getColumnsfeed function 3333");
   	finalcolumnObj = arrysort(finalcolumnObj);
   	feedcolumnready = 1;
   }
});
}
}
function getspecialfeed()
{
	console.log("Inside Start getspecialfeed function");
	finalspecialObj =[];
	feedspecialready = 0;
	var j = 0;
	for(var i =0 ;i< special.length;i++)	{
		parser.parseURL(special[i], options, function(err, out){
		if(out != null)    {
    		console.log("concating special j = ",j++," ");
//			j++;
	     	finalspecialObj = finalspecialObj.concat(out.items[0]);
	    	finalspecialObj = finalspecialObj.concat(out.items[1]);
	    	finalspecialObj = finalspecialObj.concat(out.items[2]);
	    	finalspecialObj = finalspecialObj.concat(out.items[4]);
	    	finalspecialObj = finalspecialObj.concat(out.items[5]);
	    	finalspecialObj = finalspecialObj.concat(out.items[6]);
   	}
   if(j == special.length)  {
   	console.log("Inside Start getspecialsfeed function 3333");
   	finalspecialObj = arrysort(finalspecialObj);
   	feedspecialready = 1;
   }
});
}
}

function getagriculturefeed()
{
	console.log("Inside Start getagriculturefeed function");
	finalagricultureObj =[];
	feedagricultureready = 0;
	var j = 0;
	for(var i =0 ;i< agriculture.length;i++)	{
		parser.parseURL(agriculture[i], options, function(err, out){
		if(out != null)    {
    		console.log("concating agriculture j = ",j++," ");
//			j++;
	     	finalagricultureObj = finalagricultureObj.concat(out.items[0]);
	    	finalagricultureObj = finalagricultureObj.concat(out.items[1]);
	    	finalagricultureObj = finalagricultureObj.concat(out.items[2]);
	    	finalagricultureObj = finalagricultureObj.concat(out.items[4]);
	    	finalagricultureObj = finalagricultureObj.concat(out.items[5]);
	    	finalagricultureObj = finalagricultureObj.concat(out.items[6]);
   	}
   if(j == agriculture.length)  {
   	console.log("Inside Start getagriculturesfeed function 3333");
   	finalagricultureObj = arrysort(finalagricultureObj);
   	feedagricultureready = 1;
   }
});
}
}

function getfeed(feedlinks)
{
	console.log("Inside Start getfeed function");
	finalObj =[];
	feedready = 0;
	var j = 0;
	for(var i =0 ;i< feedlinks.length;i++)	{
		console.log("i -->",i);
		parser.parseURL(feedlinks[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalObj = finalObj.concat(out.items[0]);
	    	finalObj = finalObj.concat(out.items[1]);
	    	finalObj = finalObj.concat(out.items[2]);
	    	finalObj = finalObj.concat(out.items[4]);
	    	finalObj = finalObj.concat(out.items[5]);
	    	finalObj = finalObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == feedlinks.length)  {
   	console.log("Inside Start getfeed function 3333");
   	finalObj = arrysort(finalObj);
   	feedready = 1;
   }
});
}
}



function getDistrictfeed(socket,district)
{
	console.log("Inside Start getDistrictfeed function");
	finalDistObj =[];
	var dist = new Array();
	dist[0] = prajavani[district];
	dist[1] = kannadaprabha[district];
	console.log("dist ",dist[0]);
	console.log("dist ",dist[1]);
	feedDistready = 0;
	var j1 = 0;
	for(var i =0 ;i<= 1;i++)	{
		console.log("i -->",i);
		parser.parseURL(dist[i], options, function(err, out){
    	if(out != null)    {
    		//console.log(" getDistrictfeed concating j1 = ",j1++," ",out.items[0]);
    		j1++;
	     	finalDistObj = finalDistObj.concat(out.items[0]);
	    	finalDistObj = finalDistObj.concat(out.items[1]);
	    	finalDistObj = finalDistObj.concat(out.items[2]);
	    	finalDistObj = finalDistObj.concat(out.items[3]);
	    	finalDistObj = finalDistObj.concat(out.items[5]);
	    	finalDistObj = finalDistObj.concat(out.items[6]);
   	}
   if(j1 == 2)   {
   	console.log("concating j1s = jkj 14");
   	finalDistObj = arrysort(finalDistObj);
   	console.log("concating j1s = jkj 13");
   	feedDistready = 1;
   	console.log("concating j1s = jkj 12");
   	socket.emit('district',finalDistObj);
   	console.log("concating j1s = jkj 15");
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

///to convert lang lat use--http://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&sensor=true_or_false

//////////////////////district feed//////////////////////
var finalBangaloreObj =[];	
var feedaBangaloreready = 0;
function sendBangaloreFeed(socket)
{
   if(feedBangaloreready == 1)   {
   	   	socket.emit('district',finalBangaloreObj);
   }
}

function getBangalorefeed()
{
	console.log("Inside Start getfeed function");
	finalBangaloreObj =[];
	feedBangaloreready = 0;
	var j = 0;
	var Bangalore = new Array();
	Bangalore[0] = prajavani["Bangalore"];
	Bangalore[1] = kannadaprabha["Bangalore"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Bangalore[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalBangaloreObj = finalBangaloreObj.concat(out.items[0]);
	    	finalBangaloreObj = finalBangaloreObj.concat(out.items[1]);
	    	finalBangaloreObj = finalBangaloreObj.concat(out.items[2]);
	    	finalBangaloreObj = finalBangaloreObj.concat(out.items[4]);
	    	finalBangaloreObj = finalBangaloreObj.concat(out.items[5]);
	    	finalBangaloreObj = finalBangaloreObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalBangaloreObj = arrysort(finalBangaloreObj);
   	feedBangaloreready = 1;
   }
});
}
}

var finalUdupiObj =[];	
var feedaUdupiready = 0;
function sendUdupiFeed(socket)
{
   if(feedUdupiready == 1)   {
   	   	socket.emit('district',finalUdupiObj);
   }
}

function getUdupifeed()
{
	console.log("Inside Start getfeed function");
	finalUdupiObj =[];
	feedUdupiready = 0;
	var j = 0;
	var Udupi = new Array();
	Udupi[0] = prajavani["Udupi"];
	Udupi[1] = kannadaprabha["Udupi"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Udupi[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalUdupiObj = finalUdupiObj.concat(out.items[0]);
	    	finalUdupiObj = finalUdupiObj.concat(out.items[1]);
	    	finalUdupiObj = finalUdupiObj.concat(out.items[2]);
	    	finalUdupiObj = finalUdupiObj.concat(out.items[4]);
	    	finalUdupiObj = finalUdupiObj.concat(out.items[5]);
	    	finalUdupiObj = finalUdupiObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalUdupiObj = arrysort(finalUdupiObj);
   	feedUdupiready = 1;
   }
});
}
}

var finalChamarajanagarObj =[];	
var feedaChamarajanagarready = 0;
function sendChamarajanagarFeed(socket)
{
   if(feedChamarajanagarready == 1)   {
   	   	socket.emit('district',finalChamarajanagarObj);
   }
}

function getChamarajanagarfeed()
{
	console.log("Inside Start getfeed function");
	finalChamarajanagarObj =[];
	feedChamarajanagarready = 0;
	var j = 0;
	var Chamarajanagar = new Array();
	Chamarajanagar[0] = prajavani["Chamarajanagar"];
	Chamarajanagar[1] = kannadaprabha["Chamarajanagar"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Chamarajanagar[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalChamarajanagarObj = finalChamarajanagarObj.concat(out.items[0]);
	    	finalChamarajanagarObj = finalChamarajanagarObj.concat(out.items[1]);
	    	finalChamarajanagarObj = finalChamarajanagarObj.concat(out.items[2]);
	    	finalChamarajanagarObj = finalChamarajanagarObj.concat(out.items[4]);
	    	finalChamarajanagarObj = finalChamarajanagarObj.concat(out.items[5]);
	    	finalChamarajanagarObj = finalChamarajanagarObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalChamarajanagarObj = arrysort(finalChamarajanagarObj);
   	feedChamarajanagarready = 1;
   }
});
}
}

var finalBellaryObj =[];	
var feedaBellaryready = 0;
function sendBellaryFeed(socket)
{
   if(feedBellaryready == 1)   {
   	   	socket.emit('district',finalBellaryObj);
   }
}

function getBellaryfeed()
{
	console.log("Inside Start getfeed function");
	finalBellaryObj =[];
	feedBellaryready = 0;
	var j = 0;
	var Bellary = new Array();
	Bellary[0] = prajavani["Bellary"];
	Bellary[1] = kannadaprabha["Bellary"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Bellary[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalBellaryObj = finalBellaryObj.concat(out.items[0]);
	    	finalBellaryObj = finalBellaryObj.concat(out.items[1]);
	    	finalBellaryObj = finalBellaryObj.concat(out.items[2]);
	    	finalBellaryObj = finalBellaryObj.concat(out.items[4]);
	    	finalBellaryObj = finalBellaryObj.concat(out.items[5]);
	    	finalBellaryObj = finalBellaryObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalBellaryObj = arrysort(finalBellaryObj);
   	feedBellaryready = 1;
   }
});
}
}

var finalShivamoggaObj =[];	
var feedaShivamoggaready = 0;
function sendShivamoggaFeed(socket)
{
   if(feedShivamoggaready == 1)   {
   	   	socket.emit('district',finalShivamoggaObj);
   }
}

function getShivamoggafeed()
{
	console.log("Inside Start getfeed function");
	finalShivamoggaObj =[];
	feedShivamoggaready = 0;
	var j = 0;
	var Shivamogga = new Array();
	Shivamogga[0] = prajavani["Shivamogga"];
	Shivamogga[1] = kannadaprabha["Shivamogga"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Shivamogga[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalShivamoggaObj = finalShivamoggaObj.concat(out.items[0]);
	    	finalShivamoggaObj = finalShivamoggaObj.concat(out.items[1]);
	    	finalShivamoggaObj = finalShivamoggaObj.concat(out.items[2]);
	    	finalShivamoggaObj = finalShivamoggaObj.concat(out.items[4]);
	    	finalShivamoggaObj = finalShivamoggaObj.concat(out.items[5]);
	    	finalShivamoggaObj = finalShivamoggaObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalShivamoggaObj = arrysort(finalShivamoggaObj);
   	feedShivamoggaready = 1;
   }
});
}
}

var finalBidarObj =[];	
var feedaBidarready = 0;
function sendBidarFeed(socket)
{
   if(feedBidarready == 1)   {
   	   	socket.emit('district',finalBidarObj);
   }
}

function getBidarfeed()
{
	console.log("Inside Start getfeed function");
	finalBidarObj =[];
	feedBidarready = 0;
	var j = 0;
	var Bidar = new Array();
	Bidar[0] = prajavani["Bidar"];
	Bidar[1] = kannadaprabha["Bidar"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Bidar[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalBidarObj = finalBidarObj.concat(out.items[0]);
	    	finalBidarObj = finalBidarObj.concat(out.items[1]);
	    	finalBidarObj = finalBidarObj.concat(out.items[2]);
	    	finalBidarObj = finalBidarObj.concat(out.items[4]);
	    	finalBidarObj = finalBidarObj.concat(out.items[5]);
	    	finalBidarObj = finalBidarObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalBidarObj = arrysort(finalBidarObj);
   	feedBidarready = 1;
   }
});
}
}

var finalUttara_KannadaObj =[];	
var feedaUttara_Kannadaready = 0;
function sendUttara_KannadaFeed(socket)
{
   if(feedUttara_Kannadaready == 1)   {
   	   	socket.emit('district',finalUttara_KannadaObj);
   }
}

function getUttara_Kannadafeed()
{
	console.log("Inside Start getfeed function");
	finalUttara_KannadaObj =[];
	feedUttara_Kannadaready = 0;
	var j = 0;
	var Uttara_Kannada = new Array();
	Uttara_Kannada[0] = prajavani["Uttara_Kannada"];
	Uttara_Kannada[1] = kannadaprabha["Uttara_Kannada"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Uttara_Kannada[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalUttara_KannadaObj = finalUttara_KannadaObj.concat(out.items[0]);
	    	finalUttara_KannadaObj = finalUttara_KannadaObj.concat(out.items[1]);
	    	finalUttara_KannadaObj = finalUttara_KannadaObj.concat(out.items[2]);
	    	finalUttara_KannadaObj = finalUttara_KannadaObj.concat(out.items[4]);
	    	finalUttara_KannadaObj = finalUttara_KannadaObj.concat(out.items[5]);
	    	finalUttara_KannadaObj = finalUttara_KannadaObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalUttara_KannadaObj = arrysort(finalUttara_KannadaObj);
   	feedUttara_Kannadaready = 1;
   }
});
}
}


var finalChikballapurObj =[];	
var feedaChikballapurready = 0;
function sendChikballapurFeed(socket)
{
   if(feedChikballapurready == 1)   {
   	   	socket.emit('district',finalChikballapurObj);
   }
}

function getChikballapurfeed()
{
	console.log("Inside Start getfeed function");
	finalChikballapurObj =[];
	feedChikballapurready = 0;
	var j = 0;
	var Chikballapur = new Array();
	Chikballapur[0] = prajavani["Chikballapur"];
	Chikballapur[1] = kannadaprabha["Chikballapur"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Chikballapur[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalChikballapurObj = finalChikballapurObj.concat(out.items[0]);
	    	finalChikballapurObj = finalChikballapurObj.concat(out.items[1]);
	    	finalChikballapurObj = finalChikballapurObj.concat(out.items[2]);
	    	finalChikballapurObj = finalChikballapurObj.concat(out.items[4]);
	    	finalChikballapurObj = finalChikballapurObj.concat(out.items[5]);
	    	finalChikballapurObj = finalChikballapurObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalChikballapurObj = arrysort(finalChikballapurObj);
   	feedChikballapurready = 1;
   }
});
}
}

var finalBagalkotObj =[];	
var feedaBagalkotready = 0;
function sendBagalkotFeed(socket)
{
   if(feedBagalkotready == 1)   {
   	   	socket.emit('district',finalBagalkotObj);
   }
}

function getBagalkotfeed()
{
	console.log("Inside Start getfeed function");
	finalBagalkotObj =[];
	feedBagalkotready = 0;
	var j = 0;
	var Bagalkot = new Array();
	Bagalkot[0] = prajavani["Bagalkot"];
	Bagalkot[1] = kannadaprabha["Bagalkot"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Bagalkot[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalBagalkotObj = finalBagalkotObj.concat(out.items[0]);
	    	finalBagalkotObj = finalBagalkotObj.concat(out.items[1]);
	    	finalBagalkotObj = finalBagalkotObj.concat(out.items[2]);
	    	finalBagalkotObj = finalBagalkotObj.concat(out.items[4]);
	    	finalBagalkotObj = finalBagalkotObj.concat(out.items[5]);
	    	finalBagalkotObj = finalBagalkotObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalBagalkotObj = arrysort(finalBagalkotObj);
   	feedBagalkotready = 1;
   }
});
}
}
var finalMysoreObj =[];	
var feedaMysoreready = 0;
function sendMysoreFeed(socket)
{
   if(feedMysoreready == 1)   {
   	   	socket.emit('district',finalMysoreObj);
   }
}

function getMysorefeed()
{
	console.log("Inside Start getfeed function");
	finalMysoreObj =[];
	feedMysoreready = 0;
	var j = 0;
	var Mysore = new Array();
	Mysore[0] = prajavani["Mysore"];
	Mysore[1] = kannadaprabha["Mysore"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Mysore[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalMysoreObj = finalMysoreObj.concat(out.items[0]);
	    	finalMysoreObj = finalMysoreObj.concat(out.items[1]);
	    	finalMysoreObj = finalMysoreObj.concat(out.items[2]);
	    	finalMysoreObj = finalMysoreObj.concat(out.items[4]);
	    	finalMysoreObj = finalMysoreObj.concat(out.items[5]);
	    	finalMysoreObj = finalMysoreObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalMysoreObj = arrysort(finalMysoreObj);
   	feedMysoreready = 1;
   }
});
}
}
var finalDakshina_KannadaObj =[];	
var feedaDakshina_Kannadaready = 0;
function sendDakshina_KannadaFeed(socket)
{
   if(feedDakshina_Kannadaready == 1)   {
   	   	socket.emit('district',finalDakshina_KannadaObj);
   }
}

function getDakshina_Kannadafeed()
{
	console.log("Inside Start getfeed function");
	finalDakshina_KannadaObj =[];
	feedDakshina_Kannadaready = 0;
	var j = 0;
	var Dakshina_Kannada = new Array();
	Dakshina_Kannada[0] = prajavani["Dakshina_Kannada"];
	Dakshina_Kannada[1] = kannadaprabha["Dakshina_Kannada"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Dakshina_Kannada[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalDakshina_KannadaObj = finalDakshina_KannadaObj.concat(out.items[0]);
	    	finalDakshina_KannadaObj = finalDakshina_KannadaObj.concat(out.items[1]);
	    	finalDakshina_KannadaObj = finalDakshina_KannadaObj.concat(out.items[2]);
	    	finalDakshina_KannadaObj = finalDakshina_KannadaObj.concat(out.items[4]);
	    	finalDakshina_KannadaObj = finalDakshina_KannadaObj.concat(out.items[5]);
	    	finalDakshina_KannadaObj = finalDakshina_KannadaObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalDakshina_KannadaObj = arrysort(finalDakshina_KannadaObj);
   	feedDakshina_Kannadaready = 1;
   }
});
}
}
var finalKodaguObj =[];	
var feedaKodaguready = 0;
function sendKodaguFeed(socket)
{
   if(feedKodaguready == 1)   {
   	   	socket.emit('district',finalKodaguObj);
   }
}

function getKodagufeed()
{
	console.log("Inside Start getfeed function");
	finalKodaguObj =[];
	feedKodaguready = 0;
	var j = 0;
	var Kodagu = new Array();
	Kodagu[0] = prajavani["Kodagu"];
	Kodagu[1] = kannadaprabha["Kodagu"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Kodagu[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalKodaguObj = finalKodaguObj.concat(out.items[0]);
	    	finalKodaguObj = finalKodaguObj.concat(out.items[1]);
	    	finalKodaguObj = finalKodaguObj.concat(out.items[2]);
	    	finalKodaguObj = finalKodaguObj.concat(out.items[4]);
	    	finalKodaguObj = finalKodaguObj.concat(out.items[5]);
	    	finalKodaguObj = finalKodaguObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalKodaguObj = arrysort(finalKodaguObj);
   	feedKodaguready = 1;
   }
});
}
}
var finalChikmagalurObj =[];	
var feedaChikmagalurready = 0;
function sendKodaguFeed(socket)
{
   if(feedChikmagalurready == 1)   {
   	   	socket.emit('district',finalChikmagalurObj);
   }
}

function getChikmagalurfeed()
{
	console.log("Inside Start getfeed function");
	finalChikmagalurObj =[];
	feedChikmagalurready = 0;
	var j = 0;
	var Chikmagalur = new Array();
	Chikmagalur[0] = prajavani["Chikmagalur"];
	Chikmagalur[1] = kannadaprabha["Chikmagalur"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Chikmagalur[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalChikmagalurObj = finalChikmagalurObj.concat(out.items[0]);
	    	finalChikmagalurObj = finalChikmagalurObj.concat(out.items[1]);
	    	finalChikmagalurObj = finalChikmagalurObj.concat(out.items[2]);
	    	finalChikmagalurObj = finalChikmagalurObj.concat(out.items[4]);
	    	finalChikmagalurObj = finalChikmagalurObj.concat(out.items[5]);
	    	finalChikmagalurObj = finalChikmagalurObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalChikmagalurObj = arrysort(finalChikmagalurObj);
   	feedChikmagalurready = 1;
   }
});
}
}
var finalBijapurObj =[];	
var feedaBijapurready = 0;
function sendBijapurFeed(socket)
{
   if(feedBijapurready == 1)   {
   	   	socket.emit('district',finalBijapurObj);
   }
}

function getBijapurfeed()
{
	console.log("Inside Start getfeed function");
	finalBijapurObj =[];
	feedBijapurready = 0;
	var j = 0;
	var Bijapur = new Array();
	Bijapur[0] = prajavani["Bijapur"];
	Bijapur[1] = kannadaprabha["Bijapur"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Bijapur[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalBijapurObj = finalBijapurObj.concat(out.items[0]);
	    	finalBijapurObj = finalBijapurObj.concat(out.items[1]);
	    	finalBijapurObj = finalBijapurObj.concat(out.items[2]);
	    	finalBijapurObj = finalBijapurObj.concat(out.items[4]);
	    	finalBijapurObj = finalBijapurObj.concat(out.items[5]);
	    	finalBijapurObj = finalBijapurObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalBijapurObj = arrysort(finalBijapurObj);
   	feedBijapurready = 1;
   }
});
}
}
var finalYadgirObj =[];	
var feedaYadgirready = 0;
function sendYadgirFeed(socket)
{
   if(feedYadgirready == 1)   {
   	   	socket.emit('district',finalYadgirObj);
   }
}

function getYadgirfeed()
{
	console.log("Inside Start getfeed function");
	finalYadgirObj =[];
	feedYadgirready = 0;
	var j = 0;
	var Yadgir = new Array();
	Yadgir[0] = prajavani["Yadgir"];
	Yadgir[1] = kannadaprabha["Yadgir"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Yadgir[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalYadgirObj = finalYadgirObj.concat(out.items[0]);
	    	finalYadgirObj = finalYadgirObj.concat(out.items[1]);
	    	finalYadgirObj = finalYadgirObj.concat(out.items[2]);
	    	finalYadgirObj = finalYadgirObj.concat(out.items[4]);
	    	finalYadgirObj = finalYadgirObj.concat(out.items[5]);
	    	finalYadgirObj = finalYadgirObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalYadgirObj = arrysort(finalYadgirObj);
   	feedYadgirready = 1;
   }
});
}
}
var finalKoppalObj =[];	
var feedaKoppalready = 0;
function sendKoppalFeed(socket)
{
   if(feedKoppalready == 1)   {
   	   	socket.emit('district',finalKoppalObj);
   }
}

function getKoppalfeed()
{
	console.log("Inside Start getfeed function");
	finalKoppalObj =[];
	feedKoppalready = 0;
	var j = 0;
	var Koppal = new Array();
	Koppal[0] = prajavani["Koppal"];
	Koppal[1] = kannadaprabha["Koppal"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Koppal[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalKoppalObj = finalKoppalObj.concat(out.items[0]);
	    	finalKoppalObj = finalKoppalObj.concat(out.items[1]);
	    	finalKoppalObj = finalKoppalObj.concat(out.items[2]);
	    	finalKoppalObj = finalKoppalObj.concat(out.items[4]);
	    	finalKoppalObj = finalKoppalObj.concat(out.items[5]);
	    	finalKoppalObj = finalKoppalObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalKoppalObj = arrysort(finalKoppalObj);
   	feedKoppalready = 1;
   }
});
}
}
var finalChitradurgaObj =[];	
var feedaChitradurgaready = 0;
function sendChitradurgaFeed(socket)
{
   if(feedChitradurgaready == 1)   {
   	   	socket.emit('district',finalChitradurgaObj);
   }
}

function getChitradurgafeed()
{
	console.log("Inside Start getfeed function");
	finalChitradurgaObj =[];
	feedChitradurgaready = 0;
	var j = 0;
	var Chitradurga = new Array();
	Chitradurga[0] = prajavani["Chitradurga"];
	Chitradurga[1] = kannadaprabha["Chitradurga"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Chitradurga[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalChitradurgaObj = finalChitradurgaObj.concat(out.items[0]);
	    	finalChitradurgaObj = finalChitradurgaObj.concat(out.items[1]);
	    	finalChitradurgaObj = finalChitradurgaObj.concat(out.items[2]);
	    	finalChitradurgaObj = finalChitradurgaObj.concat(out.items[4]);
	    	finalChitradurgaObj = finalChitradurgaObj.concat(out.items[5]);
	    	finalChitradurgaObj = finalChitradurgaObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalChitradurgaObj = arrysort(finalChitradurgaObj);
   	feedChitradurgaready = 1;
   }
});
}
}
var finalRamanagaraObj =[];	
var feedaRamanagaraready = 0;
function sendRamanagaraFeed(socket)
{
   if(feedRamanagaraready == 1)   {
   	   	socket.emit('district',finalRamanagaraObj);
   }
}

function getRamanagarafeed()
{
	console.log("Inside Start getfeed function");
	finalRamanagaraObj =[];
	feedRamanagaraready = 0;
	var j = 0;
	var Ramanagara = new Array();
	Ramanagara[0] = prajavani["Ramanagara"];
	Ramanagara[1] = kannadaprabha["Ramanagara"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Ramanagara[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalRamanagaraObj = finalRamanagaraObj.concat(out.items[0]);
	    	finalRamanagaraObj = finalRamanagaraObj.concat(out.items[1]);
	    	finalRamanagaraObj = finalRamanagaraObj.concat(out.items[2]);
	    	finalRamanagaraObj = finalRamanagaraObj.concat(out.items[4]);
	    	finalRamanagaraObj = finalRamanagaraObj.concat(out.items[5]);
	    	finalRamanagaraObj = finalRamanagaraObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalRamanagaraObj = arrysort(finalRamanagaraObj);
   	feedRamanagaraready = 1;
   }
});
}
}var finalKolarObj =[];	
var feedaKolarready = 0;
function sendKolarFeed(socket)
{
   if(feedKolarready == 1)   {
   	   	socket.emit('district',finalKolarObj);
   }
}

function getKolarfeed()
{
	console.log("Inside Start getfeed function");
	finalKolarObj =[];
	feedKolarready = 0;
	var j = 0;
	var Kolar = new Array();
	Kolar[0] = prajavani["Kolar"];
	Kolar[1] = kannadaprabha["Kolar"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Kolar[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalKolarObj = finalKolarObj.concat(out.items[0]);
	    	finalKolarObj = finalKolarObj.concat(out.items[1]);
	    	finalKolarObj = finalKolarObj.concat(out.items[2]);
	    	finalKolarObj = finalKolarObj.concat(out.items[4]);
	    	finalKolarObj = finalKolarObj.concat(out.items[5]);
	    	finalKolarObj = finalKolarObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalKolarObj = arrysort(finalKolarObj);
   	feedKolarready = 1;
   }
});
}
}
var finalTumkurObj =[];	
var feedaTumkurready = 0;
function sendTumkurFeed(socket)
{
   if(feedTumkurready == 1)   {
   	   	socket.emit('district',finalTumkurObj);
   }
}

function getTumkurfeed()
{
	console.log("Inside Start getfeed function");
	finalTumkurObj =[];
	feedTumkurready = 0;
	var j = 0;
	var Tumkur = new Array();
	Tumkur[0] = prajavani["Tumkur"];
	Tumkur[1] = kannadaprabha["Tumkur"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Tumkur[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalTumkurObj = finalTumkurObj.concat(out.items[0]);
	    	finalTumkurObj = finalTumkurObj.concat(out.items[1]);
	    	finalTumkurObj = finalTumkurObj.concat(out.items[2]);
	    	finalTumkurObj = finalTumkurObj.concat(out.items[4]);
	    	finalTumkurObj = finalTumkurObj.concat(out.items[5]);
	    	finalTumkurObj = finalTumkurObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalTumkurObj = arrysort(finalTumkurObj);
   	feedTumkurready = 1;
   }
});
}
}
var finalBangalor_RuralObj =[];	
var feedaBangalor_Ruralready = 0;
function sendBangalor_RuralFeed(socket)
{
   if(feedBangalor_Ruralready == 1)   {
   	   	socket.emit('district',finalBangalor_RuralObj);
   }
}

function getBangalor_Ruralfeed()
{
	console.log("Inside Start getfeed function");
	finalBangalor_RuralObj =[];
	feedBangalor_Ruralready = 0;
	var j = 0;
	var Bangalor_Rural = new Array();
	Bangalor_Rural[0] = prajavani["Bangalor_Rural"];
	Bangalor_Rural[1] = kannadaprabha["Bangalor_Rural"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Bangalor_Rural[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalBangalor_RuralObj = finalBangalor_RuralObj.concat(out.items[0]);
	    	finalBangalor_RuralObj = finalBangalor_RuralObj.concat(out.items[1]);
	    	finalBangalor_RuralObj = finalBangalor_RuralObj.concat(out.items[2]);
	    	finalBangalor_RuralObj = finalBangalor_RuralObj.concat(out.items[4]);
	    	finalBangalor_RuralObj = finalBangalor_RuralObj.concat(out.items[5]);
	    	finalBangalor_RuralObj = finalBangalor_RuralObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalBangalor_RuralObj = arrysort(finalBangalor_RuralObj);
   	feedBangalor_Ruralready = 1;
   }
});
}
}
var finalRaichurObj =[];	
var feedaRaichurready = 0;
function sendRaichurFeed(socket)
{
   if(feedRaichurready == 1)   {
   	   	socket.emit('district',finalRaichurObj);
   }
}

function getRaichurfeed()
{
	console.log("Inside Start getfeed function");
	finalRaichurObj =[];
	feedRaichurready = 0;
	var j = 0;
	var Raichur = new Array();
	Raichur[0] = prajavani["Raichur"];
	Raichur[1] = kannadaprabha["Raichur"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Raichur[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalRaichurObj = finalRaichurObj.concat(out.items[0]);
	    	finalRaichurObj = finalRaichurObj.concat(out.items[1]);
	    	finalRaichurObj = finalRaichurObj.concat(out.items[2]);
	    	finalRaichurObj = finalRaichurObj.concat(out.items[4]);
	    	finalRaichurObj = finalRaichurObj.concat(out.items[5]);
	    	finalRaichurObj = finalRaichurObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalRaichurObj = arrysort(finalRaichurObj);
   	feedRaichurready = 1;
   }
});
}
}
var finalGadagObj =[];	
var feedaGadagready = 0;
function sendGadagFeed(socket)
{
   if(feedGadagready == 1)   {
   	   	socket.emit('district',finalGadagObj);
   }
}

function getGadagfeed()
{
	console.log("Inside Start getfeed function");
	finalGadagObj =[];
	feedGadagready = 0;
	var j = 0;
	var Gadag = new Array();
	Gadag[0] = prajavani["Gadag"];
	Gadag[1] = kannadaprabha["Gadag"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Gadag[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalGadagObj = finalGadagObj.concat(out.items[0]);
	    	finalGadagObj = finalGadagObj.concat(out.items[1]);
	    	finalGadagObj = finalGadagObj.concat(out.items[2]);
	    	finalGadagObj = finalGadagObj.concat(out.items[4]);
	    	finalGadagObj = finalGadagObj.concat(out.items[5]);
	    	finalGadagObj = finalGadagObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalGadagObj = arrysort(finalGadagObj);
   	feedGadagready = 1;
   }
});
}
}

function sendDavanagereFeed(socket)
{
   if(feedDavanagereready == 1)   {
   	   	socket.emit('district',finalDavanagereObj);
   }
}

function getDavanagerefeed()
{
	console.log("Inside Start getfeed function");
	finalDavanagereObj =[];
	feedDavanagereready = 0;
	var j = 0;
	var Davanagere = new Array();
	Davanagere[0] = prajavani["Davanagere"];
	Davanagere[1] = kannadaprabha["Davanagere"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Davanagere[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalDavanagereObj = finalDavanagereObj.concat(out.items[0]);
	    	finalDavanagereObj = finalDavanagereObj.concat(out.items[1]);
	    	finalDavanagereObj = finalDavanagereObj.concat(out.items[2]);
	    	finalDavanagereObj = finalDavanagereObj.concat(out.items[4]);
	    	finalDavanagereObj = finalDavanagereObj.concat(out.items[5]);
	    	finalDavanagereObj = finalDavanagereObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalDavanagereObj = arrysort(finalDavanagereObj);
   	feedDavanagereready = 1;
   }
});
}
}
var finalBelgaumObj =[];	
var feedaBelgaumready = 0;
function sendBelgaumFeed(socket)
{
   if(feedBelgaumready == 1)   {
   	   	socket.emit('district',finalBelgaumObj);
   }
}

function getBelgaumfeed()
{
	console.log("Inside Start getfeed function");
	finalBelgaumObj =[];
	feedBelgaumready = 0;
	var j = 0;
	var Belgaum = new Array();
	Belgaum[0] = prajavani["Belgaum"];
	Belgaum[1] = kannadaprabha["Belgaum"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Belgaum[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalBelgaumObj = finalBelgaumObj.concat(out.items[0]);
	    	finalBelgaumObj = finalBelgaumObj.concat(out.items[1]);
	    	finalBelgaumObj = finalBelgaumObj.concat(out.items[2]);
	    	finalBelgaumObj = finalBelgaumObj.concat(out.items[4]);
	    	finalBelgaumObj = finalBelgaumObj.concat(out.items[5]);
	    	finalBelgaumObj = finalBelgaumObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalBelgaumObj = arrysort(finalBelgaumObj);
   	feedBelgaumready = 1;
   }
});
}
}
var finalHaveriObj =[];	
var feedaHaveriready = 0;
function sendHaveriFeed(socket)
{
   if(feedHaveriready == 1)   {
   	   	socket.emit('district',finalHaveriObj);
   }
}

function getHaverifeed()
{
	console.log("Inside Start getfeed function");
	finalHaveriObj =[];
	feedHaveriready = 0;
	var j = 0;
	var Haveri = new Array();
	Haveri[0] = prajavani["Haveri"];
	Haveri[1] = kannadaprabha["Haveri"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Haveri[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalHaveriObj = finalHaveriObj.concat(out.items[0]);
	    	finalHaveriObj = finalHaveriObj.concat(out.items[1]);
	    	finalHaveriObj = finalHaveriObj.concat(out.items[2]);
	    	finalHaveriObj = finalHaveriObj.concat(out.items[4]);
	    	finalHaveriObj = finalHaveriObj.concat(out.items[5]);
	    	finalHaveriObj = finalHaveriObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalHaveriObj = arrysort(finalHaveriObj);
   	feedHaveriready = 1;
   }
});
}
}
var finalGulbargaObj =[];	
var feedaGulbargaready = 0;
function sendGulbargaFeed(socket)
{
   if(feedGulbargaready == 1)   {
   	   	socket.emit('district',finalGulbargaObj);
   }
}

function getGulbargafeed()
{
	console.log("Inside Start getfeed function");
	finalGulbargaObj =[];
	feedGulbargaready = 0;
	var j = 0;
	var Gulbarga = new Array();
	Gulbarga[0] = prajavani["Gulbarga"];
	Gulbarga[1] = kannadaprabha["Gulbarga"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Gulbarga[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalGulbargaObj = finalGulbargaObj.concat(out.items[0]);
	    	finalGulbargaObj = finalGulbargaObj.concat(out.items[1]);
	    	finalGulbargaObj = finalGulbargaObj.concat(out.items[2]);
	    	finalGulbargaObj = finalGulbargaObj.concat(out.items[4]);
	    	finalGulbargaObj = finalGulbargaObj.concat(out.items[5]);
	    	finalGulbargaObj = finalGulbargaObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalGulbargaObj = arrysort(finalGulbargaObj);
   	feedGulbargaready = 1;
   }
});
}
}
var finalDharwadObj =[];	
var feedaDharwadready = 0;
function sendDharwadFeed(socket)
{
   if(feedDharwadready == 1)   {
   	   	socket.emit('district',finalDharwadObj);
   }
}

function getDharwadfeed()
{
	console.log("Inside Start getfeed function");
	finalDharwadObj =[];
	feedDharwadready = 0;
	var j = 0;
	var Dharwad = new Array();
	Dharwad[0] = prajavani["Dharwad"];
	Dharwad[1] = kannadaprabha["Dharwad"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Dharwad[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalDharwadObj = finalDharwadObj.concat(out.items[0]);
	    	finalDharwadObj = finalDharwadObj.concat(out.items[1]);
	    	finalDharwadObj = finalDharwadObj.concat(out.items[2]);
	    	finalDharwadObj = finalDharwadObj.concat(out.items[4]);
	    	finalDharwadObj = finalDharwadObj.concat(out.items[5]);
	    	finalDharwadObj = finalDharwadObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalDharwadObj = arrysort(finalDharwadObj);
   	feedDharwadready = 1;
   }
});
}
}
var finalMandyaObj =[];	
var feedaMandyaready = 0;
function sendMandyaFeed(socket)
{
   if(feedMandyaready == 1)   {
   	   	socket.emit('district',finalMandyaObj);
   }
}

function getMandyafeed()
{
	console.log("Inside Start getfeed function");
	finalMandyaObj =[];
	feedMandyaready = 0;
	var j = 0;
	var Mandya = new Array();
	Mandya[0] = prajavani["Mandya"];
	Mandya[1] = kannadaprabha["Mandya"];
	for(var i =0 ;i < 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Mandya[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalMandyaObj = finalMandyaObj.concat(out.items[0]);
	    	finalMandyaObj = finalMandyaObj.concat(out.items[1]);
	    	finalMandyaObj = finalMandyaObj.concat(out.items[2]);
	    	finalMandyaObj = finalMandyaObj.concat(out.items[4]);
	    	finalMandyaObj = finalMandyaObj.concat(out.items[5]);
	    	finalMandyaObj = finalMandyaObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalMandyaObj = arrysort(finalMandyaObj);
   	feedMandyaready = 1;
   }
});
}
}

var finalHassanObj =[];	
var feedaHassanready = 0;
function sendHassanFeed(socket)
{
   if(feedHassanready == 1)   {
   	   	socket.emit('district',finalHassanObj);
   }
}

function getHassanfeed()
{
	console.log("Inside Start getfeed function");
	finalHassanObj =[];
	feedHassanready = 0;
	var j = 0;
	var Hassan = new Array();
	Hassan[0] = prajavani["Hassan"];
	Hassan[1] = kannadaprabha["Hassan"];
	for(var i =0 ;i< 2;i++)	{
		console.log("i -->",i);
		parser.parseURL(Hassan[i], options, function(err, out){
		//parser.parseURL(weblinks[i], options, function(err, out){
    	if(out != null)    {
    		console.log("concating j = ",j++," ");
//			j++;
	     	finalHassanObj = finalHassanObj.concat(out.items[0]);
	    	finalHassanObj = finalHassanObj.concat(out.items[1]);
	    	finalHassanObj = finalHassanObj.concat(out.items[2]);
	    	finalHassanObj = finalHassanObj.concat(out.items[4]);
	    	finalHassanObj = finalHassanObj.concat(out.items[5]);
	    	finalHassanObj = finalHassanObj.concat(out.items[6]);
   	}
   	console.log("Inside Start getfeed function 5555");
   if(j == 2)  {
   	console.log("Inside Start getfeed function 3333");
   	finalHassanObj = arrysort(finalHassanObj);
   	feedHassanready = 1;
   }
});
}
}
