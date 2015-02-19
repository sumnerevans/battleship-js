s.define('s.ui.Window', {
    extend: 'panel',
    /* Variables */
    canClose: true,
    canMove: true,

    width: 400,
    height: 300,

    /**
     * @desc Creates an new window.
     * @param {string} title - the window title.
     * @param {object} content - the content of the window.
     * @return {object} win - the created object.
     */
    newWindow: function(title, content) {
        return this;
    }
});
