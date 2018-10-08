import React, { Component } from "react";
import Quotes from "./Quotes";
import logo from "./logo.svg";
import Lamp from"./Lamp";
import "./App.css";

class App extends Component {
  constructor(props){
       super(props);
       this.state = {working: false};
  }

  handleClick = () => {
  this.setState({ working: !this.state.working });
  };
  render() {
    let Logo = "App-logo";
    if (this.state.working) {
       Logo = "App-logo-rever"; 
    }
    return ( 
      <div className="App">
        <header className="App-header">
          <img src={logo} className={Logo} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick = {this.handleClick}
                  className = "button1"> Homer is working?  </button>
        </header>
         <Quotes/>
         <Lamp on/>
         <Lamp/>
      </div>
    );
  }
}

export default App;
