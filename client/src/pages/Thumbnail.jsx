import React from 'react';
import { Link } from "react-router-dom";

function Thumbnail(props) {
    return (
        <Link id={props.id} to="/slide" onClick={evt => props.handleClick(evt)} ><img src={props.src} alt="thumbnail" className="img-thumbnail thumbnail"/></Link>
    );
}

export default Thumbnail;