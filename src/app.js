import React from 'react';

import Board from './components/board';

/**
 * The main Battleship application component
 *
 * @class
 * @extends {React.Component}
 */
class App extends React.Component {
  state = {};

  render = () => <div>
    <h1>BattleshipJS</h1>
    <Board opponent={true} />
    <Board opponent={false} />
  </div>;
}

export default App;
