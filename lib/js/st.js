/* 
* ST.js
* @version 0.0.0.3
*/

// STJS global object
var s = {};

// Load all of the other STJS files
(function () {
    var files = [
        'lib/js/jquery-2.1.1',
        'lib/js/core',
        'lib/js/class-manager',
        'lib/js/util',

        // UI
        'lib/js/ui/ui',
        'lib/js/ui/component',
        'lib/js/ui/page',
        'lib/js/ui/panel',
        'lib/js/ui/text'
        ];

    for (var i = 0; i < files.length; i++) {
        document.write('<script src="' + files[i] + '.js"></script>');
    }
})();