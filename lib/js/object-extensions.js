/* Strings */
if (!String.prototype.format) {
    /**
     * @desc Add .format() function to Strings
     * @usage '{0} is amazing'.format('STJS'); -> 'STJS is amazing'.
     * @return {string} s - the formatted string
     */
    String.prototype.format = function () {
        var str = this;
        for (var i = 0; i < arguments.length; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            str = str.replace(reg, arguments[i]);
        }
        return str;
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

if (!String.prototype.toSentenceCase) {
    /**
     * @desc Converts a string to sentence case (capitalizes the first letter)
     * @return {string} convertedStr - the string with the first letter capitalized.
     */
    String.prototype.toSentenceCase = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };
}

/* Objects */
if (!Object.prototype.each) {
    /**
     * @desc Itterates each element of an array or NodeList
     * @param {function} fn - function to run on each of the items
     *   @args [item, index, this]
     * @param {object} [scope = window] - the scope for the function
     */
    Object.prototype.each = function (fn, scope) {
        // If this is an array or a NodeList, iterate through each item and perform the function on it.
        if (this instanceof Array ||
            this instanceof NodeList ||
            (typeof this.length === 'number' && typeof this.item !== 'undefined' &&
                typeof this.nextNode === 'function' && typeof this.reset === 'function'
            )) {
            // Set scope of the function to the specified scope or, if not present, set to window
            for (var i = 0; i < this.length; i++) {
                if (fn.apply(scope || window, [this[i], i, this]) === false) {
                    break;
                }
            }
            return;
        }

        // If this is an object
        for (var index in this) {
            if (this.hasOwnProperty(index) && fn.apply(scope || window, [index, this[index], this]) === false) {
                break;
            }
        }
    };
}

if (!Object.prototype.merge) {
    /**
     * @desc Merges two JavaScript objects.
     * @param {object} objToExtend - the object to merge into the current object.
     * @param {bool} [override = true] - determines whether the objToExtend will
     *                                   override the current object.
     */
    Object.prototype.merge = function (objToExtend, override) {
        objToExtend.each(function (key, val) {
            this[key] = override ? val : (this[key] || val);
        }, this);
    };
}

/* HTML Element Nodes */
if (!Node.prototype.addCls) {
    /**
     * @desc Adds a class to a Node.
     * @param {string} cls - the class to add to the Node.
     */
    Node.prototype.addCls = function (cls) {
        this.classList.toggle(cls, true);
    };
}

if (!Node.prototype.removeCls) {
    /**
     * @desc Removes a class from a Node.
     * @param {string} cls - the class to remove from the Node.
     */
    Node.prototype.removeCls = function (cls) {
        this.classList.toggle(cls, false);
    };
}

if (!Node.prototype.removeAll) {
    /**
     * @desc Removes all of the content of a Node.
     */
    Node.prototype.removeAll = function () {
        this.innerHTML = '';
    };
}

if (!Node.prototype.on) {
    /**
     * @desc Adds an event listener to the Node.
     * @param {string} event - the event to handle.
     * @param {function} handler - the function to bind to the event.
     * @param {object} [scope = window] - the scope to apply to the handler.
     */
    Node.prototype.on = function (event, handler, scope) {
        this.addEventListener(event, function () {
            handler.apply(scope || window, arguments);
        });
    };
}

if (!Node.prototype.down) {
    /**
     * @desc Finds the child element with the given query string.
     * @param {string} queryString - the string to use as the query
     */
    Node.prototype.down = function () {

    }
}