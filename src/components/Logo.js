import React from "react";
import PropTypes from "prop-types";
import logoImage from '../logo.svg'

function Logo(props) {
    return (
        <div>
            <img src={logoImage} alt= 'Logo'></img>
            <h1>{props.name}</h1>
        </div>
    );
}

Logo.prototype = {
    name: PropTypes.string
}

Logo.defaultProps = {
    name: "Davi"
}

export default Logo;