import React, { useState } from 'react'
import "./App.css"
import Card from '../Card/Card';
import Filter from '../Filter/Filter';




const App = () => {
  
  const [filter,setFilter]=useState("");
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

  const filterNames=(name)=>{
    setFilter(name);
  };

  const namesHandler=()=>{
    if(filter.length!==0)
    {
      return state.filter((el)=>el.name.includes(filter))
    }
    return state;
  }
  return (
    <div >
        <Filter filteration={filterNames}/>
        <Card list={namesHandler()} seeDetails={seeDetailsHandler}/>
    </div>
  )
}
 
export default App



  
