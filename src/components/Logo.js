import React, { Component } from "react";
import PropTypes from "prop-types";
import logoImage from '../logo.svg'

class Logo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            number: this.props.number
        }
    }
    
    changeColor () {
        let divToChangeColor = document.getElementById('logo-div');

        if(divToChangeColor.style.backgroundColor === 'green') {
            divToChangeColor.style.backgroundColor = 'red'
        } else {
            divToChangeColor.style.backgroundColor = 'green'
        }
    }

    incrementNumber() {
        this.setState({ number: this.state.number += 1 });
    }

    decrementNumber() {
        this.setState({ number: this.state.number -= 1 });
    }

    componentDidMount(){
        console.log('Criado')
    }
    componentDidUpdate(){
        console.log('Atualizado')
    }
    
    render() {
        return (
            <div id="logo-div"
            onMouseOver={this.changeColor}
            >
            <img src={logoImage} alt= 'Logo'></img>
            <h1>{this.state.name}</h1>
            <h1>{this.state.number}</h1>
            <button onClick={() => this.incrementNumber()}>Increment</button>
            <button onClick={() => this.decrementNumber()}>Decrement</button>
        </div>
        )
    }
}

/*
function Logo(props) {
    return (
        <div>
            <img src={logoImage} alt= 'Logo'></img>
            <h1>{props.name}</h1>
            </div>
            );
        } 
        */       
        Logo.propTypes = {
           name: PropTypes.string
        }
        
        
        Logo.defaultProps = {
            name: "Davi",
            number: 0
        }
export default Logo;