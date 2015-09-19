s.define('s.ui.Text', {
    extend: 'component',
    stype: 'text',

    text: '',
    style: {
        fontSize: 12
    },

    draw: function draw() {
        this.div = this.createDiv();
        this.div.innerHTML = this.text;
        this.applyStyles();

        return this.div;
    }
});