import React from 'react';
import './DogContainer.css';
import DogSearch from '../dog-search/DogSearch';
import DogList from '../dog-list/DogList';

class DogContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            breeds: [],
            hasErrors: false,
            numberOfDogs: 0
          }
    }

    componentDidMount() {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
          .then(res => res.json())
          .then(data => this.setState({ breeds: data.message }))
          .catch(() => this.setState({ hasErrors: true }));
    }
    
    render() {
        const { numberOfDogs, breeds } = this.state;
        return (
            <div className="header">
                <DogSearch
                    numberOfDogs={numberOfDogs}
                    breeds={breeds}
                />
                <DogList/>
            </div>
          
        )
    }
}

export default DogContainer;
