import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import './App.css';
interface IState{
  button: any,
  query: any,
  result: any
  textfield: any
}

export default class App extends React.Component<{},IState> {
  constructor(props: any){
    super(props);
    this.state = {
      button: this.buttonPressed.bind(this),
      query: "",
      result: "",
      textfield: this.onText.bind(this)
    }
  }
  public onText(q: any) {
    this.setState({
      query: q.value,
    });
  }
  public buttonPressed(){
    this.setState({
      result: " ",
    });
    this.search(this.state.query)
  }
  public search(patientToSearch: any){
    fetch('api.flutrack.org/?s=headache')
    .then(response => response.json()).then(data => {
      this.setState({result: data})
    })
  }
  public render() {
    return (
      <div className="container-fluid">
        <div className="centreText">
          <div className="dropZone">
          <TextField
          id="name"
          label="Search"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="eg.Coughing"
          value={this.state.query}
          onChange={this.state.textfield}
          margin="normal"
          />
          <Button onClick={this.state.button}>Search</Button>
          </div>
          <div  className="dank">
          {
            this.state.result === " " && !(this.state.query === "") ?
            <CircularProgress thickness={3} />:
            <p>{this.state.result}</p>
          }
          </div>
        </div>
      </div>
    );
  }
}
