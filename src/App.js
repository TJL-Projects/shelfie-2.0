import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      inventory: []
    }
  }

  // componentDidMount(){
  //   axios.get('http://localhost:3000/api/inventory')
  //   .then(res => {
  //     this.setState({
  //       inventory: res.data
  //     })
  //   })
  // }

  render(){

    return (
      <div className="App">
      <Dashboard />
      <Form />
      <Header />

    </div>
  );
}
}

export default App;
