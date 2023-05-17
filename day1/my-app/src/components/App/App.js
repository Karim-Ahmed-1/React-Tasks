import React, { useState } from 'react'
import "./App.css"
import Card from '../Card/Card';




const App = () => {
  
  
  const [state,setState]=useState([
    {
      name:"kariim",
      details:"kariim details"
    },
    {
      name:"Alaaaa",
      details:"Alaaaa details"
    },
    {
      name:"Maghwaryy",
      details:"Maghwaryy details"
    },
    {
      name:"Okbaa",
      details:"Okbaa details"
    }
  ])

  const seeDetailsHandler=(index)=>{
    
    // let newState=state.map((element,indx)=>{
    //                 if(indx===index)
    //                 {
    //                   return {...element,details:`More Details about ${element.name}`,address:"eg"};
    //                 }
    //                 return element;
    //               })
    //   setState(newState);
    //   console.log(state);


      setState((prevState)=>{
        
        return prevState.map((element,indx)=>{
          if(indx===index)
          {
            return {...element,details:`More Details about ${element.name}`,address:"eg"};
          }
          return element;
        })
      });
      console.log(state);
  }
  return (
    <div >
        <Card list={state} seeDetails={seeDetailsHandler}/>
    </div>
  )
}
 
export default App



  
