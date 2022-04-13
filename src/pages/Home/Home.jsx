import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.scss'

const Home = () => {
    return (
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                content pages
            </div>
        </div>
    );
};

export default Home;