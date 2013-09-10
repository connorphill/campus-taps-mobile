function detail(data) {
    var self = Ti.UI.createWindow({
        backgroundColor:'#e9e7e7',
        title: data.name,
        font:{fontFamily: customFont}
    });
    
    self.barColor = '#3d6430';
	self.barImage = '/images/navBar.png';
 
 
 
 var ButtonRetour = Ti.UI.createImageView({
   	image:'/images/backButton.png',
   	width:50,
   	height:36
});             
 
ButtonRetour.addEventListener('click', function(){
    self.close();
});
 
self.leftNavButton = ButtonRetour;
  
 
 
 var barData = [];
 
 
 var barImage = Ti.UI.createImageView({
 	image:data.logo_url,
 	height:90,
 	width:150,
 	top:5,
 	left:5,	
 });
 
 self.add(barImage);
 
 var addressTitleView = Ti.UI.createView({
 	backgroundColor:'#3d6430',
 	height:20,
 	width:155,
 	top:5,
 	right:0,
 });
 
 self.add(addressTitleView);
 
 var addressTitleLabel = Ti.UI.createLabel({
 	text:'ADDRESS',
 	color:'#fff',
 	font:{size:14},
 	right:5
 });
 
 addressTitleView.add(addressTitleLabel);
 
 var addressView = Ti.UI.createView({
 	backgroundColor:'#fff',
 	height:70,
 	width:150,
 	top:25,
 	right:5
 });
 
 self.add(addressView);
 
 var addressLabel = Titanium.UI.createLabel({
 	text: data.address,
 	top: 10,
 	left:0
 });
 
 addressView.add(addressLabel);
 
 addressLabel.height='auto';
 
 var descriptionTitleView = Ti.UI.createView({
 	backgroundColor:'#3d6430',
 	height:20,
 	width:155,
 	top:100,
 	left:0
 });
 
 self.add(descriptionTitleView);
 

 var descriptionTitle = Titanium.UI.createLabel({
 	text: "DESCRIPTION",
 	color: '#fff',
 	font:{size:14},
 	left:5,
 });
 
 descriptionTitleView.add(descriptionTitle);
 
 
 var descriptionSummaryView = Ti.UI.createScrollView({
 	backgroundColor:'#fff',
 	showVerticalScrollIndicator: true,
 	height:90,
 	width:310,
 	top:120,
 	left:5,
 });
 
 self.add(descriptionSummaryView);
 
 var descriptionSummary = Ti.UI.createLabel({
 	text: data.description,
 	font: {size:12,
 		fontFamily: customFont}
 });
 
 descriptionSummaryView.add(descriptionSummary);
 
 
 var specialsLabelView = Ti.UI.createScrollView({
 	backgroundColor:'#3d6430',
 	showVerticalScrollIndicator: true,
 	height:20,
 	width:155,
 	bottom:180,
 	left:0
 });
 
 self.add(specialsLabelView);
 
 var drinkSpecialsLabel = Titanium.UI.createLabel({
 	text: "SPECIALS",
 	color: '#fff',
 	font:{size:14,
 		fontFamily: customFont
 		},
 	left:5,
 });
 
 specialsLabelView.add(drinkSpecialsLabel);
 
 
 var specialsLabelView = Ti.UI.createView({
 	backgroundColor:'#fff',
 	height:145,
 	width:312,
 	left:4,
 	right:4,
 	bottom:5
 });
 
 self.add(specialsLabelView);
 
 //Weekly Drink Specials Label
 
var specialsLabel = Ti.UI.createLabel({
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	top:0,
	left:0,
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	font:{fontFamily: customFont},
	layout:'horizontal'
});

specialsLabelView.add(specialsLabel); 
 
 
//END Weekly Drink Specials Label 
 
 var fonts = {
    button: {
        fontSize: 10,
        fontWeight: 'bold',
		fontFamily: customFont
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
	height: 30,
	width: 45,
	bottom: 150,
	left: 4,
	special: data.mon_special,
	font: fonts.button,
});

self.add(mondayButton); 
mondayButton.addEventListener('click', toggle);
 	

var tuesdayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Tues',
	height: 30,
	width: 45,
	bottom: 150,
	left:46,
	special: data.tue_special,
	font: fonts.button	
});

self.add(tuesdayButton); 
tuesdayButton.addEventListener('click', toggle);


 
var wednesdayButton = Ti.UI.createButton({
    backgroundImage: buttons.unselected,
    title: 'Weds',
    height: 30,
    width: 45,
    bottom: 150,
    left: 91,
    special: data.wed_special,
    font: fonts.button
}); 

self.add(wednesdayButton); 
wednesdayButton.addEventListener('click', toggle);
 

 
var thursdayButton = Ti.UI.createButton({
    backgroundImage: buttons.unselected,
    title: 'Thurs',
    height: 30,
    width: 45,
    bottom: 150,
    left: 136,
    special: data.thu_special,
	font: fonts.button
});

self.add(thursdayButton); 
thursdayButton.addEventListener('click', toggle);



 
 
var fridayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Fri',
	height: 30,
	width: 45,
	bottom: 150,
	left:181,
	special: data.fri_special,
	font: fonts.button,
});

self.add(fridayButton); 
fridayButton.addEventListener('click', toggle);
 	

 
var saturdayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Sat',
	height: 30,
	width: 45,
	bottom: 150,
	left:226,
	special: data.sat_special,
	font: fonts.button,
});

self.add(saturdayButton); 
saturdayButton.addEventListener('click', toggle);


 
var sundayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Sun',
	height: 30,
	width: 45,
	bottom: 150,
	right:4,
	special: data.sun_special,
	font: fonts.button,
});

self.add(sundayButton); 
sundayButton.addEventListener('click', toggle);
 	


    return self;
};
 
module.exports = detail;

