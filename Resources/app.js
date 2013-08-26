
Titanium.Facebook.appid = "320766681373313";//Production
Titanium.Facebook.permissions = ['publish_stream', 'read_stream'];
 
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
var tabGroup = Titanium.UI.createTabGroup();



//
// create base UI tab and root window
//
var dailySpecials = Ti.UI.createWindow({
	backgroundColor: '#fff',
	barImage:'/images/barNav.png',
	url:'dailySpecials.js'
});

var dailySpecialsTab = Titanium.UI.createTab({  
    icon:'',
    title:'Tab 1',
    window:dailySpecials
});



var eventsFeed = Ti.UI.createWindow({
	url:'eventsFeed.js'
});

var eventsFeedTab = Titanium.UI.createTab({  
    icon:'',
    title:'Tab 1',
    window:eventsFeed
});




//
// create controls tab and root window
//
var bars = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff',
    url:'bars.js'
});
var barsTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    color:'#000',
    window:bars
});



var profile = Titanium.UI.createWindow({  
    backgroundColor:'#fff',
    url:'profile.js'
});
var profileTab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
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

