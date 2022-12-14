import React, { Component } from "react";
import PropTypes, { array, element, number, string } from "prop-types";

class UFList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            UFs: []
        }
        }

        componentDidMount(){
            fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
            .then(response=> response.json())
            .then(data => {
                console.log(data)
                this.setState({UFs: data})
            }   
            )
            .catch(error => console.log(error));
        }

    render() {
        return (
            <div>
                <h3>Unidades Federativas do Brasil</h3>
                {this.state.UFs.map(UF => <h4 key={UF.id}>{UF.nome} - {UF.sigla}</h4>)}
            </div>

        )
    }

}

UFList.propTypes = {
    UFs: array
}

export default UFList;