s.define('s.ui.layout.Center', {
    extend: 'layout',

    init: function (divToLayOut) {
        var childrenContainer = document.createElement('div');
        childrenContainer.id = s.ui.getNextElNum();
        childrenContainer.addCls('child-container');

        divToLayOut.addCls('center-contents');
        divToLayOut.appendChild(childrenContainer);

        return childrenContainer;
    },

    setChildContainerHeight: function (childrenContainer, height) {

    }
});
