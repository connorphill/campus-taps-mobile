var settings = Ti.UI.currentWindow;
settings.barColor = '#3b5e34';
settings.title = "Profile Settings";
settings.barImage = '/images/navBar.png';

 var ButtonRetour = Ti.UI.createImageView({
   	image:'/images/backButton.png',
   	width:50,
   	height:36
});             
 
ButtonRetour.addEventListener('click', function(){
    settings.close();
});
 
settings.leftNavButton = ButtonRetour;
  
