import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      products:[]
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4000/api/inventory')
    .then(res => {
      this.setState({
        products: res.data
      })
      console.log(res.data)
    })
  }

  render(){
    return (
      <div className="App">
        
      <Dashboard
        products={this.state.products}
      />
      <Form />
      <Header />

    </div>
  );
}
}

export default App;
