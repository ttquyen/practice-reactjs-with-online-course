import React, { Component } from "react";

//column: array
//sortColum: object
//onSort: function
class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.order = "asc";
      sortColumn.path = path;
    }
    this.props.onSort(sortColumn);
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((c) => (
            <th key={c.path || c.key} onClick={() => this.raiseSort(c.path)}>
              {c.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
