import React from 'react';
import './DogSearch.css';

class DogSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            breeds: [],
            numberOfDogs: 0,
            breedName: ""
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.breeds) {
            const listOfBreeds = Object.keys(props.breeds);
            let breeds = [];
            listOfBreeds.map((breedName, key) => {
                return breeds.push({ key, breedName });
            });

            return {
                breeds,
                numberOfDogs: props.numberOfDogs
            }
        }
        return null;
    }

    capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

    setSelectedBreed = event => {
        if (this.state.numberOfDogs === 0) {
            alert("Please enter number of dogs first.")
        }
        this.setState({ breedName: this.state.numberOfDogs == 0 ? "" : event.target.value })
        this.props.setSelectedBreed(event.target.value)
    }

    setSelectedDogs = event => {
        const value = event.target.value ? parseInt(event.target.value) : 0;
        this.setState({ numberOfDogs: value });
        this.props.setSelectedDogs(value);
    }


    render() {
        const { breeds } = this.state;

        return (
            <div className="container">
                <div className="row col-lg-12">
                    <span className="heading-name">Random Dog Viewer Challenge </span>
                    <hr className="star-light" />
                    <div className="row">
                        <div className="form-group col-lg-6 text-center">
                            <label className="text-left">
                                <h4>Enter the number of dogs you like to see</h4>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the number of dogs you like to see"
                                value={this.state.numberOfDogs}
                                pattern="[0-9]*"
                                onInput={(evt) => this.setSelectedDogs(evt)}
                            />
                        </div>
                        <div className="form-group col-lg-6 text-center">
                            <label className="text-left">
                                <h4>Select Dog Breed Type</h4>
                            </label>
                            <select
                                className="form-control"
                                value={this.state.breedName}
                                onChange={this.setSelectedBreed}
                            >
                                <option value="">Select</option>
                                {
                                    breeds.map((item) => {
                                        return <option value={item.breedName} key={item.key}>{this.capitalize(item.breedName)}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DogSearch;
