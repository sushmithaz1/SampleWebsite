import React from 'react'
import  './HomeStyle.css';
import Login from './login';
const Home=()=>{
return(
    <>
        <div class="topnav">
         <a class="active" href="#home">Home</a>
         <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        </div>

        <div class="footer">
            <p><Login/></p>
        </div>
     </>
)
}
export default Home;