import React from 'react';
import Chart from '../../components/Chart/Chart';
import Featured from '../../components/Featured/Featured';
import ListTable from '../../components/ListTable/ListTable';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widget from '../../components/Widget/Widget';
import './Home.scss'

const Home = () => {
    return (
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
               <div className="widgets">
                   <Widget type="user"/>
                   <Widget type="order" />
                   <Widget type="earning" />
                   <Widget type="balance"/>
               </div>
               <div className="charts">
                   <Featured/>
                   <Chart tilte="Last 6 Month (Revenue)" aspect={2/1}/>
               </div>
               <div className="listContainer">
                   <div className="listTitle">
                       Latest Transactions
                   <ListTable/>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default Home;