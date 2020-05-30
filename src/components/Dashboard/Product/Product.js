import React, { Component } from 'react'

class Product extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <h1>Product.js</h1>
                <img src={this.props.product.img} />
            </div>
        )
    }
}

export default Product