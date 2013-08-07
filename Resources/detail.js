function detail(data) {
    var self = Ti.UI.createWindow({
        backgroundColor:'#fff',
    });
    
    self.barColor = '#3b5e34';
    self.titleImage = 'tap.png';
	self.barImage = '/images/navBar.png';
 
 
 
 var ButtonRetour = Ti.UI.createButton({
    image:'/images/backButton.png' 
           
});             
 
ButtonRetour.addEventListener('click', function(){
    self.close();
});
 
self.leftNavButton = ButtonRetour;
 
 
 var barData = [];
 
 var barName = Titanium.UI.createLabel({
 	text: data.name,
 	top: 10,
 	right:0
 });
 
 self.add(barName);
 
 var addressLabel = Titanium.UI.createLabel({
 	text: data.address,
 	top: 30,
 	right:0
 });
 
 self.add(addressLabel);
 
 var drinkSpecialsLabel = Titanium.UI.createLabel({
 	color: '#fff',
 	backgroundColor:'#3e6d46',
 	text: "SPECIALS",
 	left:0,
 	top:60,
 	width:180
 });
 
 self.add(drinkSpecialsLabel);
 
var specialsLabel = Ti.UI.createLabel({
	bottom:30,
	backgroundColor:'#e3e3e3'
});

self.add(specialsLabel); 
 
 
 var fonts = {
    button: {
        fontSize: 10,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue'
    }
};
var buttons = {
    selected: '/images/selectedDay.png',
    unselected: '/images/bgDay.png'
};
var lastbutton = undefined;

var toggle = function (e) {
    specialsLabel.setText(e.source.special);
    e.source.setBackgroundImage(buttons.selected);
    if (lastbutton !== undefined) {
    lastbutton.setBackgroundImage(buttons.unselected);
}
lastbutton = e.source; // here
};
 
 
 
var mondayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Mon',
	width: 46,
	height: 30,
	bottom: 160,
	left:0,
	special: data.mon_special,
	    font: fonts.button,
});

self.add(mondayButton); 
mondayButton.addEventListener('click', toggle);
 	

var tuesdayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Tues',
	width: 46,
	height: 30,
	bottom: 160,
	left:45,
	special: data.tue_special,
	font: fonts.button	
});

self.add(tuesdayButton); 
tuesdayButton.addEventListener('click', toggle);


 
var wednesdayButton = Ti.UI.createButton({
    backgroundImage: buttons.unselected,
    bottom: 160,
    left: 90,
    width: 46,
    height: 30,
    font: fonts.button,
    special: data.wed_special,
    title: 'Weds',
    
}); 
self.add(wednesdayButton); 
wednesdayButton.addEventListener('click', toggle);
 

 
var thursdayButton = Ti.UI.createButton({
    backgroundImage: buttons.unselected,
    bottom: 160,
    left: 135,
    height: 30,
    width: 46,
    font: fonts.button,
    title: 'Thurs',
    special: data.thu_special,

});
self.add(thursdayButton); 
thursdayButton.addEventListener('click', toggle);



 
 
var fridayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Fri',
	width: 46,
	height: 30,
	bottom: 160,
	left:180,
	special: data.fri_special,
	    font: fonts.button,

});

self.add(fridayButton); 

fridayButton.addEventListener('click', toggle);
 	

 
var saturdayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Sat',
	height: 30,
	width: 46,
	bottom: 160,
	left:225,
	special: data.sat_special,
	    font: fonts.button,


});

self.add(saturdayButton); 

saturdayButton.addEventListener('click', toggle);


 
var sundayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Sun',
	width: 46,
	height: 30,
	bottom: 160,
	left:270,
	special: data.sun_special,
	    font: fonts.button,

});

self.add(sundayButton); 

sundayButton.addEventListener('click', toggle);
 	


    return self;
};
 
module.exports = detail;

