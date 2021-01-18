import React from 'react';
import './DogContainer.css';
import DogSearch from '../dog-search/DogSearch';
import DogList from '../dog-list/DogList';

class DogContainer extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>Hi, I am a Dog Conatainer!</h2>
                <DogSearch/>
                <DogList/>
            </div>
          
        )
    }
}

export default DogContainer;
