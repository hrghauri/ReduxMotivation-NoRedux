

import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props){
        super(props)
        
   
        this.state = {
            name: ''
        }

        this.submitForm = this.submitForm.bind(this);
    }



submitForm(e){
    e.preventDefault();
    console.log('event occured')
    const name = this.state.name;
   this.props.addNameToApp(name);
   this.setState({
       name: ''
   })
  
}


  render() {
    return (
        <form onSubmit={this.submitForm}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value ={this.state.name} onChange={(e)=>{this.setState({name: e.target.value})}}></input>
            <input type="submit"></input>
        </form>
    )
  }
}
