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
                {this.props.products.map(element => {
                    return <Product 
                                key={element.id}
                                product={element}
                                deleteProduct={this.props.deleteProduct}                    
                    />                    
                })}
                
                {/* <Product /> */}
                {/* this is what broke it */}
            </div>
        )
    }
}

export default Dashboard