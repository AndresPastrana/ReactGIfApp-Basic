import React from 'react'

// External Components
import Category from './Category/Category'

// Styles
import './gridContainer.style.css'

const GridContainer = ({ categories }) => {
    return (
        <>
            {categories.map((cat) => {

                const categoryName = cat[0];
                const gifsList = cat[1];
                console.log(categoryName, gifsList);
                return <Category key={categoryName} categoryName={categoryName} gifList={gifsList} />
            })}

        </>
    )
}

export { GridContainer }