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
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: false,
  height: '50%',
  width: '100%',
  bottom:0
});
var view = Ti.UI.createView({
  height: 300,
  width: '100%'
});
scrollView.add(view);
daily.add(scrollView);



var toggledButton;
var toggleButton = function (e) {
    if (e.source.isToggled === false) {
        // reset previous button to off
        toggledButton.setBackgroundImage(toggledButton.imageOff);
        toggledButton.isToggled = false;
        // set new button to on
        e.source.setBackgroundImage(e.source.imageOn);
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
	isToggled: true,
	height:30,
	width:'100%',
	title:'All',
	top:0,
	id: 1
});

view.add(allBars);

var loyolaBars = Ti.UI.createButton({
	backgroundImage:'/images/dailySpecials/loyolaArea.png',
	imageOff:'/images/dailySpecials/loyolaArea.png',
	imageOn:'/images/dailySpecials/loyolaAreaSelected.png',
	isToggled: false,
	height:30,
	width:'100%',
	title:'Loyola',
	top:30,
	id: 2
});

view.add(loyolaBars);

var johnsHopkinsBars = Ti.UI.createButton({
	backgroundImage:'/images/dailySpecials/johnsHopkinsArea.png',
	imageOff:'/images/dailySpecials/johnsHopkinsArea.png',
	imageOn:'/images/dailySpecials/johnsHopkinsAreaSelected.png',
	isToggled: false,
	height:30,
	width:'100%',
	title:'Johns Hopkins',
	top:60,
	id: 3
});

view.add(johnsHopkinsBars);

var towsonBars = Ti.UI.createButton({
	backgroundImage:'/images/dailySpecials/towsonArea.png',
	imageOff:'/images/dailySpecials/towsonArea.png',
	imageOn:'/images/dailySpecials/towsonAreaSelected.png',
	isToggled: false,
	height:30,
	width:'100%',
	title:'Towson',
	top:90,
	id: 4
});

view.add(towsonBars);


var downtownBars = Ti.UI.createButton({
	backgroundImage:'/images/dailySpecials/generalArea.png',
	imageOff:'/images/dailySpecials/generalArea.png',
	imageOn:'/images/dailySpecials/generalAreaSelected.png',
	isToggled: false,
	height:30,
	width:'100%',
	title:'Downtown',
	top:120,
	id: 5
});

view.add(downtownBars);

var federalHillBars = Ti.UI.createButton({
	backgroundImage:'/images/dailySpecials/generalArea.png',
	imageOff:'/images/dailySpecials/generalArea.png',
	imageOn:'/images/dailySpecials/generalAreaSelected.png',
	isToggled: false,
	height:30,
	width:'100%',
	title:'Federal Hill',
	top:150,
	id: 6
});

view.add(federalHillBars);

var fellsPointBars = Ti.UI.createButton({
	backgroundImage:'/images/dailySpecials/generalArea.png',
	imageOff:'/images/dailySpecials/generalArea.png',
	imageOn:'/images/dailySpecials/generalAreaSelected.png',
	    isToggled: false,

	height:30,
	width:'100%',
	title:'Fells Point',
	top:180,
	    id: 7
});

view.add(fellsPointBars);


allBars.addEventListener('click', toggleButton);
loyolaBars.addEventListener('click', toggleButton);
johnsHopkinsBars.addEventListener('click', toggleButton);
towsonBars.addEventListener('click', toggleButton);
downtownBars.addEventListener('click', toggleButton);
federalHillBars.addEventListener('click', toggleButton);
fellsPointBars.addEventListener('click', toggleButton);



toggledButton = allBars; // set to on button

