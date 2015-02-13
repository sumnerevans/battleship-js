s.define = function(namespace, config) {
    var namespacePath = namespace.split('.'),
        namespacePathLength = namespacePath.length,
        prevObj,
        realObj;

    namespacePath.each(function(objName, index, array) {
        if (!prevObj) {
            window[objName] = window[objName] || {};
            prevObj = window[objName];
        } else if (index === array.length - 1) {
            prevObj[objName] = config;
            realObj = prevObj[objName];
        } else {
            prevObj[objName] = prevObj[objName] || {};
            prevObj = prevObj[objName];
        }
    });

    s.ClassManager.initClass(realObj, namespace);
};

s.app = function(appName, config) {
    window[appName] = {};
    if (config.files) {
        config.files.each(function(fileName) {
            document.write('<script type="text/javascript" src="{0}.js"></script>'.format(fileName));
        });
    }

    $(document).ready(config.onReady);
};

s.create = function(stype, config) {
    s.ClassManager.__extend(stype, config);
};

s.emptyFn = function() {};

s.Log = function(val) {
    if (window.console && console.log) {
        console.log(val);
    }
};

/**
 * @desc Gets the HTML <body> element
 * @return {dom object} body element
 */
s.getBody = function() {
    return $(document.body)[0];
};

s.body = {
    removeAll: function() {
        s.getBody().innerHTML = '';
    }
};

/* ********** OBJECT EXTENSIONS ********** */

/* Strings */
if (!String.prototype.format) {
    /**
     * @desc Add .format() function to Strings
     * @return {string} s - the formatted string
     */
    String.prototype.format = function() {
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
    String.prototype.contains = function() {
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}

/* Objects */
if (!Object.prototype.each) {
    /**
     * @desc Itterates each element of an array or NodeList
     * @param {function} fn - function to run on each of the items
     * @param {object} scope - the scope for the function
     */
    Object.prototype.each = function(fn, scope) {
        // If this is an array or a NodeList, iterate through each item and perform the function on it.
        if (this instanceof Array || this instanceof NodeList || (typeof this.length === 'number' && typeof this.item !== 'undefined' && typeof this.nextNode === 'function' && typeof this.reset === 'function')) {
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
