/* DISCLAIMER: THIS FILE IS DISTRIBUTED WITHOUT WARANTY OF ANY KIND EXPRESS OR IMPLIED. ANY DAMAGE TO ANYTHING OR ANYONE
* IS NOT THE FAULT OF SUMMATION TECH, INC. OR ANY OF THE EMPLOYEES THEREOF.
*
* ========== ABOUT THIS FILE ==========
* File Name: loader.js
* Author: Sumner Evans
* Company: SummationTech, Inc.
* Website: www.summationtech.com
* Last Modified: 01-26-2014 20:02 MST (Mountain Standard Time)
*
* ==== PURPOSE ====
* This file loads all of your JavaScript and CSS files in the head of your HTML file.
*
* ==== USAGE ====
* Where ever you would like the JavaScript and CSS files to be written, place this HTML:
*      <script type="text/javascript" src="path-to-this-file"></script>
* To configure which JS files are loaded, use the scriptPaths array. To configure what CSS files are loaded, use the
* stylePaths array. A few examples have been pre-configured already.
*
* ==== LICENSE ====
* This file is free and open source. You may modify, distribute, sell (though someone could just come to me and get the
* source code directly), use, etc. this file in any way you want. If you wish to redistribute this file, this header
* must stay in tact in your distribution. (You may add another header, but this one may not be omitted from your own
* distribution.
*
* ==== MISC ====
* If this file is helpful to you, please, tell your friends. Or donate at
* www.summationtech.com/donate/loader Also, check out some of the other products that SummationTech makes at
* www.summationtech.com/products
*/

// Declare a global variable called Loader. This variable holds the configuration and the load
// function.
var Loader = {
    /* ********** CONFIGURATION ********** */
    // The scriptPaths variable is an array of strings that are the paths to your JavaScript files
    scriptPaths: ['Battleship/battleship.js', 'Battleship/Business/business.js', 'Battleship/UI/ui.js'],

    // The stylePaths variable is an array of strings that are the paths to your CSS files. At
    // the end of the function, these files are added in order. If you do not specify a media
    // property, it will default to "all".
    stylePaths: [{
        path: 'css/global.css'
    }, {
        path: 'css/ipad-landscape.css',
        media: 'all and (orientation:landscape)'
    }, {
        path: 'css/ipad-portrait.css',
        media: 'all and (orientation:portrait)'
    }],

    load: function () {
        var i;
        /* ********** JavaScript ********** */
        for ( i = 0; i < scriptPaths.length; i += 1) {
            document.writeln('<script type="text/javascript" src="' + scriptPaths[i] + '"></script>');
        }

        /* ********** CSS ********** */
        for ( i = 0; i < stylePaths.length; i += 1) {
            document.writeln('<link rel="stylesheet" href="' + stylePaths[i].path + '" media="' + (stylePaths[i].media || 'all') + '">');
        }
    }
};

// Invoke load
Loader.load();
