var Cloud = require('ti.cloud');


data =[];


//WINDOW SETTINGS
var friends = Ti.UI.currentWindow;
friends.barColor = '#e9e7e7';
friends.title = "Friends";
friends.barImage = '/images/navBar.png';
friends.backgroundColor = '#fff';
friends.translucent = false;
friends.navTintColor = '#fff';
friends.color = "#fff";
//END WINDOW SETTINGS

var customFont = 'HouschkaAlt';


//BACK BUTTON
friends.leftNavButton = ButtonRetour;

 var ButtonRetour = Ti.UI.createButton();           
 
ButtonRetour.addEventListener('click', function(){
    friends.close();
});
//END BACK BUTTON
  
//FRIENDS LIST TABLE
var barList = Titanium.UI.createTableView({
    height: 366,
    width: 320,
    top: 0,
    left: 0
});
friends.add(barList);

//FIND FRIENDS WHO HAVE APP INSTALLED  *NOT FINISHED*

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
                
                //FRIEND NAME
                var name = Ti.UI.createLabel({
                	text:user.first_name + " " + user.last_name,
                	height:20,
                	font:{fontSize:20},
                	left:70
                });
                
                row.add(name);
                //END FRIEND NAME
                
                //ADD FRIEND BUTTON
                var addFriend = Ti.UI.createButton({
					backgroundImage:'/images/findFriends/friendButton.png',
					title:'+ Friend',
					font:{fontFamily: customFont},
					height:30,
					width:60,
					top:15,
					bottom:15,
					right:5
				});

				row.add(addFriend);
				//END ADD FRIEND BUTTON
				
				//ADD FRIEND (ACS) EVENT LISTENER
				addFriend.addEventListener('click', function(){
					Cloud.Friends.add({
    				user_ids: user.id
			}, 
			function (e) {
    			if (e.success) {
       				 alert('Friend(s) added');
       				 addFriend.backgroundImage = '/images/findFriends/friend.png';
       				 addFriend.title = 'Request';
    			} else if (user.id === true) {
    				addFriend.backgroundImage = 'images/findFriends/friend.png',
    				addFriend.title = "Friend";
    			}
    			
    			 else {
       				 alert('Error:\n' +
           			 ((e.error && e.message) || JSON.stringify(e)));
    		}
				});
                //END FRIEND (ACS) EVENT LISTENER
                
                //FRIEND PROFILE IMAGE (STILL NEEDS WORK)
                var profileImage = Ti.UI.createImageView({
                	
                	height:50,
                	width:50,
                	left:5
                });
                
                row.add(profileImage);
                //END FRIEND PROFILE IMAGE
                
         });
         //SET FRIENDS TABLE DATA
         barList.setData(data);
    }
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});




