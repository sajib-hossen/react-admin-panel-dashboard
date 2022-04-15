import React from 'react';
import './Single.scss'
import Sidebar from './../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Chart from '../../components/Chart/Chart';
import ListTable from '../../components/ListTable/ListTable';

const Single = () => {
    return (
        <div className='single'>
           <Sidebar/>
           <div className="singleContainer">
               <Navbar/>
               <div className="top">
                   <div className="left">
                       <div className="editButton">Edit</div>
                       <h1 className="title">Information</h1>
                       <div className="item">
                           <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="itemImg" />

                       <div className="details">
                           <h1 className="itemTitle">
                               Jane Doc
                           </h1>
                           <div className="detailItem">
                               <span className='itemKey'>Email : </span>
                               <span className='itemValue'> jane@gmail.com </span>
                           </div>
                           <div className="detailItem">
                               <span className='itemKey'>Phone : </span>
                               <span className='itemValue'> +22 5875 69 </span>
                           </div>
                           <div className="detailItem">
                               <span className='itemKey'>Address : </span>
                               <span className='itemValue'> Elton St. 243 GARden Yd.NewYork </span>
                           </div>
                           <div className="detailItem">
                               <span className='itemKey'>Country : </span>
                               <span className='itemValue'> USA </span>
                           </div>
                       </div>
                       </div>
                   </div>
                   <div className="right">
                       <Chart aspect={3/1} title="User Spending(last 6 months)" />
                   </div>
               </div>
               <div className="bottom">
               <h1 className="title">Last Transcation</h1>
                   <ListTable/>
               </div>
           </div>
        </div>
    );
};

export default Single;