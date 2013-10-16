
//WINDOW SETTINGS
var win = Ti.UI.currentWindow;
win.barColor = '#3d6430';
win.titleImage = 'tap.png';
win.translucent = false;
//END WINDOW SETTINGS

var customFont = 'HouschkaAlt';


var data = [],
    // This requires the detail window that you will
    // open each time a row is clicked.
    Detail = require('barDetail');
 
//BAR TABLE VIEW
var barList = Titanium.UI.createTableView({
    height: Ti.UI.FILL,
    width: Ti.UI.FILL,
    top: 0,
    left: 0
});
win.add(barList);
//END BAR TABLE VIEW


//BAR ROW CLICK EVENT LISTENER
barList.addEventListener('click', function (e) {
    Ti.API.info('data: ' + JSON.stringify(e.rowData.data));
    var detail = new Detail(e.rowData.data);
    win.tab.open(detail, {animated:true});
});
 
//END BAR ROW CLICK EVENT LISTENER 
 
var xhr = Titanium.Network.createHTTPClient();

//LOAD JSON DATA
xhr.onload = function () {
    var json = JSON.parse(this.responseText);
    Ti.API.info(json.length);
    for (var i = 0; i < json.length; i++) {
    	//CREATE ROW WITH JSON DATA - FILTER BY BAR NAME
        var row = Titanium.UI.createTableViewRow({
            className: 'bar-row',
            data: json[i].bar, // pass everything because you also use name later on
            hasChild: true,
            filter: json[i].bar.name
        });
        
        //BAR NAME
        var titleLabel = Titanium.UI.createLabel({
            text: json[i].bar.name,
            font: {
                fontSize: 14,
                fontWeight: 'bold',
                fontFamily: customFont
            },
            left: 70,
            top: 5,
            height: 20,
            width: 210
        });
        row.add(titleLabel);
        
        //END BAR NAME
        
        //BAR ADDRESS
        var addressLabel = Titanium.UI.createLabel({
            text: json[i].bar.address + ", " + json[i].bar.city + ", MD",
            font: {
                fontSize: 10,
                fontWeight: 'normal',
                fontFamily: customFont
            },
            left: 70,
            top: 25,
            height: 40,
            width: 200
        });
        row.add(addressLabel);
        //END BAR ADDRESS
        
        //BAR IMAGE
        var iconImage = Titanium.UI.createImageView({
            image: json[i].bar.logo_url,
            width: 50,
            height: 50,
            left: 10,
            top: 10
        });
        row.add(iconImage);
        //END BAR IMAGE
        
        data.push(row);
    }
    barList.setData(data);
};
xhr.open('GET', 'http://campustaps.com/bars.json');
xhr.send();
 
win.open();