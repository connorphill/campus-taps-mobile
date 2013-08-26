var Cloud = require('ti.cloud');

Titanium.Facebook.appid = "320766681373313";//Production
Titanium.Facebook.permissions = ['publish_stream', 'read_stream'];
 

var win = Ti.UI.currentWindow;

win.backgroundColor = '#fff';
 
var campusTapsLogo = Ti.UI.createImageView({
	image: '/images/campusTapsLogo.png',
	top: 60,
	width: 300,
	height: 100
});
win.add(campusTapsLogo); 
 
var fbSignupBtn = Ti.Facebook.createLoginButton({
    bottom: 50,
    style : Ti.Facebook.BUTTON_STYLE_WIDE
});
win.add(fbSignupBtn);
 

 
 Titanium.Facebook.addEventListener('login', function(e) {
	if (e.success) {
		Cloud.SocialIntegrations.externalAccountLogin({
			type : 'facebook',
			token : Ti.Facebook.accessToken
		}, function(e) {
			if (e.success) {
				var user = e.users[0];
				Ti.API.info('User  = ' + JSON.stringify(user));
				Ti.App.Properties.setString('currentUser_id', e.id);
				Ti.App.Properties.setString('session_id', Cloud.sessionId);
				Ti.App.Properties.setString('username', e.username)
				Ti.API.info('Success: ' + 'id: ' + user.id + '\\n' + 'first name: ' + user.first_name + '\\n' + 'last name: ' + user.last_name);
				
				win.close();			
			} else {
				alert('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	} else if (e.error) {
		alert("Error = " + e.error);
	} else if (e.cancelled) {
		alert("canceld");
	}
}); 
 
 
var session_id = Ti.App.Properties.getString('session_id');
 
 




