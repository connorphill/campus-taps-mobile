var daily = Ti.UI.currentWindow;
daily.barColor = '#3d6430';
daily.titleImage = 'tap.png';
daily.barImage = '/images/navBar.png';
daily.backgroundColor = '#e9e7e7';


var customFont = 'HouschkaAlt';


//NOT FINISHED, JUST IMPLEMENTED

var data = [];




var xhr = Ti.Network.createHTTPClient();

xhr.onload = function(){
	var json = JSON.parse(this.responseText);
    Ti.API.info(json.length);
    for (var i = 0; i < json.length; i++) {
    	
    	
var barView = Ti.UI.createView({
    		backgroundColor:'#123',
    		data:json[i].bar,
    		filter: json[i].bar.name
    		});
    		
    		
    	
 var barNameLabel = Ti.UI.createLabel({
	text:json[i].bar.name,
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	backgroundColor:'#000',
	font:{fontFamily: customFont},
	opacity:0.7,
	color:'#fff',
	height:50,
	width:320,
	top:0,
	zIndex:2
});

barView.add(barNameLabel);


var barImage = Ti.UI.createImageView({
	image: json[i].bar.logo_url,
	height:185,
	width:320,
	zIndex:1
});

barView.add(barImage);

var drinkSpecialsView = Ti.UI.createScrollView({
	backgroundColor:'#000',
	contentHeight:'auto',
	showVerticalScrollIndicator: true,
	opacity:0.7,
	height:70,
	width:320,
	bottom:0,
	zIndex:2,
});

barView.add(drinkSpecialsView);

var drinkSpecialsLabel = Ti.UI.createLabel({
	text:json[i].bar.mon_special,
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	font:{fontFamily: customFont},
	color:'#fff',
	top:0
});

drinkSpecialsView.add(drinkSpecialsLabel);


        data.push(barView);
    }
    
    
var contentSlider = Ti.UI.createScrollableView({
	scrollType:'horizontal',
	views:data,
	height:185,
	top:0,
});

contentSlider.setData(data);

daily.add(contentSlider);

};

xhr.open('GET', 'http://campustaps.com/bars.json');
xhr.send();
















//END NOT FINISHED, JUST IMPLEMENTED

var attendingView = Ti.UI.createView({
	backgroundColor:'#fff',
	height:32,
	width:310,
	top:186,
	left:5,
	right:5
});

daily.add(attendingView);

var attendingLabel = Ti.UI.createLabel({
	text:'Where are you heading tonight?',
	font:{fontFamily: customFont},
	top:5,
	left:15
});

attendingView.add(attendingLabel);

var attendingButton = Ti.UI.createButton({
	backgroundImage:'/images/dailySpecials/attendingButton.png',
	title:'HERE',
	font:{fontFamily: customFont},
	height:Ti.UI.FILL,
	width:90,
	top:1,
	right:0
});

attendingView.add(attendingButton);


var scrollView = Ti.UI.createScrollView({
  contentWidth: Ti.UI.FILL, // changed
  contentHeight: Ti.UI.SIZE, // changed
  layout: 'vertical', // new
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: false,
  height: '40%',
  width: Ti.UI.FILL, // changed  
  bottom:0
});

daily.add(scrollView);



