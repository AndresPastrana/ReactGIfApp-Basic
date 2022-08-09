import React from "react";
import PropTypes from "prop-types";
import './gif.style.css'

const Gif = ({ gifData }) => {
    return <div>Gif</div>;
};

// PropTypes
// It should recive an Object with the gif's data
Gif.propTypes = {
    gifData: PropTypes.object.isRequired,
};

export default Gif;
