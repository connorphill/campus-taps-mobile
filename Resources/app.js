var fb = require('facebook');
fb.appid = "125520310866488";//Production
fb.permissions = ['read_stream'];


//IF A USER IS LOGGED IN, DO NOT OPEN LOGIN WINDOW, IF FALSE, OPEN LOGIN WINDOW
 if (Titanium.Facebook.loggedIn == true)
{}
else
{
  var loginWindow = Ti.UI.createWindow({
  	url:'login.js',
  	navBarHidden: true,
  	modal: false,
  	
  });
  loginWindow.open({animation:false});
}






Titanium.UI.setBackgroundColor('#000');


// create tab group
var tabGroup = Titanium.UI.createTabGroup({
	tabsTintColor:'#3d6430',
	activeTabIconTint:'#3d6430',
	tabsTintColor:'#3d6430',
	backgroundColor:'#fff'
});



//dailySpecials.js WINDOW AND TAB
var dailySpecials = Ti.UI.createWindow({
	backgroundColor: '#fff',
	url:'dailySpecials.js'
});

var dailySpecialsTab = Titanium.UI.createTab({  
    icon:'/images/icons/todaysSpecialsIcon.png',
    title:'Today\'s Specials',
    window:dailySpecials
});
//END dailySpecials.js


var eventsFeed = Ti.UI.createWindow({
	url:'eventsFeed.js'
});

var eventsFeedTab = Titanium.UI.createTab({  
    icon:'/images/icons/eventsFeedIcon.png',
    title:'Events Feed',
    window:eventsFeed
});




//
// create controls tab and root window
//
var bars = Titanium.UI.createWindow({  
    backgroundColor:'#fff',
    url:'bars.js'
});
var barsTab = Titanium.UI.createTab({  
    icon:'/images/icons/barsIcon.png',
    title:'Bars',
    color:'#000',
    window:bars
});



var profile = Titanium.UI.createWindow({  
    backgroundColor:'#fff',
    url:'profile.js'
});
var profileTab = Titanium.UI.createTab({  
    icon:'/images/icons/profileIcon.png',
    title:'Profile',
    color:'#000',
    window:profile
});


//
//  add tabs
//
tabGroup.addTab(dailySpecialsTab); 
tabGroup.addTab(eventsFeedTab); 
tabGroup.addTab(barsTab);  
tabGroup.addTab(profileTab); 

// open tab group
tabGroup.open();

