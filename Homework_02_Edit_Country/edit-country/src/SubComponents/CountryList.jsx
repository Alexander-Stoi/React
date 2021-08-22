import React, { Component } from 'react';


class CountryList extends Component {

    render() {

        const { countries } = this.props

        return (
            <ul>
                {
                    countries.map((country, index) => (
                        <li key={index}>
                            {country}
                            <button onClick={() => this.props.onCountryDelete(country)}> Delete </button>
                            <button onClick={() => this.props.editCountryModeOn(country)}> Edit </button>
                        </li>))
                }
            </ul>
        )
    }
}


export default CountryList;