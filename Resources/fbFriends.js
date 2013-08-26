var session_id = Ti.App.Properties.getString('session_id');


var datafriend = [];
    var self = Ti.UI.createWindow({
        title : 'Invite Friends',
        backgroundColor : 'white',
        barColor : 'black',
    });
    var btnBack = Ti.UI.createButton({
        title : 'Back',
        style : Titanium.UI.iPhone.SystemButtonStyle
    })
    self.setLeftNavButton(btnBack);
    btnBack.addEventListener('click', function(e) {
        Ti.UI.currentTab.close(self);
    })
    var tableView = Ti.UI.createTableView({
        separatorColor : 'transparent'
    })
    self.add(tableView)
//  var loading = ActivityIndicator.activityIndicator(self);
//  loading.show();
    if (!Titanium.Facebook.loggedIn) {
        Titanium.Facebook.authorize();
 
        Titanium.Facebook.addEventListener('login', function(e) {
            if (e.success) {
                Titanium.Facebook.requestWithGraphPath('me/friends', {}, 'GET', function(e) {
                    var result = JSON.parse(e.result);
                    var data = result.data;
                    for (var x = 0; x < data.length; x++) {
                        var friend = data[x];
                        var row = Ti.UI.createTableViewRow({
                            height : Ti.UI.SIZE
                        });
 
                        var friendImage = Ti.UI.createImageView({
                            width : 50,
                            height : 50,
                            top : 0,
                            left : 0,
                            image : 'https://graph.facebook.com/' + friend.id + '/picture'
                        });
                        row.add(friendImage);
 
                        var friendName = Ti.UI.createLabel({
                            text : friend.name,
                            color : 'black',
                            textAlign : 'left',
                            font : {
                                fontWeight : 'bold',
                                fontSize : 20
                            },
                            width : 'auto',
                            wordWrap : false,
                            top : 15,
                            bottom : 0,
                            left : 10,
                            right : 10,
                            height : 20,
                        });
                        row.add(friendName);
 
                        datafriend.push(row);
                    }
                    tableView.setData(datafriend);
                //  loading.hide();
                });
            } else if (e.error || e.cancelled) {
                return;
            }
        });
    } else {
        Titanium.Facebook.requestWithGraphPath('me/friends', {}, 'GET', function(e) {
            var result = JSON.parse(e.result);
            var data = result.data;
            for (var x = 0; x < data.length; x++) {
                var friend = data[x];
                var row = Ti.UI.createTableViewRow({
                    dtitle : friend.name,
                    hasDetail : false,
                    friendId : friend.id,
                    friendName : friend.name,
                    friendData : friend,
                    height : 'auto',
                    layout : 'horizontal',
                    hasDetail : true,
                    height : 50,
                });
 
                var friendImage = Ti.UI.createImageView({
                    width : 50,
                    height : 50,
                    top : 0,
                    left : 0,
                    image : 'https://graph.facebook.com/' + friend.id + '/picture'
                });
                row.add(friendImage);
 
                var friendName = Ti.UI.createLabel({
                    text : friend.name,
                    color : '#000',
                    textAlign : 'left',
                    font : {
                        fontWeight : 'bold',
                        fontSize : 20
                    },
                    width : 'auto',
                    wordWrap : false,
                    top : 15,
                    bottom : 0,
                    left : 10,
                    right : 10,
                    height : 20,
                });
                row.add(friendName);
 
                datafriend.push(row);
            }
            tableView.setData(datafriend);
//          loading.hide();
        });
    }
 
    self.open();