import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div className="row">
        {this.props.children}
        {/* pass another props outside from mother component */}
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? true : false}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)} //raise that Delete btn is clicked to onDelete function of props
            className="btn btn-danger btn-sm "
          >
            Delete
          </button>
          {/* {this.renderTags()} */}
        </div>
      </div>
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
