var fb = Ti.UI.currentWindow;
fb.barColor='#fff';
fb.titleImage = 'tap.png';
//START Facebook Code

//create your facebook sessionf

		Titanium.Facebook.appid = '320766681373313';
		Titanium.Facebook.permissions = ['read_friendlists']; //Permissions your app need
		
	Titanium.Facebook.addEventListener('login', function(e)
         {
           if(e.success) {
           	var name = Ti.UI.createLabel({
           		text: Ti.Facebook.name + '/name',
           		top: 10
           		
           	});
           	
           	fb.add(name);
           	
           alert('You are now logged in!');
         } else if(e.error) {
           alert('Error: ' + e.error);
         } else if(e.cancelled) {
           alert('You cancelled the login');
		} 
});
		//call the facebook authorize method to login
		Titanium.Facebook.authorize();


var imagem = Ti.UI.createImageView({
    image : 'https://graph.facebook.com/' + Ti.Facebook.uid + '/picture',
     top:10,
 width:50,
 height:50,
 left:10
 
});
fb.add(imagem);

var userName = Ti.UI.createLabel({
	text: 'user.first_name'
});

fb.add(userName);

//Logout

Titanium.Facebook.addEventListener('logout', function(e) {
    alert('Logged out');
});
Titanium.Facebook.logout();



var button = Ti.Facebook.createLoginButton({
    top : 50,
    style : Ti.Facebook.BUTTON_STYLE_WIDE
});

fb.add(button);
