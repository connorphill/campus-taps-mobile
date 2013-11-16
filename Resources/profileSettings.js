exports.profileSettingsWin = function(){

var Cloud = require('ti.cloud');

//profileSettings.js WINDOW SETTINGS
var settings = Ti.UI.createWindow({
	barColor:'#3d6430',
	title:"Profile Settings",
	backgroundColor:'#e9e7e7',
	translucent: false,
	navTintColor:'white',
	leftNavButton: backButton,
	top:0
});

var customFont = 'HouschkaAlt';

var fb = require('facebook');
	fb.appid = '125520310866488';
	fb.permissions = ['read_stream']; //Permissions your app need
		

//BACK BUTTON
var backButton = Ti.UI.createButton();



backButton.addEventListener('click', function(){
    settings.close({animated:true});
});
//END BACK BUTTON
  

//PROFILE SETTINGS TABLE
var table =  Titanium.UI.createTableView({
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
	backgroundColor:'#e9e7e7'
});
 settings.add(table);
 
//SOCIAL SETTINGS SECTION
var socialSettings = Titanium.UI.createTableViewSection({top:0});
socialSettings.headerTitle = "SOCIAL SETTINGS";

//findFriends.js BUTTON
var findFriends = Titanium.UI.createTableViewRow({
	title:"Find Your Friends",
	font:{fontFamily: customFont},
	backgroundColor:'#fff'
	});
//END findFriends.js BUTTON
	
	
//friends.js
var friends = Titanium.UI.createTableViewRow({
	title:"Friends",
	font:{fontFamily: customFont},
	backgroundColor:'#fff'
	});

//END friends.js	

//BUTTON (WORK IN PROGRESS)

var inviteFriends = Titanium.UI.createTableViewRow({
	title:"Invite Friends",
	font:{fontFamily: customFont},
	backgroundColor:'#fff'
});
//END BUTTON

//notifications.js BUTTON
var notifications = Titanium.UI.createTableViewRow({
	title:"Notifications",
	font:{fontFamily: customFont},
	backgroundColor:'#fff'

});
//END notifications.js BUTTON

//ADD TO SOCIAL SETTINGS TABLE
socialSettings.add(findFriends);
socialSettings.add(friends);
socialSettings.add(inviteFriends);
socialSettings.add(notifications);

 
 
//SUPPORT SETTINGS TABLE 
var supportSettings = Titanium.UI.createTableViewSection();
supportSettings.headerTitle = "SUPPORT SETTINGS";


//emailDialog.js BUTTON
var reportAnError = Ti.UI.createTableViewRow({
	title:"Report an Error",
	font:{fontFamily: customFont},
	backgroundColor:'#fff'
});
//END emailDialog.js BUTTON

//PRIVACY POLICY WEB VIEW BUTTON
var privacyPolicy = Titanium.UI.createTableViewRow({
	title:"Privacy Policy",
	font:{fontFamily: customFont},
	backgroundColor:'#fff'
});
//END PRIVACY POLICY WEB VIEW BUTTON

//TERMS OF USE WEB VIEW BUTTON
var termsOfUse = Titanium.UI.createTableViewRow({
	title:"Terms of Service",
	font:{fontFamily: customFont},
	backgroundColor:'#fff',
	});
//END TERMS OF USE WEB VIEW BUTTON

supportSettings.add(reportAnError);
supportSettings.add(privacyPolicy); 
supportSettings.add(termsOfUse);

//REPORT AN ERROR EMAIL DIALOG
reportAnError.addEventListener('click', function(){
	var emailDialog = Ti.UI.createEmailDialog();
	emailDialog.subject = "Error/Bug Found in Campus Taps Mobile App";
emailDialog.toRecipients = ['contact@campustaps.com'];
emailDialog.messageBody = 'Please provide us with some information on the error/bug that you found.';
emailDialog.open();
});
//END REPORT AN ERROR EMAIL DIALOG
 
//PRIVACY POLICY WEB VIEW WINDOW 
privacyPolicy.addEventListener('click', function(){
	var webPrivacyPolicy = Ti.UI.createWebView({url:'http://campustaps.com/privacy'});
	var privacyPolicyWindow = Ti.UI.createWindow();
	privacyPolicyWindow.barImage = '/images/navBar.png';
	privacyPolicyWindow.title = "Privacy Policy";
	privacyPolicyWindow.add(webPrivacyPolicy);
	privacyPolicyWindow.open({modal:true});
	var ButtonRetour = Ti.UI.createImageView({
   	image:'/images/backButton.png',
   	width:50,
   	height:36
});             

//END PRIVACY POLICY WEB VIEW WINDOW 
 
 
//PRIVACY POLICY WINDOW BACK BUTTON  
ButtonRetour.addEventListener('click', function(){
    privacyPolicyWindow.close();
});
 
privacyPolicyWindow.leftNavButton = ButtonRetour;
}); 

//END PRIVACY POLICY WINDOW BACK BUTTON


//TERMS OF USE WINDOW  
termsOfUse.addEventListener('click', function(){
	var webTermsOfUse = Ti.UI.createWebView({url:'http://campustaps.com/terms-of-use'});
	var termsOfUseWindow = Ti.UI.createWindow();
	termsOfUseWindow.barImage = '/images/navBar.png';
	termsOfUseWindow.title = "Terms of Use";

	termsOfUseWindow.add(webTermsOfUse);
	termsOfUseWindow.open();
	var ButtonRetour = Ti.UI.createImageView({
   	image:'/images/backButton.png',
   	width:50,
   	height:36
});             
 
//END TERMS OF USE WINDOW  
 
//TERMS OF USE WINDOW BACK BUTTON  

ButtonRetour.addEventListener('click', function(){
    termsOfUseWindow.close();
});
 
termsOfUseWindow.leftNavButton = ButtonRetour;
	
});

//END TERMS OF USE WINDOW BACK BUTTON  

//LOG OUT TABLE
var profileSettings = Titanium.UI.createTableViewSection();
profileSettings.headerTitle = "Log Out";

//LOG OUT BUTTON
var logOut = Ti.UI.createTableViewRow({
	title: "Log Out",
	font:{fontFamily: customFont},
	backgroundColor:'#fff'
});

profileSettings.add(logOut);
//END LOG OUT BUTTON

//SET TABLE SECTION DATA 
table.setData([socialSettings,supportSettings,profileSettings]);


//OPEN findFriends.js WINDOW
findFriends.addEventListener('click', function(){
	var findFriends = Ti.UI.createWindow({
  	url:'findFriends.js',
  	navBarHidden: false,
  	modal: false,
});
	 Ti.UI.currentTab.open(findFriends);
});

//END OPEN findFriends.js WINDOW


//OPEN friends.js WINDOW
friends.addEventListener('click', function(){
	var friendsList = Ti.UI.createWindow({
  	url:'friends.js',
  	navBarHidden: false,
  	modal: false,
});
	 Ti.UI.currentTab.open(friendsList);
});

//END OPEN friends.js WINDOW

//OPEN notification.js WINDOW
notifications.addEventListener('click', function(){
	var notifications = Ti.UI.createWindow({
		url:'notifications.js',
		navBarHidden: false,
		modal: false,
	});
	Ti.UI.currentTab.open(notifications);
});
//END OPEN notifications.js WINDOW

//LOG OUT EVENT LISTENER
logOut.addEventListener('click', function() {
if(fb.loggedIn){
    fb.logout();
	var url = 'https://login.facebook.com';
var client = Titanium.Network.createHTTPClient();
client.clearCookies(url);
	Cloud.Users.logout(function (e) {
    if (e.success) {
        alert('Success: Logged out');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
	

    var loginWindow = Ti.UI.createWindow({
  	url:'login.js',
  	navBarHidden: true,
  	modal: false,

  });
  loginWindow.open({animation:false});
  
    
}
else{
 Titanium.Facebook.authorize();
}
});
return settings;
  };
//END LOG OUT EVENT LISTENER