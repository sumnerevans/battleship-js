s.define('s.ui', {
    __nextElNum: 0,
    /**
     * @desc Gets the next element number.
     * @return {number} next - the next element number.
     */
    getNextElNum: function () {
        var next = this.__nextElNum;
        this.__nextElNum++;
        return next;
    }
});
