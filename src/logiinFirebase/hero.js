import React, { useState ,useContext} from 'react';
import Demo from '../components/App';
import PersonContext from '../logiinFirebase/login'
const Hero=({handleLogout,email})=>{
 //   const {handleLogout,email} = useContext(PersonContext);
  
  
    return(
        <>
        <section className="hero">
            <nav>
                <button onClick={handleLogout}>Logout</button>
                <Demo email={email}/>
               
            </nav>
            
        </section>
    </>
    )
}
export default Hero