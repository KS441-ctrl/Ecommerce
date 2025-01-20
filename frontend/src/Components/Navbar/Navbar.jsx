import React from 'react';
import styles from "../Navbar/Navbar.module.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { useEffect, useState, useRef } from "react";

const Navbar = () => {
//added navbar changes 
const [show, setShow] = useState(false);
    const [menu,setMenu] = useState("shop")

  return (
    <div className={styles.navbar}>
        <div className={styles["nav-logo"]}>
         <img src={logo} alt="" />
         <p>SHOPPER</p>
        </div>
        <ul className={styles["nav-menu"]}>
        <li onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("mens")}}>Men {menu==="mens"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("womens")}}>Women {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}>Kids {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className={styles["nav-login-cart"]}>
            <button>Login</button>
            <img src={cart_icon} alt=""/> 
            //changes made to the default image
            <div className={styles["nav-cart-count"]}>0</div>
        </div>
        //made change in main div
    </div>
  )
}

export default Navbar