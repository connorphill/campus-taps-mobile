var daily = Ti.UI.currentWindow;
daily.barColor = '#3b5e34';
daily.titleImage = 'tap.png';
daily.barImage = '/images/navBar.png';


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


var allBars = Ti.UI.createButton({
	image:'/images/dailySpecials/generalArea.png',
	height:30,
	width:'100%',
	title:'All',
	top:0
});

view.add(allBars);

var loyolaBars = Ti.UI.createButton({
	image:'/images/dailySpecials/loyolaArea.png',
	height:30,
	width:'100%',
	font:{color:'black'},
	title:'Loyola',
	top:30
});

view.add(loyolaBars);

var johnsHopkinsBars = Ti.UI.createButton({
	image:'/images/dailySpecials/johnsHopkinsArea.png',
	height:30,
	width:'100%',
	title:'Johns Hopkins',
	top:60
});

view.add(johnsHopkinsBars);

var towsonBars = Ti.UI.createButton({
	image:'/images/dailySpecials/towsonArea.png',
	height:30,
	width:'100%',
	title:'Towson',
	top:90
});

view.add(towsonBars);


var downtownBars = Ti.UI.createButton({
	image:'/images/dailySpecials/generalArea.png',
	height:30,
	width:'100%',
	title:'Downtown',
	top:120
});

view.add(downtownBars);

var federalHillBars = Ti.UI.createButton({
	image:'/images/dailySpecials/generalArea.png',
	height:30,
	width:'100%',
	title:'Federal Hill',
	top:150
});

view.add(federalHillBars);

var fellsPointBars = Ti.UI.createButton({
	image:'/images/dailySpecials/generalArea.png',
	height:30,
	width:'100%',
	title:'Fells Point',
	top:180
});

view.add(fellsPointBars);