import React, {Component} from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="card text-center p-4 shadow">
        <h3 className="mb-3">Class Component</h3>
        <h1 className="display-4 mb-4">{this.state.count}</h1>
        <div>
          <button
            className="btn btn-danger mx-2"
            onClick={this.decrement}
          >
            -
          </button>
          <button
            className="btn btn-success mx-2"
            onClick={this.increment}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;