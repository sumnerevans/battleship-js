s.define('s.ui.Button', {
    extend: 'component',
    stype: 'button',

    text: '',
    style: {
        border: '1px solid black',
        padding: '5px'
    },

    draw: function draw() {
        this.callParent();
        this.div.innerHTML = this.text;
        return this.div;
    }
});
