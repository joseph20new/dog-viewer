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
        if (props.breeds && state.breeds.length === 0) {
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
                            />
                        </div>
                        <div className="form-group col-lg-6 text-center ">
                            <label className="text-left">
                                <h4>Select Dog Breed Type</h4>
                            </label>
                            <select
                                className="form-control"
                                value={this.state.breedName}
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
