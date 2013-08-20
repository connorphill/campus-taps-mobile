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
		
		
 var rightButton = Ti.UI.createImageView({
   	image:'/images/settingsIcon.png',
   	width:50,
   	height:36
});             
 
rightButton.addEventListener('click', function(){
	 var settingsWindow = Ti.UI.createWindow({
	 url:'profileSettings.js',
	
	 });
	 Ti.UI.currentTab.open(settingsWindow);
});
 
fb.rightNavButton = rightButton;
	
var userProfileView = Ti.UI.createView({
	backgroundColor:'#D3FFC6',
	top:0,
	width:"100%",
	height:80
});

fb.add(userProfileView);

var imagem = Ti.UI.createImageView({
    image : 'https://graph.facebook.com/' + Ti.Facebook.uid + '/picture',
     top:10,
 width:50,
 height:50,
 left:10
 
});
userProfileView.add(imagem);



    Ti.Facebook.requestWithGraphPath('me', {}, 
         "GET", function(e) {
    if (e.success) {
        var response = JSON.parse(e.result);
         var profileName = Ti.UI.createLabel({
         	text: response.name,
         	top: 25
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
                    userProfileView.add(profileName);
                    userProfileView.add(fbProfilePic);

                });




//Going Out Status



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


var profileGoingOutStatus = Ti.UI.createImageView({
        top:25,
        left:70
    });

fb.add(profileGoingOutStatus);



var toggledButton;
var toggleButton = function (e) {
    if (e.source.isToggled === false) {
        // reset previous button to off
        toggledButton.setBackgroundImage(toggledButton.imageOff);
        toggledButton.isToggled = false;
        // set new button to on
        e.source.setBackgroundImage(e.source.imageOn);
        profileGoingOutStatus.setImage(e.source.status);
        e.source.isToggled = true;
        
        // cache current button as previous button
        toggledButton = e.source;
    }
    switch (e.source.id) {
    case 1:
        // do something specific
        break;
    }
};

var btn1 = Ti.UI.createButton({
    title: 'No',
    backgroundImage: '/images/noSelected.png',
    imageOff: '/images/nobg.png',
    imageOn: '/images/noSelected.png',
    isToggled: true,
    status: '/images/statusNo.png',
    width:60,
	height:30,
    left: 0,
    id: 1
});

goingOutView.add(btn1);

var btn2 = Ti.UI.createButton({
    title: 'Maybe',
    backgroundImage: '/images/maybebg.png',
    imageOff: '/images/maybebg.png',
    imageOn: '/images/maybeSelected.png',
    isToggled: false,
    status: '/images/statusMaybe.png',
    width:60,
	height:30,
    left: 60,
    id: 2
});

goingOutView.add(btn2);

var btn3 = Ti.UI.createButton({
    title: 'Yes',
    backgroundImage: '/images/yesbg.png',
    imageOff: '/images/yesbg.png',
    imageOn: '/images/yesSelected.png',
    isToggled: false,
    status: '/images/statusYes.png',
    width:60,
	height:30,
    left: 120,
    id: 3
});

goingOutView.add(btn3);

btn1.addEventListener('click', toggleButton);
btn2.addEventListener('click', toggleButton);
btn3.addEventListener('click', toggleButton);
toggledButton = btn1; // set to on button



var friendsPlansButton = Ti.UI.createButton({
	height:60,
	width: 200,
});
fb.add(friendsPlansButton);


friendsPlansButton.addEventListener("click",function(eventObject){
 
    var newWindow = Titanium.UI.createWindow({
        url:'fbFriends.js'
 
    });
 
    newWindow.open();
});




