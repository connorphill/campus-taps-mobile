var win = Ti.UI.currentWindow;
win.barColor = '#fff';
win.titleImage = 'tap.png';


var data = [],
    // This requires the detail window that you will
    // open each time a row is clicked.
    Detail = require('detail');
 
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
                fontWeight: 'bold'
            },
            left: 70,
            top: 5,
            height: 20,
            width: 210
        });
        row.add(titleLabel);
        var addressLabel = Titanium.UI.createLabel({
            text: json[i].bar.address,
            font: {
                fontSize: 10,
                fontWeight: 'normal'
            },
            left: 70,
            top: 25,
            height: 40,
            width: 200
        });
        row.add(addressLabel);
        var urlPrefix = 'https://s3.amazonaws.com/campustaps/bars/';
        var iconImage = Titanium.UI.createImageView({
            image: urlPrefix + json[i].bar.logo_file_name,
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