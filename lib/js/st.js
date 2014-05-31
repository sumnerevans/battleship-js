/* 
* ST.js
* @version 0.0.0.3
*/

// STJS global object
var s = {};

// Load all of the other STJS files
(function () {
    document.write('<script src="lib/js/jquery-2.1.1"></script>');
    document.write('<script src="lib/js/core.js"></script>');
    document.write('<script src="lib/js/util.js"></script>');

    // UI
    document.write('<script src="lib/js/ui/ui.js"></script>');
})();