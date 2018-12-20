import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';
import Number from './components/Number';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      names: []
    }

    this.addName = this.addName.bind(this);
    this.removeName = this.removeName.bind(this);
  }

  addName(name){
    console.log(name);
    let names = this.state.names;
    names.push(name);
    this.setState({
      names: names
    })
  }


  removeName(index){
    let names = this.state.names;
    names.splice(index,1);
    this.setState({names: names})
  }

  render() {
    if (this.state.names.length === 0)
    return (
      <Form addNameToApp={this.addName}>
      </Form>
    )




    const renderedContent = <div>
      <Form initialName={""}  addNameToApp={this.addName}>
      </Form>

       
       <List names={this.state.names} removeNameFromApp = {this.removeName}></List> 
       <Number length = {this.state.names.length}></Number>
    </div>

    return (
      <div>
      {renderedContent}
      </div>
    );
  }
}

export default App;
