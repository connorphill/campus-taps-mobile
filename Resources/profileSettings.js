var settings = Ti.UI.currentWindow;
settings.barColor = '#3b5e34';
settings.title = "Profile Settings";
settings.barImage = '/images/navBar.png';
settings.backgroundColor = '#e9e7e7';

var ButtonRetour = Ti.UI.createImageView({
   	image:'/images/backButton.png',
   	width:50,
   	height:36
});             
 
ButtonRetour.addEventListener('click', function(){
    settings.close();
});
 
settings.leftNavButton = ButtonRetour;
  

 
var table =  Titanium.UI.createTableView({
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
	backgroundColor:'#e9e7e7'
});
 settings.add(table);
var socialSettings = Titanium.UI.createTableViewSection();
socialSettings.headerTitle = "SOCIAL SETTINGS";
var findFriends = Titanium.UI.createTableViewRow({
	title:"Find Your Friends",
	backgroundColor:'#fff'
	});
var inviteFriends = Titanium.UI.createTableViewRow({
	title:"Invite Friends",
	backgroundColor:'#fff'

});

socialSettings.add(findFriends);
socialSettings.add(inviteFriends);
 
 
 
var supportSettings = Titanium.UI.createTableViewSection();
supportSettings.headerTitle = "SUPPORT SETTINGS";
var privacyPolicy = Titanium.UI.createTableViewRow({
	title:"Privacy Policy",
	backgroundColor:'#fff'
});
var termsOfUse = Titanium.UI.createTableViewRow({
	title:"Terms of Service",
	backgroundColor:'#fff'
	});

supportSettings.add(privacyPolicy); 
supportSettings.add(termsOfUse);
 
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
 
ButtonRetour.addEventListener('click', function(){
    privacyPolicyWindow.close();
});
 
privacyPolicyWindow.leftNavButton = ButtonRetour;
}); 

termsOfUse.addEventListener('click', function(){
	var webTermsOfUse = Ti.UI.createWebView({url:'http://campustaps.com/terms-of-use'});
	var termsOfUseWindow = Ti.UI.createWindow();
	termsOfUseWindow.barImage = '/images/navBar.png';
	termsOfUseWindow.title = "Terms of Use";

	termsOfUseWindow.add(webTermsOfUse);
	termsOfUseWindow.open({modal:true});
	var ButtonRetour = Ti.UI.createImageView({
   	image:'/images/backButton.png',
   	width:50,
   	height:36
});             
 
ButtonRetour.addEventListener('click', function(){
    termsOfUseWindow.close();
});
 
termsOfUseWindow.leftNavButton = ButtonRetour;
	
});



var profileSettings = Titanium.UI.createTableViewSection();
profileSettings.headerTitle = "PROFILE SETTINGS";
var logOut = Ti.UI.createTableViewRow({
	title: "Log Out",
	backgroundColor:'#fff'
});

profileSettings.add(logOut);


 
table.setData([socialSettings,supportSettings,profileSettings]);

findFriends.addEventListener('click', function(){
	var findFriends = Ti.UI.createWindow({
  	url:'findFriends.js',
  	navBarHidden: false,
  	modal: false,
});
	 Ti.UI.currentTab.open(findFriends);
});


logOut.addEventListener('click', function() {
if(Titanium.Facebook.loggedIn){
    Titanium.Facebook.logout();
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