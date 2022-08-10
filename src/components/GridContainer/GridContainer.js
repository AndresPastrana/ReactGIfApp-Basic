import React from 'react'

// External Components
import Category from './Category/Category'

// Styles
import './gridContainer.style.css'

const GridContainer = ({ categories }) => {
    return (
        <>
            {categories.map((cat) => {
                const [categoryName, gifList] = cat;
                return <Category key={categoryName} categoryName={categoryName} gifList={gifList} />
            })}

        </>
    )
}

export { GridContainer }