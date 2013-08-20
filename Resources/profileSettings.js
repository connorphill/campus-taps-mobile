var settings = Ti.UI.currentWindow;
settings.barColor = '#3b5e34';
settings.title = "Profile Settings";
settings.barImage = '/images/navBar.png';
settings.backgroundColor = '#fff';

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
	backgroundColor:'#fff'
});
 settings.add(table);
var socialSettings = Titanium.UI.createTableViewSection();
socialSettings.headerTitle = "SOCIAL SETTINGS";
var findFriends = Titanium.UI.createTableViewRow({title:"Find Your Friends"});
var inviteFriends = Titanium.UI.createTableViewRow({title:"Invite Friends"});
socialSettings.add(findFriends);
socialSettings.add(inviteFriends);
 
var profileSettings = Titanium.UI.createTableViewSection();
profileSettings.headerTitle = "PROFILE SETTINGS";
var logOut = Ti.UI.createTableViewRow({
	title: "Log Out",
});

profileSettings.add(logOut);
 
table.setData([socialSettings,profileSettings]);




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