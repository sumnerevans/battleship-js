/*
* STJS.Util Object
* This object contins helpfull utility functions in STJS
*/

s.define('s.Util', {
    /**
    * @desc Gets the copyright text for all SummationTech websites
    * @param {number} startYear - The year that the copyright began
    * @param {bool} newLine - Determines wheter or not to include a new line before "All Rights Reserved"
    * @return {string} of copyright text
    */
    getCopyrightText: function (startYear, newLine) {
        return '&copy; {0}{1} SummationTech.{2}All Rights Reserved.'.format(
            startYear,
            new Date().getFullYear() > startYear ? ' - {0}'.format(new Date().getFullYear()) : '',
            newLine ? '<br>' : ' ');
    },

    /**
    * @desc Preloads supplied images
    * @arguments any combination of strings or arrays with paths to the image files
    */
    preloadImages: function () {
        var imageSrcs = [],
            preloadImages = [];

        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'string') { // A string
                imageSrcs.push(arguments[i]);
            } else if (arguments[i] instanceof Array) { // An array
                for (var j = 0; j < arguments[i].length; j++) {
                    imageSrcs.push(arguments[i][j]);
                }
            }
        }

        for (i = 0; i < imageSrcs.length; i++) {
            preloadImages[i] = new Image();
            preloadImages[i].src = imageSrcs[i];
        }
    }
});
