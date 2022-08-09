import React from "react";

import { GifApp } from "./components/GifApp";


const App = () => {
    const API_KEY = "mJdO2lUKNPWP49N9VB9gwBgBv2sWJNPV";
    const gif_url = "api.giphy.com/v1/gifs/search";

    // Params
    // api_key: string(required)	YOUR_API_KEY
    // q: string(required)	cheeseburgers
    // limit: integer (int32)	20

    return (
        <>
            <GifApp />
        </>
    );
};

export default App;
