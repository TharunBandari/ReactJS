import logo from 'react';
import './App.css';
import {useState} from 'react';

function App(props) {
/*  var v=Node.JS.Process();
  console.log(process.argv[0]);
  console.log(process.argv[1]);
  console.log(process.argv[2]);
  console.log("You have passed a total of" + process.argv.length + "parameters.");*/
  var username = prompt("Enter your name");
  if (props.name !== username) {
    var today = new Date();
    if (today.getHours() >= Number(props.visitingTime)) {
      return (
        <div className="App">
          <b>Welcome </b> {props.firstName} &nbsp;&nbsp;
          {props.lastName}
          <input type="text" minLength="10" maxLength="20" />
        </div>
      );
    } else {
      return (
        <div className="App">
          <b>Visit After {props.visitingTime} AM in your local time. Maintenance happening</b>
        </div>
      );
    }
  } else {
    return (
      <div className="App">
        <b>Hi {props.name} Your Account is Blocked. Please Contact Admin</b>
      </div>
    );
  }
}

export default App;
