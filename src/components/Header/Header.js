import React, {Component} from 'react'
import './Header.css'

class Header extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className='nav-bar'>
                <span className='header-tag'>SHELFIE</span>
            </div>
        )
    }
}

export default Header