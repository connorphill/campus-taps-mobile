var Cloud = require('ti.cloud');

var fb = require('facebook');
fb.appid = "125520310866488";//Production
fb.permissions = ['read_stream'];
fb.forceDialogAuth = true;

//login.js WINDOW SETTINGS
var win = Ti.UI.currentWindow;

win.backgroundColor = '#fff';
//END login.js WINDOW SETTINGS 
 
//LOGO IMAGE
var campusTapsLogo = Ti.UI.createImageView({
	image: '/images/campusTapsLogo.png',
	top: 60,
	width: 300,
	height: 100
});
win.add(campusTapsLogo); 

//END LOGO IMAGE 
 
//FACEBOOK LOGIN BUTTON 
var fbSignupBtn = fb.createLoginButton({
    bottom: 50,
    style : Ti.Facebook.BUTTON_STYLE_WIDE
});
win.add(fbSignupBtn);

//END FACEBOOK LOGIN BUTTON

//FACEBOOK AND ACS EVENT LISTENER (LOGIN)
 
 fb.createLoginButton.addEventListener('login', function(e) {
	if (e.success) {
		
		
		Cloud.SocialIntegrations.externalAccountLogin({
			type : 'facebook',
			token : fb.accessToken
		}, function(e) {
			
			if (e.success) {
				var user = e.users[0];
				Ti.API.info('User  = ' + JSON.stringify(user));
				Ti.App.Properties.setString('currentUser_id', e.id);
				Ti.App.Properties.setString('session_id', Cloud.sessionId);
				Ti.App.Properties.setString('username', e.username);
				Ti.App.Properties.setString('photo', e.photo);
				Ti.API.info('Success: ' + 'id: ' + user.id + '\\n' + 'first name: ' + user.first_name + '\\n' + 'last name: ' + user.last_name);
				
								win.close();
						
			} else {
				alert('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
				
			}
		});
	} else if (e.error) {
		alert("Error = " + e.error);
	} else if (e.cancelled) {
		alert("cancelled");
		
	}
}); 
 
 
//END FACEBOOK AND ACS EVENT LISTENER (LOGIN)

 




