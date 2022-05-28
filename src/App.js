import React from 'react';

// App class는 React.Component를 상속 받는다.
class App extends React.Component {
  // React.Component 클래스의 기능을 추가한 App 클래스
  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    ); 
  }
}

export default App;