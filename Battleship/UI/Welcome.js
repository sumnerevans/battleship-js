s.define('Battleship.ui.Welcome', {
    extend: 'page',
    stype: 'welcomepage',

    title: 'Welcome',

    layout: {
        type: 'center'
    },

    defaults: {
        stype: 'text'
    },

    items: [{
        text: 'Welcome to Battleship JS',
        style: {
            fontSize: 40
        }
    }, {
        text: 'Please select a mode',
        style: {
            marginTop: 20
        }
    }, {
        stype: 'panel',
        layout: {
            type: 'column'
        },
        items: [{
            stype: 'button',
            text: 'Play against another person.',
            listeners: {
                click: function() {
                    // Show the setup
                    console.log(this);
                }
            }
        }, {
            stype: 'button',
            text: 'Play against the computer.',
            listeners: {
                click: function() {
                    // Show the setup
                    console.log(this);
                }
            }
        }]
    }, {
        stype: 'panel',
        hidden: true,
        items: [{
            stype: 'text',
            text: 'Play against another person'
        }]
    }, {
        stype: 'panel',
        hidden: true,
        items: [{
            stype: 'text',
            text: 'Play against the computer'
        }]
    }]
});
