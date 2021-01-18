import './DogList.css'

const DogList = props => { 
    const { dogList } = props;
    console.log(dogList)
    return (
        <div className="content-wrapper">
            <div className="content-container">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Some Random Dogs</h2>
                            <hr className="star-primary" />
                        </div>
                    </div>
                    <ul className="gallery-dog">
                        {dogList}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DogList;