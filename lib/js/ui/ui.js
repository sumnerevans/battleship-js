s.UI = {
    /* @desc sets loading on a dom element
    * @param {bool} val - determines whether to add or remove loading indicator
    * @param {dom object} el - element to set loading on
    */
    setLoading: function (val, el, config) {
        if (el.loading === val) { return; }

        if (!config) { config = {}; }

        el.loading = val;
        s.UI.setMask(val, el);

        if (val) { // Set loading
            var div = document.createElement('div'),
                divId = this.getNextElNum(),
                img = document.createElement('img'),
                span = document.createElement('span');

            div.className += config.cls || ' loading-indicator';
            div.id = divId;
            img.src = config.imgSrc || 'lib/images/loading-indicator.gif';
            img.width = config.imgWidth || 16;
            img.height = config.imgHeight || 16;
            img.alt = config.alt || 'Loading';
            span.innerHTML = config.loadText || 'Loading';
            div.appendChild(img);
            div.appendChild(span);

            el.appendChild(div);

            function loadDots() {
                var loadingText = $('#{0}'.format(divId.toString())).find('span')[0],
                    numberOfDots = 0,
                    interval = setInterval(function () {
                        if (el.loading === true) {
                            var text = config.loadText || "Loading";
                            for (var i = 0; i < numberOfDots; i++) {
                                text += ".";
                            }
                            loadingText.innerHTML = text;
                            numberOfDots = numberOfDots == 3 ? 0 : numberOfDots += 1;
                        } else {
                            clearInterval(interval);
                        }
                    }, 1000);
            };

            if (config.useLoadDots !== false) { loadDots(); }
        } else { // Remove loading
            el.children.each(function (child) {
                if (child.className.contains('loading-indicator')) {
                    el.removeChild(child);
                }
            });
        }
    },

    /* @desc sets mask on a dom element
    * @param {bool} val - determines whether to add or remove mask
    * @param {dom object} el - element to set mask on
    */
    setMask: function (val, el) {
        if (el.masked === val) { return; }

        el.masked = val;
        if (val) { // Set mask
            var div = document.createElement('div');
            div.className += ' mask';
            el.style += ' masked';
            el.appendChild(div);
        } else { // Remove mask
            el.children.each(function (child) {
                if (child.className.contains('mask')) {
                    el.removeChild(child);
                    return false;
                }
            });
        }
    },

    /* Get Next Element Number */
    _nextElNum: 0,
    getNextElNum: function () {
        var next = this._nextElNum;
        this._nextElNum++;
        return next;
    }
};