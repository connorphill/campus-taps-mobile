var Cloud = require("ti.cloud");


friends = [];

//WINDOW SETTINGS
var friendsList = Ti.UI.currentWindow;
friendsList.barColor = '#e9e7e7';
friendsList.title = "friendsList";
friendsList.barImage = '/images/navBar.png';
friendsList.backgroundColor = '#fff';
friendsList.translucent = false;
friendsList.navTintColor = '#fff';
friendsList.color = "#fff";
//END WINDOW SETTINGS

var customFont = 'HouschkaAlt';


//BACK BUTTON
friendsList.leftNavButton = ButtonRetour;

 var ButtonRetour = Ti.UI.createButton();           
 
ButtonRetour.addEventListener('click', function(){
    friendsList.close();
});
//END BACK BUTTON



//FRIENDS LIST TABLE
var friendsListTable = Titanium.UI.createTableView({
    height: 366,
    width: 320,
    top: 0,
    left: 0
});
friendsList.add(friendsListTable);

//FIND FRIENDS WHO HAVE APP INSTALLED 


Cloud.Friends.search({
    user_id: user.id
}, function (e) {
    if (e.success) {
        alert('Success:\n' +
            'Count: ' + e.users.length);
        for (var i = 0; i < e.users.length; i++) {
            var user = e.users[i];
            alert('id: ' + user.id + '\n' +
                'first name: ' + user.first_name + '\n' +
                'last name: ' + user.last_name);
                
                
                 var row = Ti.UI.createTableViewRow({
                	height:60,
                	id: user.id
                });
                friends.push(row);
                
                //FRIEND NAME
                var name = Ti.UI.createLabel({
                	text:user.first_name + " " + user.last_name,
                	height:20,
                	font:{fontSize:20},
                	left:70
                });
                
                row.add(name);
                //END FRIEND NAME
             
             friendsListTable.setData(friends);
        }
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
