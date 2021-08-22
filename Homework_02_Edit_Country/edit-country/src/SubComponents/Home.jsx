import React, { Component } from "react";
import CustomInput from "./CustomInput";
import CountryList from "./CountryList";
import EditCountry from "./EditCountry";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "",
            countries: [],
            editable: false,
            editableCountry: ''
        };

        setTimeout(() => {
            this.setState({
                countries: ["Macedonia", "Turkey"],
            });
        }, 1000);

        // this.addCountryName = this.addCountryName.bind(this);
    }

    changeCountryName = (event) => {
        this.setState({ country: event.target.value });
    };

    addCountryName = () => {
        const { country, countries } = this.state;
        if (country.length > 0 && !countries.some((currentCountry) => currentCountry === country)) {
            this.setState({
                country: "",
                countries: [...countries, country],
            });
        } else {
            alert(`Country with that name already exist in DB`)
        }
    }

    deleteCountry = (country) => {

        const { countries } = this.state;
        const filteredCountry = countries.filter(f => f !== country);

        this.setState({
            countries: filteredCountry
        })

    }

    editCountryModeOn = (country) => {
        this.setState({
            editable: true,
            editableCountry: country
        })
    }

    editCountryModeOff = () => {
        this.setState({
            editable: false,
            editableCountry: ''
        })
    }

    editCountryName = (countryName, updatedCountry) => {
        const updatedCountries = this.state.countries.map(country => countryName === country ? updatedCountry : country)
        this.setState({
            countries: updatedCountries
        })
        this.editCountryModeOff();
    }

    render() {

        const editInput = () => {
            if (this.state.editable) {
                return <EditCountry editCountryName={this.editCountryName} countryName={this.state.editableCountry} editCountryModeOff={this.editCountryModeOff} />
            }
        }

        return (
            <div>
                <CustomInput onNameChange={this.changeCountryName} countryName={this.state.country} />
                <button onClick={this.addCountryName}>Add Country</button>
                <br />
                <CountryList countries={this.state.countries} onCountryDelete={this.deleteCountry} editCountryModeOn={this.editCountryModeOn} />
                <br />
                <br />
                {
                    editInput()
                }
            </div>
        );
    }
}

export default Home;
