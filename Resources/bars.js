var win = Ti.UI.currentWindow;
win.barColor = '#3b5e34';
win.titleImage = 'tap.png';
win.barImage = '/images/navBar.png';

var customFont = 'HouschkaAlt';


var data = [],
    // This requires the detail window that you will
    // open each time a row is clicked.
    Detail = require('barDetail');
 
 
var barList = Titanium.UI.createTableView({
    height: 366,
    width: 320,
    top: 0,
    left: 0
});
win.add(barList);
barList.addEventListener('click', function (e) {
    Ti.API.info('data: ' + JSON.stringify(e.rowData.data));
    var detail = new Detail(e.rowData.data);
    detail.open({modal:true});
});
 
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function () {
    var json = JSON.parse(this.responseText);
    Ti.API.info(json.length);
    for (var i = 0; i < json.length; i++) {
        var row = Titanium.UI.createTableViewRow({
            className: 'bar-row',
            data: json[i].bar, // pass everything because you also use name later on
            hasChild: true,
            filter: json[i].bar.name
        });
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
        
        var iconImage = Titanium.UI.createImageView({
            image: json[i].bar.logo_url,
            width: 50,
            height: 50,
            left: 10,
            top: 10
        });
        row.add(iconImage);
        data.push(row);
    }
    barList.setData(data);
};
xhr.open('GET', 'http://campustaps.com/bars.json');
xhr.send();
 
win.open();