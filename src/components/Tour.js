import React, { useState,useContext } from 'react';
import fire from '../logiinFirebase/fire';
import PayPal from '../PayPal'


const Tour = ({ id, image, info, name, price, removeTour,email }) => {
  const [readMore, setReadMore] = useState(false);
  const [User,setUser]=useState();
  const [todolist,setTodolist] =useState();
  const [checkout, setCheckOut] = useState(false);

  const CheckUser=()=>{
    const todolist=[];
   const todoRef=fire.database().ref('login-e60d3-default-rtdb');
   let index="";

   todoRef.on('value',(snapshot)=>{
     const todos=snapshot.val();
     for(let id in todos){
        todolist.push(todos[id]);
        const todoRef=fire.database().ref('login-e60d3-default-rtdb').child(id).orderByChild('amount').equalTo(1000)
        if(todoRef){

        }
        else{
          <PayPal/>
          setUser(true);
         
        }
     }
     setTodolist(todolist);
   })

   if(User){
    
   todolist.map((todo)=>{ 
    if(todo.name==email){
      const todoRef=fire.database().ref('login-e60d3-default-rtdb').child(index);
      todoRef.update({
          amount:100,
      });
     
    }
  })
}
else{
  
} 

  }


  return (
    
    <article className="single-tour">
      
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}

          </button>
          <button onClick={CheckUser}>Explore</button>
          {checkout ? (
      <PayPal />) : (
      <button
        onClick={() => {
          setCheckOut(true);
        }}
      >
        PayPal
      </button>
    )}
        
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