var toggledButton;
var toggleButton = function (e) {
    if (e.source.isToggled === false) {
        // reset previous button to off
        toggledButton.setBackgroundImage(toggledButton.imageOff);
        toggledButton.setColor(toggledButton.fontOff);
        toggledButton.isToggled = false;
        // set new button to on
        e.source.setBackgroundImage(e.source.imageOn);
        e.source.setColor(e.source.fontOn.color);
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





var allBars = Ti.UI.createButton({
	backgroundImage:'/images/dailySpecials/generalAreaSelected.png',
	imageOff:'/images/dailySpecials/generalArea.png',
	imageOn:'/images/dailySpecials/generalAreaSelected.png',
	fontOff:{color:'#fff'},
	fontOn:{color:'#fff'},
	isToggled: true,
	height:30,
	width:'100%',
	title:'All',
	font:{fontFamily: customFont},
	top:0,
	id: 1
});

scrollView.add(allBars);

var loyolaBars = Ti.UI.createButton({
	backgroundImage:'/images/loyolaAreaNew.png',
	imageOff:'/images/loyolaAreaNEW.png',
	imageOn:'/images/dailySpecials/loyolaAreaSelected.png',
	fontOff:{color:'#fff'},
	fontOn:{color:'#fff'},
	isToggled: false,
	height:30,
	width:'100%',
	title:'Loyola',
	font:{fontFamily: customFont},
	color:'#000',
	top:0,
	id: 2
});

scrollView.add(loyolaBars);

var johnsHopkinsBars = Ti.UI.createButton({
	backgroundImage:'/images/dailySpecials/johnsHopkinsArea.png',
	imageOff:'/images/dailySpecials/johnsHopkinsArea.png',
	imageOn:'/images/dailySpecials/johnsHopkinsAreaSelected.png',
	fontOff:{color:'#fff'},
	fontOn:{color:'#fff'},
	isToggled: false,
	height:30,
	width:'100%',
	title:'Johns Hopkins',
	font:{fontFamily: customFont},
	color:'#000',
	top:0,
	id: 3
});

scrollView.add(johnsHopkinsBars);

var towsonBars = Ti.UI.createButton({
	backgroundImage:'/images/dailySpecials/towsonArea.png',
	imageOff:'/images/dailySpecials/towsonArea.png',
	imageOn:'/images/dailySpecials/towsonAreaSelected.png',
	fontOff:{color:'#fff'},
	fontOn:{color:'#fff'},
	isToggled: false,
	height:30,
	width:'100%',
	title:'Towson',
	font:{fontFamily: customFont},
	color:'#000',
	top:0,
	id: 4
});

scrollView.add(towsonBars);


var downtownBars = Ti.UI.createButton({
	backgroundImage:'/images/dailySpecials/generalArea.png',
	imageOff:'/images/dailySpecials/generalArea.png',
	imageOn:'/images/dailySpecials/generalAreaSelected.png',
	fontOff:{color:'#fff'},
	fontOn:{color:'#fff'},
	isToggled: false,
	height:30,
	width:'100%',
	title:'Downtown',
	font:{fontFamily: customFont},
	color:'#000',
	top:0,
	id: 5
});

scrollView.add(downtownBars);

var federalHillBars = Ti.UI.createButton({
	backgroundImage:'/images/dailySpecials/generalArea.png',
	imageOff:'/images/dailySpecials/generalArea.png',
	imageOn:'/images/dailySpecials/generalAreaSelected.png',
	fontOff:{color:'#fff'},
	fontOn:{color:'#fff'},
	isToggled: false,
	height:30,
	width:'100%',
	title:'Federal Hill',
	font:{fontFamily: customFont},
	color:'#000',
	top:0,
	id: 6
});

scrollView.add(federalHillBars);

var fellsPointBars = Ti.UI.createButton({
	backgroundImage:'/images/dailySpecials/generalArea.png',
	imageOff:'/images/dailySpecials/generalArea.png',
	imageOn:'/images/dailySpecials/generalAreaSelected.png',
	fontOff:{color:'#fff'},
	fontOn:{color:'#fff'},
	isToggled: false,
	height:30,
	width:'100%',
	title:'Fells Point',
	font:{fontFamily: customFont},
	color:'#000',
	top:0,
	id: 7
});

scrollView.add(fellsPointBars);


allBars.addEventListener('click', toggleButton);
loyolaBars.addEventListener('click', toggleButton);
johnsHopkinsBars.addEventListener('click', toggleButton);
towsonBars.addEventListener('click', toggleButton);
downtownBars.addEventListener('click', toggleButton);
federalHillBars.addEventListener('click', toggleButton);
fellsPointBars.addEventListener('click', toggleButton);



toggledButton = allBars; // set to on button

