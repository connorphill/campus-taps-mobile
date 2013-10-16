var Cloud = require('ti.cloud');

var customFont = 'HouschkaAlt';

friendRequest =[];

var notifications = Ti.UI.currentWindow;
notifications.barColor = '#3b5e34';
notifications.title = "Notifications";
notifications.backgroundColor = '#fff';
notifications.translucent = false;
notifications.navTintColor = '#fff';

notifications.leftNavButton = ButtonRetour;

var ButtonRetour = Ti.UI.createImageView();             
 
ButtonRetour.addEventListener('click', function(){
    notifications.close();
});
 



var approvalTable = Titanium.UI.createTableView({
     height: 366,
    width: 320,
    top: 0,
    left: 0
});
notifications.add(approvalTable);


Cloud.Friends.requests(function (e) {
    if (e.success) {
        alert('Success:\n' +
            'Count: ' + e.friend_requests.length);
        for (var i = 0; i < e.friend_requests.length; i++) {
            var user = e.friend_requests[i].user;
            
            var row = Ti.UI.createTableViewRow({
                	height:60,
                	id: user.id
                });
                friendRequest.push(row);
            
            var name = Ti.UI.createLabel({
                	text:user.first_name + " " + user.last_name,
                	height:20,
                	font:{fontSize:20},
                	left:40
                });
                
                row.add(name);
          
             var approve = Ti.UI.createButton({
             	backgroundImage:'/images/findFriends/friendButton.png',
					title:'Approve',
					font:{fontFamily: customFont},
					height:30,
					width:60,
					top:15,
					bottom:15,
					right:5
             });
             
             	row.add(approve);
             	
             	approve.addEventListener('click', function(){
             		 Cloud.Friends.approve({
    user_ids: user.id
}, function (e) {
    if (e.success) {
        alert('Friend(s) approved');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
});
        }
        approvalTable.setData(friendRequest);
    
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});

