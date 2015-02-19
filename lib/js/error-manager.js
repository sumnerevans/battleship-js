s.define('s.ErrorManager', {
    /**
     * @desc Shows an exception with a specified message.
     * @param {string} message - the error message.
     */
    showException: function(message) {
        var error = s.Error.newError(message);
        this.logException(error);

        this.__displayErrorDialog(error);
    },

    /**
     * @desc Logs an exception.
     * @param {object} ex - the STJS exception to display.
     */
    logException: function(ex) {
        s.Log(ex.Message);
    },

    /**
     * @private
     * @desc Shows an error dialog.
     * @param {object} exception - the STJS exception object to display.
     */
    __displayErrorDialog: function(ex) {
        s.Msg.show('Error', ex.Message);
    }
});
