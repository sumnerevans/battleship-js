// Define the Battleship JS application
s.app('bj', {
    files: [
        'battleship/ui/PlaceShipsPanel',
        'battleship/ui/Welcome'
    ],

    onReady: function() {
        bj.ui.Welcome.load();
    }
});
