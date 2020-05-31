import React, { Component } from 'react'

class Product extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <h1>Product.js  </h1>
                
                {/* <h1>{this.props.product.name}</h1> */}
            </div>
        )
    }
}

export default Product