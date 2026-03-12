import React from "react";
import Landing from '../Landing';
import Highlights from '../Highlights';
import Highlight from '../ui/Highlight';
import Featured from '../Featured';
import Discounted from '../Discounted';
import Explore from '../Explore';


const Home = () => {
    return (
        <>
            <Landing />
            <Highlights />
            <Featured />
            <Discounted />
            <Explore />
        </>
    );
}

export default Home;