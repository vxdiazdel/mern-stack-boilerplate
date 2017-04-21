import React from 'react';

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <h1>App</h1>
        { this.props.children }
      </div>
    );
  }
}

export default App;
