s.define('s.ClassManager', {
    stypes: [],

    /**
     * @desc Initializes a class.
     * @param {string} cls - the class to initialize
     * @param {object} path - the path of the object.
     */
    initClass: function (cls, path) {
        if (cls.stype) {
            this.stypes.push({
                stype: cls.stype,
                objPath: path
            });
        }

        if (cls.extend) {
            this.__extend(cls.extend, cls);
        }
    },

    /**
     * @desc Finds an stype.
     * @param {string} stypeName - the stype to find.
     * @return {string} objPath - the path of the stype.
     */
    lookupStype: function (stypeName) {
        var objPath;
        this.stypes.each(function (stype) {
            if (stype.stype === stypeName) {
                objPath = stype.objPath;
                return false;
            }
        });
        return objPath;
    },

    /**
     * @private
     * @desc Extends a class with a specified stype.
     * @param {string} stype - the stype to extend.
     * @param {object} cls - the object to extend.
     * @return {object} cls - the extended object.
     */
    __extend: function (stypeToExtend, cls) {
        var objPath = this.lookupStype(stypeToExtend);
        if (!objPath) {
            throw 'stype of {0} not defined'.format(stypeToExtend);
        }

        var prevObj,
            objToExtend;

        objPath.split('.').each(function (objName, index, array) {
            if (!prevObj) {
                prevObj = window[objName];
            } else if (index === array.length - 1) {
                objToExtend = prevObj[objName];
            } else {
                prevObj = prevObj[objName];
            }
        });

        cls.__proto__ = objToExtend;

        return cls;
    }
});