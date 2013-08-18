
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
})

var tab1 = Titanium.UI.createTab({  
    icon:'',
    title:'Tab 1',
    window:dailySpecials
});



//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff',
    url:'bars.js'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    color:'#000',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);


var win3 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff',
    url:'facebook.js'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    color:'#000',
    window:win3
});

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 3',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win3.add(label3);
//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3); 

// open tab group
tabGroup.open();

