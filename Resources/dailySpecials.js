
//dailySpecials.js WINDOW SETTINGS
var daily = Ti.UI.currentWindow;
daily.barColor = '#3d6430';
daily.titleImage = 'tap.png';
daily.backgroundColor = '#e9e7e7';
daily.translucent = false;
//END dailySpecials.js WINDOW SETTINGS

var customFont = 'HouschkaAlt';


var data = [];




var xhr = Ti.Network.createHTTPClient();

//LOAD JSON DATA
xhr.onload = function(){
	var json = JSON.parse(this.responseText);
    Ti.API.info(json.length);
    for (var i = 0; i < json.length; i++) {
    	
//SCROLLABLE VIEW DATA
var barView = Ti.UI.createView({
    		backgroundColor:'#123',
    		data:json[i].bar,
    		filter: json[i].bar.name
    		});
    		
//END SCROLLABLE VIEW DATA
    		
//BAR NAME  		

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

//END BAR NAME

//BAR IMAGE

var barImage = Ti.UI.createImageView({
	image: json[i].bar.logo_url,
	height:185,
	width:320,
	zIndex:1
});

barView.add(barImage);

//END BAR IMAGE

//DAILY DRINK SPECIALS VIEW

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

//END DAILY DRINK SPECIALS VIEW

//DAILY DRINK SPECIALS DATA LABEL

var drinkSpecialsLabel = Ti.UI.createLabel({
	text:json[i].bar.mon_special,
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	font:{fontFamily: customFont},
	color:'#fff',
	top:0
});

drinkSpecialsView.add(drinkSpecialsLabel);

//END DAILY DRINK SPECIALS DATA LABEL


        data.push(barView);
    }
    
//CONTENT SLIDER ELEMENT (Element #1)
   
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


//END CONTENT SLIDER ELEMENT (Element #1)

//ATTENDING VIEW (Element #2)

var attendingView = Ti.UI.createView({
	backgroundColor:'#fff',
	height:32,
	width:310,
	top:186,
	left:5,
	right:5
});

daily.add(attendingView);

//END ATTENDING VIEW (Element #2)

//"WHERE ARE YOU HEADING TONIGHT?" LABEL

var attendingLabel = Ti.UI.createLabel({
	text:'Where are you heading tonight?',
	font:{fontFamily: customFont},
	top:5,
	left:15
});

attendingView.add(attendingLabel);

//END "WHERE ARE YOU HEADING TONIGHT?" LABEL


//"HERE" BUTTON

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

//END "HERE" BUTTON


//AREA BUTTONS VIEW (Element #3)

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

//END AREA BUTTONS VIEW (Element #3)

//AREA BUTTON TOGGLE

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


//END AREA BUTTON TOGGLE

//ALL BARS BUTTON
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

//END ALL BARS BUTTON

//JOHNS HOPKINS BUTTON
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
	id: 2
});

scrollView.add(johnsHopkinsBars);

//END JOHNS HOPKINS BUTTON


//LOYOLA BUTTON
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
	id: 3
});

scrollView.add(loyolaBars);
//END LOYOLA BUTTON

//TOWSON BUTTON
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
//END TOWSON BUTTON


//DOWNTOWN BUTTON
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
//END DOWNTOWN BUTTON

//FEDERAL HILL BUTTON
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
//FEDERAL HILL BUTTON

//FELLS POINT BUTTON
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
//END FELLS POINT BUTTON


//AREA BUTTONS EVENT LISTENER
allBars.addEventListener('click', toggleButton);
loyolaBars.addEventListener('click', toggleButton);
johnsHopkinsBars.addEventListener('click', toggleButton);
towsonBars.addEventListener('click', toggleButton);
downtownBars.addEventListener('click', toggleButton);
federalHillBars.addEventListener('click', toggleButton);
fellsPointBars.addEventListener('click', toggleButton);
//END AREA BUTTONS EVENT LISTENER


//TOGGLE ALL BARS BUTTON
toggledButton = allBars; // set to on button

//END TOGGLE ALL BARS BUTTON