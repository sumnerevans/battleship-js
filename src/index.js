import ReactDOM from 'react-dom';
import React from 'react';

/**
 * Main application
 *
 * @class
 * @extends {Component}
 */
class App extends React.Component {
  render = () => <h1>Test</h1>;
}

ReactDOM.render(<App />, document.getElementById('app'));
