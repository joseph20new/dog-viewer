import './DogList.css';
import defaultPlaceholder from '../../dogloader.gif';

const extractBreedName = (data) => {
    let match = data.split('/');
    if (match)
        return capitalize(data);
};

const capitalize = breedName => {
    return breedName.replace('s', ' ')
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

const DogList = props => { 
    const { dogList } = props;
    let content = [];
    for (let i = 0; i < dogList.length; i++) {
        content.push(
            <li key={i}>
                {
                    dogList[i]
                        ? (
                            <a href="#0">
                                <img alt="dfd" className="img-thumbnail img-responsive" src={dogList[i]} />
                                <div className="box_data">
                                    <span>{extractBreedName(dogList[i])}</span>
                                </div>
                            </a>
                        )
                        : (
                            <a href="#0">
                                <img alt="fgdg" className="img-thumbnail img-responsive" src={defaultPlaceholder} />
                            </a>
                        )
                }
            </li>
        );
    }

    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Some Random Dogs</h2>
                        <hr className="star-primary" />
                    </div>
                </div>
                <ul className="gallery-dog">
                        {content}
                </ul>
            </div>
        </div>
    );
}

export default DogList;