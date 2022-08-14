import React from "react";
import PropTypes from "prop-types";
import './gif.style.css'

const Gif = ({ gifData }) => {
    const { title, img } = gifData;
    return <div className="gif_container">
        <p>{title}</p>
        <img src={img} alt={title}></img>
    </div>;
};

// PropTypes
// It should recive an Object with the gif's data
Gif.propTypes = {
    gifData: PropTypes.object.isRequired,
};

export default Gif;
