var daily = Ti.UI.currentWindow;
daily.barColor = '#3b5e34';
daily.titleImage = 'tap.png';
daily.barImage = '/images/navBar.png';

//NOT FINISHED, JUST IMPLEMENTED
var view1 = Ti.UI.createView({backgroundColor:'#123'});
var view2 = Ti.UI.createView({backgroundColor:'#246'});
var view3 = Ti.UI.createView({backgroundColor:'#48b'});


var contentSlider = Ti.UI.createScrollableView({
	views:[view1,view2,view3],
	showPagingControl:true,
	top:0,
	height:'50%'
});

daily.add(contentSlider);



//END NOT FINISHED, JUST IMPLEMENTED



var scrollView = Ti.UI.createScrollView({
  contentWidth: Ti.UI.FILL, // changed
  contentHeight: Ti.UI.SIZE, // changed
  layout: 'vertical', // new
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: false,
  height: '50%',
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

