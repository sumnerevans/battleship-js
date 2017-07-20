/* global Battleship */
// Define the Battleship JS application
s.app('Battleship', {
    files: [
        'battleship/ui/PlaceShipsPanel',
        'battleship/ui/Welcome'
    ],

    onReady: function() {
        s.delay(function() {
            Battleship.ui.Welcome.load();
        }, 600);
    },
});
