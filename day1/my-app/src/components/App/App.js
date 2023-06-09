import React, { useState } from 'react'
import "./App.css"
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import Modal from '../Modal/Modal';




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
      console.log(filter.toUpperCase())
      return state.filter((el)=>el.name.toLowerCase().includes(filter.toLowerCase()))
    }
    return state;
  }
  return (
    <div >
        <div className='mt-16 ml-10'>
          <Modal />
        </div>
        <Filter filteration={filterNames}/>
        <Card list={namesHandler()} seeDetails={seeDetailsHandler}/>
    </div>
  )
}
 
export default App



  
