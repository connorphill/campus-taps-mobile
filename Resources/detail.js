function detail(data) {
    var self = Ti.UI.createWindow({
        backgroundColor:'#fff',
    });
    
    self.barColor = '#fff';
    self.titleImage = 'tap.png';

 
 
 
 var ButtonRetour = Ti.UI.createButton({
    title:'Retour',
    backgroundImage:'back.png'        
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
 	text: "DRINK SPECIALS",
 	left:0,
 	top:60,
 	width:180
 });
 
 self.add(drinkSpecialsLabel);
 
var barsTable = Titanium.UI.createTableView({
    top:80,
    scrollable: true
});
 

 
 
var specialsMon = Titanium.UI.createTableViewRow({
    title: data.mon_special,
    height:60,
    header: 'Monday'
});
 
barData.push(specialsMon);
 
var specialsTues = Titanium.UI.createTableViewRow({
    title: data.tue_special,
    height:60,
    header: 'Tuesday'
});
 
barData.push(specialsTues);
 
var specialsWed = Titanium.UI.createTableViewRow({
    title: barData.wed_special,
    height:60,
    header: 'Wednesday'
});
 
barData.push(specialsWed);
 
 var specialsThurs = Titanium.UI.createTableViewRow({
    title: barData.thu_special,
    height:60,
    header: 'Thursday'
});
 
barData.push(specialsThurs);
  
 
 var specialsFri = Titanium.UI.createTableViewRow({
    title: barData.fri_special,
    height:60,
    header: 'Friday'
});

barData.push(specialsFri);
 

var specialsSat = Titanium.UI.createTableViewRow({
    title: barData.sat_special,
    height:60,
    header: 'Saturday'
});
 

barData.push(specialsSat);


var specialsSun = Titanium.UI.createTableViewRow({
    title: barData.sun_special,
    height:60,
    header: 'Sunday'
});
 

barData.push(specialsSun);
 
barsTable.setData(barData);
 
self.add(barsTable);
    // create your table here with the 
    // properties in the data argument
 
    return self;
};
 
module.exports = detail;