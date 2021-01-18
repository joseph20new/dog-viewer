import React from 'react';
import './DogSearch.css';

class DogSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            breeds: [],
            numberOfDogs: 0
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

    render() {
        return <h3>Hi, I am a DogSearch!</h3>;
    }
}

export default DogSearch;
