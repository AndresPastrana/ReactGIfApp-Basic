import React from "react";
import PropTypes from "prop-types";
import Gif from "../Gif/Gif";

const Category = ({ categoryName, gifList }) => {
    return (
        <div className="category">
            <h1>{categoryName}</h1>
            <ul>
                {gifList.map((gifData) => (
                    <Gif gifData={gifData} />
                ))}
            </ul>
        </div>
    );
};

// PropTypes
// It should recive the category name (string) and a list with the gifs (array of objetcs), both are required
Category.propTypes = {
    gifList: PropTypes.arrayOf(PropTypes.object).isRequired,
    categoryName: PropTypes.string.isRequired,
};
export default Category;
