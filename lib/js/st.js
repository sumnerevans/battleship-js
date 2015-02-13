/*
 * ST.js
 * @version 0.0.0.3
 */

// STJS global object
var s = {};

// Load all of the other STJS files
(function() {
    var files = [
        'jquery-2.1.1',
        'core',
        'class-manager',
        'util',

        // UI
        'ui/ui',
        'ui/component',
        'ui/page',
        'ui/panel',
        'ui/text'
    ];

    for (var i = 0; i < files.length; i++) {
        document.write('<script src="lib/js/' + files[i] + '.js"></script>');
    }
})();
