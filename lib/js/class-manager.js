s.define('s.ClassManager', {
    stypes: [],

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

    __extend: function (stypeToExtend, cls) {
        var objPath = this.lookupStype(stypeToExtend);
        if (!objPath) {
            throw 'stype of {0} not defined'.format(stypeToExtend); ;
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

        objToExtend.each(function (objName, value) {
            cls[objName] = cls[objName] || value;
        });

		cls.prototype = objToExtend;
    }
});
