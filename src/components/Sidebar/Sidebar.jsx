import React from "react";
import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import FilterFramesTwoToneIcon from '@mui/icons-material/FilterFramesTwoTone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GiteIcon from '@mui/icons-material/Gite';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Sajib Hossen</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">Main</p>
          <li> <DashboardIcon  className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>
         <Link to="/users" style={{textDecoration:"none"}}>
         <li>
              <PersonOutlineOutlinedIcon className="icon"/>
            <span>Users</span>
          </li>
         </Link>
         <Link to="/products" style={{textDecoration:"none"}}>
          <li>
              <Inventory2RoundedIcon className="icon"/>
            <span>Products</span>
          </li>
          </Link>
          <li>
              <FilterFramesTwoToneIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
              <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFULL</p>
          <li>
              <GiteIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
              <NotificationsNoneIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
              <MonitorWeightOutlinedIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
              <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
              <SettingsIcon className="icon"/>
            <span>Setttings</span>
          </li>
          <p className="title">USER</p>
          <li>
              <InsertEmoticonOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
              <LogoutIcon  className="icon"/>
            <span>LogOut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
          
         <div className="colorOption"></div>
          <div className="colorOption"></div>
         
      </div>
    </div>
  );
};

export default Sidebar;
