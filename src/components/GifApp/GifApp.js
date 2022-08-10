import React, { useState } from 'react'

// External Conmponets
import { AddCategory } from '../AddCategory/AddCategory'
import { GridContainer } from '../GridContainer'

// Fake db
import { arr } from '../../db'



// Style file import
import './gifApp.style.css'

const GifApp = () => {
    const [categories, setCategories] = useState(arr);

    return (
        <>
            {console.log(categories)}
            <AddCategory setCategories={setCategories} />

            {/* Si existe alguna categoria renderizo el grid container */}


            {categories.length > 0 && <GridContainer categories={categories} />}
        </>
    )
}

export { GifApp }