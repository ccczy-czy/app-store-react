import React from 'react';
import Thumbnail from "./Thumbnail";
import cat from '../assets/img/cat.png';
import face from '../assets/img/face.png';
import catAndFace from '../assets/img/catAndFace.png';

function Home(props) {

    return (
        <>
            <h1 className="display-1 text-center my-4">App Store</h1>
            <div className="row">
                <div className="col-1"></div>

                <div className="col d-flex justify-content-center align-items-center">
                    <Thumbnail id={'cat'} handleClick={props.handleClick} src={cat}></Thumbnail>
                </div>

                <div className="col d-flex justify-content-center align-items-center">
                    <Thumbnail id={'face'} handleClick={props.handleClick} src={face}></Thumbnail>
                </div>

                <div className="col d-flex justify-content-center align-items-center">
                    <Thumbnail id={'catAndFace'} handleClick={props.handleClick} src={catAndFace}></Thumbnail>
                </div>

                <div className="col-1"></div>
            </div>
        </>
    );
}

export default Home;