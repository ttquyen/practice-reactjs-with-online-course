import React, { Component } from "react";
// const Input = ({ type, name, label, value, errors, onChange }) => {
const Input = ({ name, label, errors, ...rest }) => {
  //...rest gets others attribute except name, label, errors
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        // name={name}
        // type={type}
        // value={value}
        // onChange={onChange}
        {...rest}
        name={name} //bc of except name (line 3), this line can get name atb
        id={name}
        className="form-control"
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
