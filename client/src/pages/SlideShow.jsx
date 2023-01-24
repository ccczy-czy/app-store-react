import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

function SlideShow(props) {
    const navigate = useNavigate();

    function handleLoad(evt, timeout) {
        // setTimeout(() => {
        //     navigate('/home');
        // }, 5000*timeout);
    }

    const slides = props.paths.map((path, i) => {
        return (
            <Carousel.Item key={i}>
                <iframe onLoad={evt => handleLoad(evt, props.paths.length)} className='slide' title={props.title} src={path}></iframe>
            </Carousel.Item>
        );
    });

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3'></div>

                    <div className='col-6 mt-5 frame'>
                        <div className='row'>
                            <div className='col p-3 d-flex justify-content-end'>
                                <Link to="/home"><i className="closeBtn fa-solid fa-rectangle-xmark"></i></Link>
                            </div>
                        </div>

                        <div className='row my-5'>
                            <div className='col d-flex justify-content-center'>
                                <Carousel interval={5000} pause={false}>
                                    {slides}
                                </Carousel>
                            </div>
                        </div>
                    </div>

                    <div className='col-3'></div>
                </div>
            </div>
        </>
    );
}

export default SlideShow;