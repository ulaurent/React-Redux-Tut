import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    // Clones array.. then spread operator, to add ninja
    let ninjas = [...this.state.ninjas, ninja];
    // then sets state to previous cloned ninjas
    this.setState({
      ninjas: ninjas
    });
  }

  deleteNinja = (id) => {
    console.log(id);
    //Non destructive methof called filter to delete a ninja
    // filter (ninja => {return ninja.id !== id}) // filter out based off id were looking for
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id 
    });

    // now set state equal to new ninjas filtered array
    this.setState({
      ninjas: ninjas
    });
  }

  componentDidMount(){
    console.log("component mounted"); 
  }
  componentDidUpdate(prevProps, prevStates){
    console.log("component updated");
    console.log(prevProps, prevStates);
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja = {this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;