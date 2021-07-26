import React from 'react';

 const Main=({email,setEmail,password,setPassword,handleLogin,handleSignUp,
    HasAccount,setHasAccount,emailError,passwordError})=>{
   

    return(
        <section className="login">
        <div className="loginContainer">
           
            <label>Username</label>
            <input type="text"
            autoFocus
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
            />
            <p className="errorMsg">{emailError}</p>

            <label>Password</label>
            <input type="text"
            autoFocus
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>

            <div className="btnContainer">
                {HasAccount?( 
                    <>
                    <button onClick={handleLogin}>SignIn</button>
                    <p>Don't have an account ? <span onClick={()=>setHasAccount(!HasAccount)}>Sign Up</span></p>
                    </>
                ):(
                    <>
                    <button onClick={handleSignUp}>SignUp</button>
                    <p>Already have an account ? <span onClick={()=>setHasAccount(!HasAccount)}>Sign In</span></p>
                    </>
                )}
            </div>
        </div>
        </section>
    )
}
export default Main