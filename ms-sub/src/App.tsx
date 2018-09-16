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
  public onText=(event:any) => {
    this.setState({
      query: event.target.value,
    });
  }
  public buttonPressed(){
    this.setState({
      result: " ",
    });
    this.search(this.state.query)
  }
  public search(patientToSearch: any){
    
    fetch('https://api.jikan.moe/v3/search/anime?q='+patientToSearch, {
      headers: {
        'Accept': 'application/json',
      },
      method: 'GET',
    })
    .then((response : any) => response.json().then((data :any) =>{
      console.log(data)
      this.setState({
        result: "Looks like the anime you're looking for is: "+data.results[0].title
      })
    })).catch(err => {
      this.setState({
        result: "Oh oh! Something went wrong, make sure to type three characters or more."
      })
    });
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
          onChange={this.onText}
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
