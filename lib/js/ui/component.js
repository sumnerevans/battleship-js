s.define('s.ui.Component', {
    stype: 'component',

    loading: false,
    masked: false,
    hidden: false,

    div: {},
    childrenContainer: {},

    items: [],
    style: {},
    layout: {},
    defaults: {},
    listeners: {},

    load: function () {
        s.each(this.items, function (item, index, items) {
            s.merge(item, this.defaults, false);
            items[index] = s.create(item.stype, item);
        }, this);

        return this.draw();
    },

    bindEventListeners: function () {
        this.listeners.scope = this.listeners.scope || window;
        s.each(this.listeners, function (event, handler) {
            if (event === 'scope') {
                return;
            }
            this.div.on(event, handler, this.listeners.scope);
        }, this);
    },

    draw: function () {
        this.div = this.createDiv();

        this.bindEventListeners();
        this.setHidden(this.hidden);

        if (this.parentDiv) {
            this.parentDiv.appendChild(this.div);
        } else {
            s.getBody().appendChild(this.div);
        }

        this.applyLayout();
        this.applyStyles();

        s.each(this.items, function (item) {
            item.parentDiv = this.div;
            this.childrenContainer.appendChild(item.load());
        }, this);

        return this.div;
    },

    createDiv: function () {
        var div = document.createElement('div');
        div.id = s.ui.getNextElNum();
        return div;
    },

    applyStyles: function () {
        s.each(this.style, function (styleName, value) {
            switch (typeof value) {
            case 'string':
                val = value;
                break;
            case 'number':
                val = '{0}px'.format(value);
                break;
            case 'function':
                val = value();
                break;
            }
            this.div.style[styleName] = val || this.div.style[styleName];
        }, this);
    },

    applyLayout: function () {
        // Default to layout.Layout
        this.layout.type = (this.layout && this.layout.type) ? this.layout.type.toSentenceCase() : 'Layout';
        this.childrenContainer = s.ui.layout[this.layout.type].init(this.div);
    },

    /* @desc Sets loading on a dom element
     * @param {bool} val - determines whether to add or remove loading indicator
     */
    setLoading: function (val, config) {
        if (this.loading === val) {
            return;
        }

        config = config || {};

        this.loading = val;
        this.setMask(val);

        if (val) { // Set loading
            var loadDiv = document.createElement('div'),
                divId = s.ui.getNextElNum(),
                img = document.createElement('img'),
                span = document.createElement('span');

            loadDiv.className += config.cls || ' loading-indicator';
            loadDiv.id = divId;
            img.src = config.imgSrc || 'lib/images/loading-indicator.gif';
            img.width = config.imgWidth || 16;
            img.height = config.imgHeight || 16;
            img.alt = config.alt || 'Loading';
            span.innerHTML = config.loadText || 'Loading';
            loadDiv.appendChild(img);
            loadDiv.appendChild(span);

            this.div.appendChild(loadDiv);

            if (config.loadDots !== false) {
                this.__loadDots(divId);
            }
        } else { // Remove loading
            s.each(this.div.childNodes, function (child) {
                if (child.className.contains('loading-indicator')) {
                    this.div.removeChild(child);
                }
            }, this);
        }
    },

    /* @private
     * @desc Increments the number of dots (.) in the loading indicator
     */
    __loadDots: function (divId) {
        var loadingText = $('#{0}'.format(divId.toString())).find('span')[0],
            numberOfDots = 0,
            interval = s.repeat(function () {
                if (this.loading === true) {
                    var text = config.loadText || "Loading";
                    for (var i = 0; i < numberOfDots; i++) {
                        text += ".";
                    }
                    loadingText.innerHTML = text;
                    numberOfDots = numberOfDots == 3 ? 0 : numberOfDots += 1;
                } else {
                    return false;
                }
            }, 1000, this);
    },

    /* @desc Sets mask on a dom element
     * @param {bool} val - determines whether to add or remove mask
     */
    setMask: function (val) {
        if (this.masked === val) {
            return;
        }

        this.masked = val;
        if (val) { // Set mask
            var mask = document.createElement('div');
            mask.addCls('mask');
            this.div.addCls('masked');
            this.div.appendChild(mask);
        } else { // Remove mask
            s.each(this.div.childNodes, function (child) {
                if (child.className.contains('mask')) {
                    this.div.removeChild(child);
                    this.div.removeCls('masked');
                    this.masked = false;
                    return false;
                }
            }, this);
        }
    },

    setHidden: function (hide) {
        if (hide) {
            this.div.addCls('hidden');
        } else {
            this.div.removeCls('hidden');
        }
    },

    callParent: function () {
        // Call the function on the parent object.
        this.__proto__.__proto__[arguments.callee.caller.name].apply(this);
    }
});
