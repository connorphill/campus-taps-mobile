var fb = Ti.UI.currentWindow;
fb.barColor = '#3b5e34';
fb.titleImage = 'tap.png';
fb.barImage = '/images/navBar.png';
fb.backgroundColor = 'e9e7e7';

var facebook = require('facebook');



//START Facebook Code
        Ti.Facebook.authorize();

//create your facebook sessionf

		Titanium.Facebook.appid = '320766681373313';
		Titanium.Facebook.permissions = ['read_stream']; //Permissions your app need
		
		
 var rightButton = Ti.UI.createImageView({
   	image:'/images/settingsIconNew.png',
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
	backgroundColor:'#fff',
	top:5,
	left:10,
	right:10,
	width:300,
	height:80
});

fb.add(userProfileView);

var profilePicture = Ti.UI.createImageView({
    image : 'https://graph.facebook.com/' + Ti.Facebook.uid + '/picture',
     top: 15,
 width:50,
 height:50,
 left:10
 
});
userProfileView.add(profilePicture);

var profileGoingOutStatus = Ti.UI.createImageView({
        top:30,
        left:70,
        image:'/images/statusNo.png'
    });

userProfileView.add(profileGoingOutStatus);


    Ti.Facebook.requestWithGraphPath('me', {}, 
         "GET", function(e) {
    if (e.success) {
        var response = JSON.parse(e.result);
         var profileName = Ti.UI.createLabel({
         	text: response.name,
         	top: 30,
         	left: 110
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




var goingOutView = Ti.UI.createView({
	backgroundColor:'#fff',
	width: 300,
	right: 10,
	left: 10,
	height: 30,
	top: 105,
	
});

fb.add(goingOutView);



var attendingLabel = Ti.UI.createLabel({
	text: "Are you going out:",
	font: {size:14},
	top:5,
	left:10
});

goingOutView.add(attendingLabel);




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
    width:55,
	height:30,
    right: 110,
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
    width:55,
	height:30,
    right: 55,
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
    width:55,
	height:30,
    right: 0,
    id: 3
});

goingOutView.add(btn3);

btn1.addEventListener('click', toggleButton);
btn2.addEventListener('click', toggleButton);
btn3.addEventListener('click', toggleButton);
toggledButton = btn1; // set to on button


var friendsGoingOutButtons = Ti.UI.createView({
	backgroundColor:'#e9e7e7',
	width:300,
	height:30,
	top:155,
	left:10,
	right:10
});

fb.add(friendsGoingOutButtons);

var friendsGoingOutStatus = Ti.UI.createView({
	backgroundColor:'#fff',
	height:'100%',
	width:300,
	top:185,
	left:10,
	right:10,
	
});


fb.add(friendsGoingOutStatus);




var selectedButton;

var toggle = function (e) {
    if (e.source.isSelected === false) {
    	selectedButton.setBackgroundImage('/images/profile/friendsGoingOutBg.png');
    	selectedButton.isSelected = false;
    	
    	e.source.setBackgroundImage('/images/profile/friendsGoingOutSelected.png');
    	e.source.isSelected = true;

		selectedButton = e.source;
		}
		switch (e.source.id) {
			case 1:
			break;
		}
};

var friendsGoingOutYes = Ti.UI.createButton({
	backgroundImage: '/images/profile/friendsGoingOutSelected.png',
	title:'Yes',
	isSelected: true,
	height: 30,
	width: 99,
	top: 0,
	left: 0,
	id: 1
});

friendsGoingOutButtons.add(friendsGoingOutYes);

var friendsGoingOutMaybe = Ti.UI.createButton({
	backgroundImage: '/images/profile/friendsGoingOutBg.png',
	title:'Maybe',
	isSelected: false,
	height: 30,
	width: 99,
	top: 0,
	left: 100.5,
	right:100.5,
	id: 2
});

friendsGoingOutButtons.add(friendsGoingOutMaybe);

var friendsGoingOutNo = Ti.UI.createButton({
	backgroundImage: '/images/profile/friendsGoingOutBg.png',
	title:'No',
	isSelected: false,
	height: 30,
	width: 99,
	top: 0,
	left: 201,
	id: 3
});

friendsGoingOutButtons.add(friendsGoingOutNo);

friendsGoingOutYes.addEventListener('click', toggle);
friendsGoingOutMaybe.addEventListener('click', toggle);
friendsGoingOutNo.addEventListener('click', toggle);
selectedButton = friendsGoingOutYes; //Set to Selected Button


var friendsGoingOutTable = Ti.UI.createTableView({
	width:300,
	top:30
});

friendsGoingOutStatus.add(friendsGoingOutTable);

var friendsGoingOutTableRow = Ti.UI.createTableViewRow({
	
});

friendsGoingOutTable.add(friendsGoingOutTableRow);
