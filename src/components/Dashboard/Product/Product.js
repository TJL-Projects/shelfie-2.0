import React, { Component } from 'react'
import './Product.css'

class Product extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        console.log(this.props)
        return (
            <div className='product-container'>    
                <div className='product-img-container'>
                    <img className='img'  src={this.props.product.img} alt='pic' />
                </div>            
                <div className='spans'>
                    <span id='name-tag'>{this.props.product.name}</span>
                    <span id='price-tag'>${this.props.product.price}</span>
                </div>
                <button className='button' id='delete-btn' onClick={ () => this.props.deleteProduct(this.props.product.id)}>Delete</button>
            </div>
        )
    }
}

export default Product