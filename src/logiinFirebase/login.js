import React,{useState,useEffect} from 'react'
import fire from './fire';
import Main from './Main';
import Hero from './hero';
import Tour from '../components/Tour';

export default function Login(){
    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [HasAccount,setHasAccount] = useState(false);

    const PersonContext = React.createContext();
const clearInputs=()=>{
    setEmail('');
    setPassword('');
}

const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
}

const handleLogin=()=>{
    clearErrors();
    fire.
    auth()
    .signInWithEmailAndPassword(email,password)
    .then(()=>{


    })
    .catch(err=>{
        switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
                setPassword(err.message);
                break;
        }
    });
};

const handleSignUp=()=>{
    clearErrors();
    fire.
    auth()
    .createUserWithEmailAndPassword(email,password)
    .then(()=>{
        const todoRef=fire.database().ref('login-e60d3-default-rtdb');
        const todo={
            name:email,
            amount:0,
        };
        todoRef.push(todo);
    })
    .catch(err=>{
        switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
            setEmailError(err.message);
            break;
            case "auth/weak-password":
                setPassword(err.message);
                break;
        }
    });
}

const handleLogout=()=>{
    fire.auth().signOut();
};

const authListener=()=>{
    fire.auth().onAuthStateChanged((user)=>{
        if(user){
            clearInputs();
         
            setUser(user);
        }
        else{
            setUser('');
        }
    })
}

useEffect(()=>{
    authListener();
},[])

    return(
        <div className="App">
            {user?(
               <Hero handleLogout={handleLogout} email={email}/>
                
            ):(
            <Main 
            email={email} 
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            HasAccount={HasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            />
            )}
        </div>
    )
}