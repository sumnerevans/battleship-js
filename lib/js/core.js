s.emptyFn = function () { };

s.Log = function (val) {
    if (window.console && console.log) {
        console.log(this);
    }
};

/* ********** OVERRIDES ********** */

/* String Overrides */

if (!String.prototype.format) {
    /** 
    * @desc Add .format() function to Strings
    * @return {string} s - the formatted string
    */
    String.prototype.format = function () {
        var s = this;
        for (var i = 0; i < arguments.length; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arguments[i]);
        }
        return s;
    };
}

if (!String.prototype.contains) {
    /** 
    * @desc Determines whether a string contains the specified string
    * @return {bool} contains - true if contains the test string
    */
    String.prototype.contains = function () {
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}

/* Object Overrides */

if (!Object.prototype.each) {
    /**
    * @desc Itterates each element of an array or NodeList
    * @param {function} fn - function to run on each of the items
    * @param {object} scope - the scope for the function
    */
    Object.prototype.each = function (fn, scope) {
        // If this isn't an array or a NodeList, return.
        if (!this instanceof Array || !this instanceof NodeList || (typeof this.length === 'number' && typeof this.item !== 'undefined' && typeof this.nextNode === 'function' && typeof this.reset === 'function')) {
            s.Log('The "each" function is not implemented for {0}'.format(typeof this));
            return;
        }

        // Set scope of the function to the specified scope or, if not present, set to window
        for (var i = 0; i < this.length; i++) {
            if (fn.apply(scope || window, [this[i], i, this]) === false) {
                break;
            }
        }
    };
}