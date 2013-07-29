var fb = Ti.UI.currentWindow;
fb.barColor='#fff';
fb.titleImage = 'tap.png';
//START Facebook Code

//create your facebook sessionf

		Titanium.Facebook.appid = '320766681373313';
		Titanium.Facebook.permissions = ['read_stream']; //Permissions your app need
		
	
var imagem = Ti.UI.createImageView({
    image : 'https://graph.facebook.com/' + Ti.Facebook.uid + '/picture',
     top:10,
 width:50,
 height:50,
 left:10
 
});
fb.add(imagem);




var userName = Ti.UI.createLabel({
	text: 'https://graph.facebook.com/' + Ti.Facebook.uid + '/user.first_name',
	top: 40
});

fb.add(userName);

//Logout


//Button

var attendingLabel = Ti.UI.createLabel({
	text: "Are you going out tonight:",
	top:80,
	left:10
});

fb.add(attendingLabel);

var goingOutButton = Titanium.UI.iOS.createTabbedBar({
	labels:['No', 'Maybe', 'Yes'],
	backgroundColor:'#3e6d46',
	top:80,
	right:0,
	style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
	height:20,
	width:190
});

fb.add(goingOutButton);

var logOut = Ti.UI.createButton({
	title: "Log Out",
	bottom:20
});

fb.add(logOut);



logOut.addEventListener('click', function(e) {
    if (!Titanium.Facebook.loggedIn) {
    	Titanium.Facebook.logout();
    	var login = require('login.js');
    	login.open();
    } else {
    	Titanium.Facebook.authorize();
    }
});
