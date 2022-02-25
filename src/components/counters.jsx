import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onIncrement, onDelete, onDecrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete} //receive onDetele function and execute by handleDelete function
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            key={counter.id} //internally used by react (must)
            counter={counter} //to get all attribute in counter forever, if we modify (add, del) atb, it will sync.
            //id={counter.id} externally, used by dev, read bt props.id
            //value={counter.value}
          ></Counter>
          //indentical id when using map(),
          //get values from array and pass value to component Counter
        ))}
      </div>
    );
  }
}

export default Counters;
