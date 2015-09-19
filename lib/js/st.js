/*
 * ST.js
 * @version 0.0.0.3
 */

// Define the STJS global object
var s = {};

// Load all of the other STJS files
(function () {
    var files = [
        'jquery-2.1.1',
        'object-extensions',
        'core',
        'class-manager',
        'error',
        'error-manager',
        'util',
        'timing',

        // ui
        'ui/ui',
        'ui/component',
        'ui/button',
        'ui/page',
        'ui/panel',
        'ui/text',
        'ui/message-box',
        'ui/window',

        // ui/layout
        'ui/layout/layout',
        'ui/layout/center',
        'ui/layout/column'
    ];

    for (var i = 0; i < files.length; i++) {
        document.write('<script src="lib/js/' + files[i] + '.js"></script>');
    }
})();