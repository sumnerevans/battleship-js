<?php
    # authenticate.php
    # Logs the user in

    switch ($_POST['action'].strtolower()) {
        case 'login':
            Authenticate.LogIn();
            break;

        default:
            # code...
            break;
    }

    class Authenticate {
        function LogIn() {
            $userId = $_POST['userId'];

            if ($userId = 'sumner') {
                echo "ok";
            } else {
                throw "Unauthorized to view BattleshipJS";
            }
        }
    }
?>
