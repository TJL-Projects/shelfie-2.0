import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import './reset.css'
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      products:[{
      }]
    }

    // this.addProduct = this.addProduct.bind('this')
  }

  componentDidMount(){
    axios.get('http://localhost:4000/api/inventory')
    .then(res => {
      this.setState({
        products: res.data,

      })
      console.log(res.data)
    })
  }

  addProduct = (name, price, img) => {
    axios.post('http://localhost:4000/api/product', {name, price, img})
    .then(res => {
      this.setState({
        products:[
          ...this.state.products, res.data[0]
        ]
      })
    console.log(res.data)  
    })
  }

  deleteProduct = (id) => {
    axios.delete(`http://localhost:4000/api/inventory/${id}`)
    .then(res => {
      this.setState({
        products: res.data
      })
    })
  }


  render(){

    console.log(this.state)
    return (
      <div className="App">
      <Header />
      <Dashboard 
          products={this.state.products} 
          deleteProduct={this.deleteProduct}
      />
      <Form addProduct={this.addProduct} />
    </div>
  );
}
}

export default App;
