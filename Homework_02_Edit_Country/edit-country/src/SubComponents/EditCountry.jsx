import React, { Component } from 'react';

class EditCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCountryName: ""
        }
    }

    changeCountryName = (event) => {
        this.setState({
            newCountryName: event.target.value
        })
    }


    render() {

        const { editCountryName, countryName } = this.props

        return (
            <div>
                <input onChange={this.changeCountryName} value={this.state.newCountryName} />
                <button onClick={() => editCountryName(countryName, this.state.newCountryName)}>Save</button>
            </div>
        )
    }
}

export default EditCountry;