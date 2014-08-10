s.define('s.ui', {
    /* Get Next Element Number */
    __nextElNum: 0,
    getNextElNum: function () {
        var next = this.__nextElNum;
        this.__nextElNum++;
        return next;
    }
});