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
 	height:95,
 	width:149,
 	top:5,
 	left:6,	
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
 	font:{size:14, fontFamily: customFont},
 	right:5
 });
 
 addressTitleView.add(addressTitleLabel);
 
 var addressView = Ti.UI.createView({
 	backgroundColor:'#fff',
 	height:70,
 	width:150,
 	top:30,
 	right:5
 });
 
 self.add(addressView);
 
 var addressLabel = Titanium.UI.createLabel({
 	text: data.address + "\n" + data.city + ", MD",
 	height:Ti.UI.SIZE,
 	width:Ti.UI.SIZE,
 	font:{size:20, fontWeight: 'bold', fontFamily: customFont},
 	top: 10,
 	left:5
 });
 
 addressView.add(addressLabel);
 
 addressLabel.height='auto';
 
 var descriptionTitleView = Ti.UI.createView({
 	backgroundColor:'#3d6430',
 	height:20,
 	width:155,
 	top:110,
 	left:0
 });
 
 self.add(descriptionTitleView);
 

 var descriptionTitle = Titanium.UI.createLabel({
 	text: "DESCRIPTION",
 	color: '#fff',
 	font:{size:14, fontFamily: customFont},
 	left:5,
 });
 
 descriptionTitleView.add(descriptionTitle);
 
 
 var descriptionSummaryView = Ti.UI.createScrollView({
 	backgroundColor:'#fff',
 	showVerticalScrollIndicator: true,
 	height:90,
 	width:310,
 	top:135,
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
 	bottom:165,
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
 	height:120,
 	width:308,
 	left:6,
 	right:6,
 	bottom:10
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
    selected: '/images/barDetail/specialSelected.png',
    unselected: '/images/barDetail/specialUnSelected.png'
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
 
var dayButtonView = Ti.UI.createView({
	backgroundColor:'#fff',
	height:30,
	width:308,
	bottom:130,
	left:6,
	right:6
});

self.add(dayButtonView);
 
var mondayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Mon',
	height: 30,
	width: 44,
	bottom: 0,
	left: 0,
	special: data.mon_special,
	font: fonts.button,
});

dayButtonView.add(mondayButton);
 
mondayButton.addEventListener('click', toggle);
 	

var tuesdayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Tues',
	height: 30,
	width: 44,
	bottom: 0,
	left:44,
	special: data.tue_special,
	font: fonts.button	
});

dayButtonView.add(tuesdayButton); 

tuesdayButton.addEventListener('click', toggle);


 
var wednesdayButton = Ti.UI.createButton({
    backgroundImage: buttons.unselected,
    title: 'Weds',
    height: 30,
    width: 44,
    bottom: 0,
    left: 88,
    special: data.wed_special,
    font: fonts.button
}); 

dayButtonView.add(wednesdayButton); 

wednesdayButton.addEventListener('click', toggle);
 

 
var thursdayButton = Ti.UI.createButton({
    backgroundImage: buttons.unselected,
    title: 'Thurs',
    height: 30,
    width: 44,
    bottom: 0,
    left: 132,
    special: data.thu_special,
	font: fonts.button
});

dayButtonView.add(thursdayButton); 

thursdayButton.addEventListener('click', toggle);



 
 
var fridayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Fri',
	height: 30,
	width: 44,
	bottom: 0,
	left:176,
	special: data.fri_special,
	font: fonts.button,
});

dayButtonView.add(fridayButton); 

fridayButton.addEventListener('click', toggle);
 	

 
var saturdayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Sat',
	height: 30,
	width: 44,
	bottom: 0,
	left:220,
	special: data.sat_special,
	font: fonts.button,
});

dayButtonView.add(saturdayButton); 

saturdayButton.addEventListener('click', toggle);


 
var sundayButton = Ti.UI.createButton({
	backgroundImage: buttons.unselected,
	title: 'Sun',
	height: 30,
	width: 45,
	bottom: 0,
	left:264,
	special: data.sun_special,
	font: fonts.button,
});

dayButtonView.add(sundayButton); 

sundayButton.addEventListener('click', toggle);
 	


    return self;
};
 
module.exports = detail;

