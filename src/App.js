import "./App.css";
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Customers from "./components/customer";
import Rentals from "./components/rental";
import NotFound from "./components/notFound";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" to="/movies" exact />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

// class App extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 4 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 },
//     ],
//   };
//   constructor() {
//     super();
//     console.log("App-Constructor");
//     //this.state = this.props.first;
//   }
//   componentDidMount() {}

//   handleDelete = (counterID) => {
//     const counters = this.state.counters.filter((c) => counterID !== c.id);
//     this.setState({ counters }); //re-set State to let React update the state, obj need {}
//   };
//   handleIncrement = (counter) => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
//     console.log(this.state.counters[index]);
//   };
//   handleDecrement = (counter) => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value--;
//     this.setState({ counters });
//   };
//   handleReset = () => {
//     const counters = this.state.counters.map((c) => {
//       c.value = 0;
//       return c;
//     });
//     this.setState({ counters });
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <NavBar
//           totalCounters={this.state.counters.filter((c) => c.value > 0).length}
//         />
//         <main className="container">
//           <Counters
//             counters={this.state.counters}
//             onIncrement={this.handleIncrement}
//             onDecrement={this.handleDecrement}
//             onDelete={this.handleDelete}
//             onReset={this.handleReset}
//           />
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// export default App;
