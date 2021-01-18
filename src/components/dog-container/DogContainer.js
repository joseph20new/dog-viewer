import React from 'react';
import './DogContainer.css';
import DogSearch from '../dog-search/DogSearch';
import DogList from '../dog-list/DogList';

class DogContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            breeds: [],
            dogList: [],
            hasErrors: false,
            numberOfDogs: 0
          }
    }

    componentDidMount = ()  => this.fetchAllBreeds();

    fetchAllBreeds = () => {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
          .then(res => res.json())
          .then(data => this.setState({ breeds: data.message }))
          .catch(() => this.setState({ hasErrors: true }));
    };

    fetchSelectedDogs = () => {
        const { breedName, numberOfDogs } = this.state;
        let url = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`;
        if (breedName) url = `https://dog.ceo/api/breed/${breedName}/images/random/${numberOfDogs}`
    
        fetch(url)
          .then(res => res.json())
          .then(res => this.setState({ dogList: res.message }))
          .catch(() => this.setState({ hasErrors: true }))
    };

    setSelectedBreed = breedName => {
        this.setState({
          breedName,
          dogList: []
        }, () => this.fetchSelectedDogs());
    };
    
    setSelectedDogs = numberOfDogs => {
        this.setState({
          numberOfDogs,
          dogList: []
        }, () => this.fetchSelectedDogs());
    };
    
    render() {
        const { numberOfDogs, breeds, dogList } = this.state;
        return (
            <div className="header">
                <DogSearch
                    numberOfDogs={numberOfDogs}
                    breeds={breeds}
                    setSelectedDogs={this.setSelectedDogs}
                    setSelectedBreed={this.setSelectedBreed}
                />
                {
                    numberOfDogs > 0
                        ? (
                        <DogList
                            dogList={dogList}
                        />
                        ) : null
                }
            </div>
          
        )
    }
}

export default DogContainer;
