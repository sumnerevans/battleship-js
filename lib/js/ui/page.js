s.define('s.ui.page', {
    extend: 'component',
    stype: 'page',

    onLoad: function() {
        // Remove all from the items currently in the viewport.
        s.body.removeAll();
    }
});
