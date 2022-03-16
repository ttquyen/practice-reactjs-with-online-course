import Joi from "joi-browser";
import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}, //(key, value)=(name of target field, error message)
  };
  schema = {
    username: Joi.string().required().label("Username"), //label to display friendly name on warning
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false }; // avoid aborting when see the 1st error
    const { error } = Joi.validate(this.state.account, this.schema, options);
    // console.log(error);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault(); //very important
    //Not interact directly with document element=> give it a reference
    const errors = this.validate();
    this.setState({ errors: errors || {} }); //if errors is truthy, set {errors}, else if {}
    if (errors) return;
    //call server
    console.log("Submitted");
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            errors={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            errors={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary m-2">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;