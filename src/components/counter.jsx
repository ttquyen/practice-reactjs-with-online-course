import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value, //rename variable "value" to make code cleaner and more maintainable
    tags: ["tag1", "tag2"],
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags.</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
    console.log("Increment Clicked", this, this.state.value);
    this.formatCount();
  };
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        {/* pass another props outside from mother component */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge ";
    classes += this.state.value === 0 ? "bg-warning text-dark" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
