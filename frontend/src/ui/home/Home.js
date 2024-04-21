import React from 'react';

import Header from "./Header"
import Movies from "./Movies";

import "./Home.css"

const Home = ({isSidebarOpen, onSidebarOpen}) => {
    return (
        <div className='home-page'>
            <Header isSidebarOpen={isSidebarOpen} onSidebarOpenClick={onSidebarOpen}/>
            <Movies/>
        </div>
    );
}

export default Home;