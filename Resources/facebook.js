var fb = Ti.UI.currentWindow;
fb.barColor = '#3b5e34';
fb.titleImage = 'tap.png';
fb.barImage = '/images/navBar.png';

var facebook = require('facebook');
//START Facebook Code
        Ti.Facebook.authorize();

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



    Ti.Facebook.requestWithGraphPath('me', {}, 
         "GET", function(e) {
    if (e.success) {
        var response = JSON.parse(e.result);
         var profileName = Ti.UI.createLabel({
         	text: response.name,
         	top: 30
         });
         var fbProfilePic = Ti.UI.createLabel({
         	image: response.picture,
         	top: 50
         });
      
    	} else if (e.error) {
                        alert("Error = "+e.error);
                    } else {
                        alert('Unknown response');
                    }
                    fb.add(profileName);
                    fb.add(fbProfilePic);

                });




//Logout


//Button

var attendingLabel = Ti.UI.createLabel({
	text: "Are you going out:",
	top:80,
	left:10
});

fb.add(attendingLabel);



var goingOutView = Ti.UI.createView({
	right: 0,
	width: 180,
	height: 30,
	top: 80,
});

fb.add(goingOutView);

var lastChoice = undefined;

var goingOutNo = Ti.UI.createButton({
	backgroundImage:'/images/nobg.png',
	width:60,
	height:30,
	left:0,
	backgroundColor:'#000'
});

goingOutView.add(goingOutNo);

goingOutNo.addEventListener('click', function(e){
	goingOutNo.backgroundImage='/images/nobg.png';
	if (lastChoice !== undefined) {
		lastChoice.backgroundImage='/images/maybebg.png';
		
	}
	lastChoice = e.source;
});

var goingOutMaybe = Ti.UI.createButton({
	image:'/images/maybebg.png',
	backgroundSelectedImage: '/images/yesbg.png',
	width:60,
	height:30,
	left:60,
	backgroundColor:'#000'
});

goingOutView.add(goingOutMaybe);

var goingOutYes = Ti.UI.createButton({
	image:'/images/yesbg.png',
	width:60,
	height:30,
	left:120,
	backgroundColor:'#000'
});

goingOutView.add(goingOutYes);

var logOut = Ti.UI.createButton({
	title: "Log Out",
	bottom:20
});

fb.add(logOut);




logOut.addEventListener('click', function(e) {
    if (e.success) {
    	Titanium.Facebook.logout();
    	var login = require('login.js');
    	login.open();
    } else {
    	Titanium.Facebook.authorize();
    }
});
