/* Objects */
/**
 * @desc Merges two JavaScript objects.
 * @param {object} objToExtend - the object to merge into the current object.
 * @param {bool} [override = true] - determines whether the objToExtend will
 *                                   override the current object.
 */
s.merge = function (obj, objToExtend, override) {
    s.each(objToExtend, function (key, val) {
        obj[key] = override ? val : (obj[key] || val);
    }, obj);
};

/**
 * @desc Itterates each element of an array or NodeList.
 * @param {function} fn - function to run on each of the items.
 *   @args [item, index, this].
 * @param {object} [scope = window] - the scope for the function.
 */
s.each = function (obj, fn, scope) {
    // If this is an array or a NodeList, iterate through each item and perform the function on it.
    if (obj instanceof Array ||
        obj instanceof NodeList ||
        (typeof obj.length === 'number' && typeof obj.item !== 'undefined' &&
            typeof obj.nextNode === 'function' && typeof obj.reset === 'function'
        )) {
        // Set scope of the function to the specified scope or, if not present, set to window
        for (var i = 0; i < obj.length; i++) {
            if (fn.apply(scope || window, [obj[i], i, obj]) === false) {
                break;
            }
        }
        return;
    }

    // If this is an object, itterate through the object's properties
    for (var index in obj) {
        if (obj.hasOwnProperty(index) && fn.apply(scope || window, [index, obj[index], obj]) === false) {
            break;
        }
    }
};

/**
 * @desc Extends a specified object with a specified function.
 * @param {string} objType - the name of the object to extend.
 * @param {string} functionName - name of the function to extend the object with.
 * @param {string} fn - the function to extend the object with.
 */
// Add global object extesnsion method
s.__addObjExtension = function (objType, functionName, fn) {
    if (!window[objType].prototype[functionName]) {
        window[objType].prototype[functionName] = fn;
    }
};

/* Strings */
/**
 * @desc Add .format() function to Strings
 * @usage '{0} is amazing'.format('STJS'); -> 'STJS is amazing'.
 * @return {string} s - the formatted string.
 */
s.__addObjExtension('String', 'format', function () {
    var str = this;
    for (var i = 0; i < arguments.length; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        str = str.replace(reg, arguments[i]);
    }
    return str;
});

/**
 * @desc Determines whether a string contains the specified string.
 * @return {bool} contains - true if contains the test string.
 */
s.__addObjExtension('String', 'contains', function () {
    return String.prototype.indexOf.apply(this, arguments) !== -1;
});

/**
 * @desc Converts a string to sentence case (capitalizes the first letter).
 * @return {string} convertedStr - the string with the first letter capitalized.
 */
s.__addObjExtension('String', 'toSentenceCase', function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
});

/* HTML Element Nodes */
/**
 * @desc Adds a class to a Node.
 * @param {string} cls - the class to add to the Node.
 */
s.__addObjExtension('Node', 'addCls', function (cls) {
    this.classList.toggle(cls, true);
});

/**
 * @desc Removes a class from a Node.
 * @param {string} cls - the class to remove from the Node.
 */
s.__addObjExtension('Node', 'removeCls', function (cls) {
    this.classList.toggle(cls, false);
});

/**
 * @desc Removes all of the content of a Node.
 */
s.__addObjExtension('Node', 'removeAll', function () {
    this.innerHTML = '';
});

/**
 * @desc Adds an event listener to the Node.
 * @param {string} event - the event to handle.
 * @param {function} handler - the function to bind to the event.
 * @param {object} [scope = window] - the scope to apply to the handler.
 */
s.__addObjExtension('Node', 'on', function (event, handler, scope) {
    this.addEventListener(event, function () {
        handler.apply(scope || window, arguments);
    });
});

/**
 * @desc Finds the child element with the given query string.
 * @param {string} queryString - the string to use as the query.
 * @param {DomElement} el - the element that was found by the query string.
 */
s.__addObjExtension('Node', 'down', function (queryString) {
    var el = $('#{0}'.format(this.id) || 'body').find(queryString);
    return el;
});