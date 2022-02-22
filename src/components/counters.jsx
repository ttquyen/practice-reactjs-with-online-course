import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => counterID !== c.id);
    this.setState({ counters }); //re-set State to let React update the state, obj need {}
    console.log("Event Handler Called");
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            onDelete={this.handleDelete} //receive onDetele function and execute by handleDelete function
            key={counter.id} //internally used by react (must)
            //id={counter.id} externally, used by dev, read bt props.id
            //value={counter.value}
            counter={counter} //to get all attribute in counter forever, if we modify (add, del) atb, it will sync.
          >
            <h2>Number {counter.id}</h2>
          </Counter>
          //indentical id when using map(),
          //get values from array and pass value to component Counter
        ))}
      </div>
    );
  }
}

export default Counters;
