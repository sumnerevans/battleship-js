/* global s */
/**
 * @desc Defines a STJS object.
 * @param {string} namespace - the namespace of the object. (i.e. 'MyApp.ui.Page' or 's.ui.layout.Center')
 * @param {object} config - the object configuration to apply.
 */
s.define = function (namespace, config) {
    var namespacePath = namespace.split('.'),
        namespacePathLength = namespacePath.length,
        prevObj,
        realObj;

    s.each(namespacePath, function (objName, index, array) {
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

/**
 * @desc Creates a STJS application.
 * @param {string} appName - the name of the app.
 * @param {object} config - the app configuration to apply.
 */
s.app = function (appName, config) {
    window[appName] = {};
    if (config.files) {
        s.each(config.files, function (fileName) {
            document.write('<script type="text/javascript" src="{0}.js"></script>'.format(fileName));
        });
    }

    $(document).ready(config.onReady);
};

/**
 * @desc Creates an STJS object.
 * @param {string} stype - the stype of the object to create.
 * @param {object} config - the object configuration to apply.
 * @return {object} obj - the created object.
 */
s.create = function (stype, config) {
    return s.ClassManager.__extend(stype, config);
};

/**
 * @desc An empty function.
 */
s.emptyFn = function () {};

/**
 * @desc Logs a message to the console if the console exists.
 * @param {object} val - the value to log to the console.
 */
s.Log = function (val) {
    if (window.console && console.log) {
        console.log(val);
    }
};

/**
 * @desc Gets the HTML <body> element
 * @return {dom object} body element
 */
s.getBody = function () {
    return $(document.body)[0];
};
