import React, { useState } from 'react'

// External Conmponets
import { AddCategory } from '../AddCategory/AddCategory'
import { GridContainer } from '../GridContainer'




// Style file import
import './gifApp.style.css'

const GifApp = () => {
    const [categories, setCategories] = useState([]);

    return (
        <>
            {console.log(categories)}
            <AddCategory setCategories={setCategories} />

            {/* Si existe alguna categoria renderizo el grid container */}
            {categories.length > 0 ? <GridContainer categories={categories} /> : <div>There is no gif on the list yet</div>}
        </>
    )
}

export { GifApp }