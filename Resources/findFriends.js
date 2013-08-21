var Cloud = require('ti.cloud');

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
  


Cloud.SocialIntegrations.searchFacebookFriends(function (e){
    if (e.success) {
        alert('Success:\n' +
            'Count: ' + e.users.length);
        for (var i = 0; i < e.users.length; i++) {
            var user = e.users[i];
            alert('id: ' + user.id + '\n' +
                'first name: ' + user.first_name + '\n' +
                'last name: ' + user.last_name);
         }
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});