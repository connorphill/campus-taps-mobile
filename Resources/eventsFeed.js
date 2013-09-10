var events = Ti.UI.currentWindow;
events.barColor = '#3b5e34';
events.backgroundColor = '#fff';
events.barImage = '/images/navBar.png';

var tabbedBar = Ti.UI.iOS.createTabbedBar({
	labels:['Friends', 'Top Events'],
	backgroundColor:'#3b5e34',
	style:Titanium.UI.iPhone.SystemButtonStyle.BAR

});

events.setTitleControl(tabbedBar);


var friendsFeed = Ti.UI.createTableView({
	top:0,
	height:'100%',
	width:'100%',
	id: 0
});

events.add(friendsFeed);

var topEventsFeed = Ti.UI.createTableView({
	top:0,
	height:'100%',
	width:'100%',
	id:1
});

events.add(topEventsFeed);

tabbedBar.addEventListener('click', function(e)
{
    switch(e.index)
    {
        case 0:
            events.animate({view:topEventsFeed, transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
            break;
 
        case 1:
            events.animate({view:friendsFeed, transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
            break;
    }
});
