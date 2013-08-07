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
  backgroundColor:'#000',
  height: 300,
  width: '100%'
});
scrollView.add(view);
daily.add(scrollView);


var allBars = Ti.UI.createButton({
	image:'/images/allBar.png',
	height:30,
	width:'100%',
	title:'All',
	top:0
});

view.add(allBars);

var loyolaBars = Ti.UI.createButton({
	image:'/images/loyolaBar.png',
	title:'Loyola',
	height:30,
	width:'100%',
	title:'Loyola',
	top:30
});

view.add(loyolaBars);

var johnsHopkinsBars = Ti.UI.createButton({
	image:'/images/johnsHopkinsBar.png',
	title:'Johns Hopkins',
	height:30,
	width:'100%',
	title:'Johns Hopkins',
	top:60
});

view.add(johnsHopkinsBars);

var towsonBars = Ti.UI.createButton({
	image:'/images/towsonBar.png',
	title:'Towson',
	height:30,
	width:'100%',
	title:'Towson',
	top:60
});

view.add(towsonBars);


var downtownBars = Ti.UI.createButton({
	image:'/images/downtownBar.png',
	title:'Downtown',
	height:30,
	width:'100%',
	title:'Downtown',
	top:90
});

view.add(downtownBars);

var federalHillBars = Ti.UI.createButton({
	image:'/images/federalHillBar.png',
	title:'Federal Hill',
	height:30,
	width:'100%',
	title:'Federal Hill',
	top:120
});

view.add(federalHillBars);

var fellsPointBars = Ti.UI.createButton({
	image:'/images/fellsPointBar.png',
	height:30,
	width:'100%',
	title:'Fells Point',
	top:150
});

view.add(fellsPointBars);