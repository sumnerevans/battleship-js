s.define('s.Timing', {
    /**
     * @desc Delays the execution of a specified function by a specified delay.
     * @param {function} callback (required) - the function to delay.
     * @param {number} delay (required)- the number of milliseconds to delay execution.
     * @return {object} scope - the scope to apply to the callback.
     */
    delay: function (callback, delay, scope) {
        if (!callback || !delay) {
            s.ErrorManager.showException(
                'A callback and a delay must be specified for s.Timing.delay.');
            return;
        }

        setTimeout(function () {
            callback.apply(scope || window);
        }, delay);
    },

    /**
     * @desc Repeats the execution of a specified function in a given interval.
     * @param {function} callback (required) - the function to delay.
     * @param {number} delay (required) - the number of milliseconds between.
     * @return {object} scope - the scope to apply to the callback.
     */
    repeat: function (callback, repeatDelay, scope) {
        if (!callback || !repeatDelay) {
            s.ErrorManager.showException('A callback and a repeatDelay must be specified for s.Timing.repeat.');
            return;
        }

        var interval = setInterval(function () {
            if (callback.apply(scope || window) === false) {
                clearInterval(interval);
            }
        }, repeatDelay);
    }
});

$.extend(s, s.Timing);
