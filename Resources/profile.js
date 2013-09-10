var fb = Ti.UI.currentWindow;
fb.barColor = '#3d6430';
fb.titleImage = 'tap.png';
fb.barImage = '/images/navBar.png';
fb.backgroundColor = '#e9e7e7';

var customFont = 'HouschkaAlt';


var facebook = require('facebook');
var Cloud = require('ti.cloud');



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
         	font:{fontFamily: customFont},
         	top: 30,
         	left: 110
         });
         var fbProfilePic = Ti.UI.createImageView({
         	image: response.picture,
         	width:50,
         	height:50,
         	top: 0,
         	right: 10,
         	
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
	font: {size:14,
		fontFamily: customFont},
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
    
    //CUSTOM OBJECT EVENTS FOR EACH STATE
    
    switch (e.source.id) {
    case 1:
    
	Cloud.Objects.create({
          classname : 'goingOutTonight',
          fields : {
            going_out: 'No'
          }
        }, function(e) {
          if(e.success) {
          	var goingOut = e.goingOutTonight[0];
            alert("created" + 'id:' + goingOut.id + 'going_out:' + goingOut.going_out);
          } else {
            alert('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
          }
        }); 
		
        break;
        
        case 2: 
        Cloud.Objects.update({
          classname : 'goingOutTonight',
          going_out_id: going_outID,
          fields : {
            going_out: 'Maybe'
          }
        }, function(e) {
          if(e.success) {
          	var goingOut = e.goingOutTonight[0];

            alert("Updated");
          } else {
            alert('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
          }
        }); 
        
        break;
        
        case 3:
        
        Cloud.Objects.update({
          classname : 'goingOutTonight',
          id: goingOut.id,
          fields : {
            going_out: 'Yes'
          }
        }, function(e) {
          if(e.success) {
            alert("Updated");
          } else {
            alert('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
          }
        }); 
        
    }
    
};

//END CUSTOM OBJECT EVENTS FOR EACH STATE








var goingOutNo = Ti.UI.createButton({
    title: 'No',
    backgroundImage: '/images/noSelected.png',
    imageOff: '/images/nobg.png',
    imageOn: '/images/noSelected.png',
    isToggled: true,
    status: '/images/statusNo.png',
    font:{fontFamily: customFont},
    width:55,
	height:30,
    right: 110,
    id: 1
});

goingOutView.add(goingOutNo);

var goingOutMaybe = Ti.UI.createButton({
    title: 'Maybe',
    backgroundImage: '/images/maybebg.png',
    imageOff: '/images/maybebg.png',
    imageOn: '/images/maybeSelected.png',
    isToggled: false,
    status: '/images/statusMaybe.png',
    font:{fontFamily: customFont},
    width:55,
	height:30,
    right: 55,
    id: 2
});

goingOutView.add(goingOutMaybe);

var goingOutYes = Ti.UI.createButton({
    title: 'Yes',
    backgroundImage: '/images/yesbg.png',
    imageOff: '/images/yesbg.png',
    imageOn: '/images/yesSelected.png',
    isToggled: false,
    status: '/images/statusYes.png',
    font:{fontFamily: customFont},
    width:55,
	height:30,
    right: 0,
    id: 3
});

goingOutView.add(goingOutYes);

goingOutNo.addEventListener('click', toggleButton);
goingOutMaybe.addEventListener('click', toggleButton);
goingOutYes.addEventListener('click', toggleButton);
toggledButton = goingOutNo; // set to on button


//END GOING OUT STATUS



//GOING OUT FRIENDS TABLE

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
	font:{fontFamily: customFont},
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
	font:{fontFamily: customFont},
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
	font:{fontFamily: customFont},
	height: 30,
	width: 99,
	top: 0,
	left: 201,
	id: 3
});

friendsGoingOutButtons.add(friendsGoingOutNo);

var friendsSpacer = Ti.UI.createImageView({
	image:'/images/profile/spacer.png',
	height:4,
	width:300,
	left:0,
	top:26
});

friendsGoingOutButtons.add(friendsSpacer);


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



//END FRIENDS GOING OUT TABLE