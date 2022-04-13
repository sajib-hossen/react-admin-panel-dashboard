import React from "react";
import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ({ type }) => {
  let data;

  let amount=100;
  let diff=20;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon
        
        style={{color:"red",background:'rgba(218,165,32,0.2'}}
        className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "view all orders",
        icon: <ShoppingCartOutlinedIcon
        style={{color:"green",background:'rgba(218,165,32,0.2'}}
        
        className="icon" />,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net  earning",
        icon: <MonetizationOnOutlinedIcon
        
        style={{color:"purple",background:'rgba(218,165,32,0.2'}}
        className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "BALANACE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon 
        style={{color:"goldenrod",background:'rgba(218,165,32,0.2'}}
        className="icon" />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount} </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
         {diff}%
        </div>
      {data.icon}
      </div>
    </div>
  );
};

export default Widget;
