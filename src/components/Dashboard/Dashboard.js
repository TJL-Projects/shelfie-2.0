import React, {Component} from 'react'
import Product from './Product/Product'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Dashboard.js</h1>
                {this.props.products.map(element => {
                    return <Product 
                                key={element.id}
                                product={element}
                                // deleteProduct={this.props.deleteProduct}
                    
                    /> 
                    
                })}
                
                <Product />
            </div>
        )
    }
}

export default Dashboard