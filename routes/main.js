var parser = require('rssparser');
var options = {};
var prajavani = {
		"state":"http://www.prajavani.net/taxonomy/term/30/all/feed",
		"national":"http://www.prajavani.net/taxonomy/term/31/all/feed",
		"foreign":"http://www.prajavani.net/taxonomy/term/33/all/feed",
		"sports":"http://www.prajavani.net/taxonomy/term/64/all/feed",
		"bengalore":"http://www.prajavani.net/taxonomy/term/32/all/feed",
		"Udupi":"http://www.prajavani.net/taxonomy/term/47/all/feed",
		"chamarajanagara":"http://www.prajavani.net/taxonomy/term/43/all/feed",
		"bellary":"http://www.prajavani.net/taxonomy/term/60/all/feed",
		"shimoga":"http://www.prajavani.net/taxonomy/term/37/all/feed",
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
		"Davanagere":"http://www.prajavani.net/taxonomy/term/38/all/feed",
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
		"shimoga":"http://www.kannadaprabha.com/sectionrss-153.html",
		"Tumkur":"http://www.kannadaprabha.com/sectionrss-154.html",
		"Udupi":"http://www.kannadaprabha.com/sectionrss-155.html",
		"UttaraKannada":"http://www.kannadaprabha.com/sectionrss-156.html",
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
science[0] = prajavani.sports;
science[1] = kannadaprabha.ScienceTechnology;
science[2] = udayavani.sports;

exports.init = function(){
	getfeed(weblinks);
	getCommercefeed();
	getstatefeed();
	getnationalfeed();
	getmoviesfeed();
	getsciencefeed();
	getsportsfeed();
	//getspecialfeed();
	// setInterval(function () {
	// getfeed(weblinks);
 //  }, 500000);
}
exports.newsfeed = function(socket){
	// link_count = weblinks.length;
	// for (var i=0; i < weblinks.length; i++) {
 //   	feedlinks[i] = weblinks[i]; 
	// }
	
 	sendFeed(socket);
	doColumnist(socket);
  // setInterval(function () {
  // 	//doQuery(socket);
  // 	sendFeed(socket);
  	
  // }, 5000);
     	  setInterval(function () {
  	  doColumnist(socket);
      }, 60000);
 socket.on('district', function (district) {
 	console.log("inside district -->",district);
 	getDistrictfeed(socket,district);
 	});

socket.on('sideOptions', function (ID) {
 	console.log("inside state ------------------->",ID);
 	if(ID == 1)
 	{
		sendstateFeed(socket);  		
   	}
   	else if(ID == 2)
   	{
  		sendnationalFeed(socket);
   	}
   	else if(ID == 3)
   	{
 		sendCommerceFeed(socket);
   	}
   	else if(ID == 4)
   	{
 		sendsportsFeed(socket);
   	}
   	else if(ID == 5)
   	{
 			sendtechnologyFeed(socket);
   	}
   	else if(ID == 6)
   	{
 	 		getfeed(agriculture);
   	}
   	else if(ID == 7)
   	{
 	  		sendmoviesFeed(socket);
   	}
   	else if(ID == 8)
   	{
 	 		sendspecialFeed(socket);
   	}
   	else if(ID == 9)
   	{
 	 		sendscienceFeed(socket);
   	}
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
function sendCommerceFeed(socket)
{
	console.log("Inside Start sendCommerceFeed function");
   if(feedCommerceready == 1)   {
   	   	socket.emit('message',finalCommerceObj);
   }
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
function sendscienceFeed(socket)
{
	console.log("Inside Start sendCommerceFeed function");
   if(feedCommerceready == 1)   {
   	   	socket.emit('message',finalscienceObj);
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