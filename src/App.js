import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(props) {
    super (props);
    this.state = {
      changeResult:"change default value",
      inputResult:"input default value",
      keyupResult:"keyup default value"
    };
  }


  onChange(event){
    this.setState({changeResult:event.target.value});
  }

  onInput(event){
    this.setState({inputResult:event.target.value});
  }

  onKeyup(event){
    this.setState({keyupResult:event.target.value});
  }

  render () {
    return(
      <div>
         {/*  input onChange={(event)=> this.onChenge(event)} */}
          <input value={this.state.changeResult} 
                 onChange={this.onChange.bind(this)}
                 placeholder="change" />
        <br />
          <input defaultValue={this.state.inputResult}
                 onInput={this.onInput.bind(this)}
                 placeholder="input" />
        <br />
          <input defaultValue={this.state.keyupResult}
                 onKeyUp={this.onKeyup.bind(this)}
                 placeholder="Keyup" />
      </div>
    );
  }
}

/* function App() {
  return (
    <>
      
    </>
  );
} */

export default App;
