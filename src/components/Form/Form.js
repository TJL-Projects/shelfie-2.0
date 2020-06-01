import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            imgInput:'',
            nameInput: '',
            priceInput: ''
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    clearMethod = () => {
        this.setState({
            nameInput: '',
            imgInput: '',
            priceInput: 0
        })
        console.log(this.state)
    }

    render(){
        return(
            <div className='form-container'>
                <div className='form-img-container'>
                    
                        {this.state.imgInput === '' ? <img className='img' src={'https://www.sbdcnet.org/wp-content/themes/consultix/images/no-image-found-360x250.png'} /> : <img className='img' src={this.state.imgInput} />}
                    
                    
                </div>
                
                <div className='inputs-container'>
                    <div className='inputs-tags'>
                        <div>
                            <span className='tag'>Image URL:</span>                            
                        </div>
                        <div>
                           <input className='box' name='imgInput' value={this.state.imgInput} onChange={e => this.handleChange(e)} />
                        </div>
                        <div>
                            <span className='tag'>Product Name:</span>
                        </div>
                        <div>
                            <input className='box' name='nameInput' value={this.state.nameInput} onChange={e => this.handleChange(e)} />
                        </div>
                        <div>
                            <span className='tag'>Price: </span>
                        </div>
                        <div>
                            <input className='box' name='priceInput' value={this.state.priceInput} onChange={e => this.handleChange(e)} />
                        </div>
                    </div>
                </div>
                <div className='buttons-container'>
                    <button className='button' id='clr-button' onClick={() => this.clearMethod()}>Clear</button>
                    <button className='button' id='add-button' onClick={() => this.props.addProduct(this.state.nameInput, this.state.priceInput, this.state.imgInput)}>Add to Inventory</button>
                </div>
                
            </div>
        )
    }
}

export default Form