var events = Ti.UI.currentWindow;
events.barColor = '#3b5e34';
events.backgroundColor = '#fff';
events.barImage = '/images/navBar.png';


var navBar = Ti.UI.createImageView({
	image:'/images/eventsFeed/friendsNavBar.png'
	
});

var navBar2 = Ti.UI.createImageView({
	image:'/images/eventsFeed/topEventsNavBar.png'
	
});

events.setTitleControl(navBar);
events.setTitleControl(navBar2);


var friendsFeed = Ti.UI.createTableView({
	top:0,
	height:'100%',
	width:'100%'
});

events.add(friendsFeed);
