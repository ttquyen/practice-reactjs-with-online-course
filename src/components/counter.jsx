import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        {/* pass another props outside from mother component */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} //raise that Delete btn is clicked to onDelete function of props
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge ";
    classes +=
      this.props.counter.value === 0 ? "bg-warning text-dark" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
