s.define('s.ui.Page', {
    extend: 'component',
    stype: 'page',

    title: '',

    load: function load() {
        // Remove all from the items currently in the viewport.
        s.getBody().removeAll();

        document.title = this.title || document.title;
        this.callParent();
    }
});
