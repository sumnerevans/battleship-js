s.define('s.ui.MessageBox', {
    show: function(title, message, callback) {
        var msgWindow = s.ui.Window.newWindow(title, message);
        console.log(msgWindow);
    }
});

s.Msg = s.Msg || {};

$.extend(s.Msg, s.ui.MessageBox);
