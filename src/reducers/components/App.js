import { Component } from "react";

function App() {
  return <Counter></Counter>;
}
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    console.log("this.state", this.state);
    return (
      <>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handlePlusButton}>-1</button>
      </>
    );
  }
}
export default App;
