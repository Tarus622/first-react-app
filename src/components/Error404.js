import React, { Component } from "react";
import PropTypes from "prop-types";

class Error extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            number: this.props.number
        }
    }

    render() {
        return (
            <h1>Página não encontrada</h1>
        )
    }
}

export default Error;