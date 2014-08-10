s.define('s.ui.component', {
    stype: 'component',

    loading: false,
    masked: false,

    load: function () {
        this.items.each(function (item) {
            s.create(item.stype, item);
        });
    },

    draw: function () {
        var div = document.createElement('div'),
            divId = s.ui.getNextElNum();

        div.id = divId;
    },

    /* @desc sets loading on a dom element
    * @param {bool} val - determines whether to add or remove loading indicator
    */
    setLoading: function (val, config) {
        if (this.loading === val) { return; }

        config = config || {};

        this.loading = val;
        this.setMask(val, this);

        if (val) { // Set loading
            var div = document.createElement('div'),
                divId = s.ui.getNextElNum(),
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

            this.appendChild(div);

            function loadDots() {
                var loadingText = $('#{0}'.format(divId.toString())).find('span')[0],
                    numberOfDots = 0,
                    interval = setInterval(function () {
                        if (this.loading === true) {
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

            if (config.loadDots !== false) { loadDots(); }
        } else { // Remove loading
            this.children.each(function (child) {
                if (child.className.contains('loading-indicator')) {
                    this.removeChild(child);
                }
            });
        }
    },

    /* @desc sets mask on a dom element
    * @param {bool} val - determines whether to add or remove mask
    */
    setMask: function (val) {
        if (this.masked === val) { return; }

        this.masked = val;
        if (val) { // Set mask
            var div = document.createElement('div');
            div.className += ' mask';
            this.style += ' masked';
            this.appendChild(div);
        } else { // Remove mask
            this.children.each(function (child) {
                if (child.className.contains('mask')) {
                    this.removeChild(child);
                    return false;
                }
            });
        }
    }
});