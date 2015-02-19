s.define('s.ui.layout.Center', {
    extend: 'layout',

    init: function (divToLayOut) {
        divToLayOut.addCls('center-contents');
        var childrenContainer = document.createElement('div');
        childrenContainer.id = s.ui.getNextElNum();
        childrenContainer.addCls('child-container');
        divToLayOut.appendChild(childrenContainer);

        return childrenContainer;
    }
});
