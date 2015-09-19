s.define('s.Error', {
    /**
     * @private
     * @constructor
     * @desc Creates a new error.
     * @param {string} message - the error message.
     * @param {object} callStack - call stack of the error.
     * @return {object} error - the created error.
     */
    __error: function (message, callStack) {
        this.Message = message;
        this.CallStack = callStack;
    },

    /**
     * @desc Creates a new error with a specified message.
     * @param {string} message - the error message.
     * @return {object} error - the created error.
     */
    newError: function (message) {
        var e = new Error(message);
        var stack = e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
            .split('\n');

        return new this.__error(message, stack);
    }
});