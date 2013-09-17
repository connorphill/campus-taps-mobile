var Cloud = require('ti.cloud');

var session_id = Ti.App.Properties.getString('session_id');

data =[];

var friends = Ti.UI.currentWindow;
friends.barColor = '#3b5e34';
friends.title = "Friends";
friends.barImage = '/images/navBar.png';
friends.backgroundColor = '#fff';


var ButtonRetour = Ti.UI.createImageView({
   	image:'/images/backButton.png',
   	width:50,
   	height:36
});             
 
ButtonRetour.addEventListener('click', function(){
    friends.close();
});
 
friends.leftNavButton = ButtonRetour;
  

var barList = Titanium.UI.createTableView({
    height: 366,
    width: 320,
    top: 0,
    left: 0
});
friends.add(barList);

Cloud.SocialIntegrations.searchFacebookFriends(function (e){
    if (e.success) {
        alert('Success:\n' +
            'Count: ' + e.users.length);
        for (var i = 0; i < e.users.length; i++) {
            var user = e.users[i];
            
                
                var row = Ti.UI.createTableViewRow({
                	height:60,
                	id: user.id
                });
                data.push(row);
                
                var name = Ti.UI.createLabel({
                	text:user.first_name + " " + user.last_name,
                	height:20,
                	font:{fontSize:20},
                	left:40
                });
                row.add(name);
                var addFriend = Ti.UI.createImageView({
					image:'/images/findFriends/friendButton.png',
					text:'+ Friend',
					height:30,
					width:60,
					top:15,
					bottom:15,
					right:5
				});

				row.add(addFriend);
				
				
				addFriend.addEventListener('click', function(checked){
					Cloud.Friends.add({
    				user_ids: user.id
			}, 
			function (e) {
    			if (e.success) {
       				 alert('Friend(s) added');
    			} else {
       				 alert('Error:\n' +
           			 ((e.error && e.message) || JSON.stringify(e)));
    		}
				});
                
                var profileImage = Ti.UI.createImageView({
                	
                	image:user.photo,
                	
                });
                
                row.add(profileImage);
                
                
         });
         barList.setData(data);
    }
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});




