import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [term,setTerm]=useState('')
  const [result,setResult]=useState([])

  useEffect(() =>{
    const search=async()=>{
      const response=await axios.get("https://en.wikipedia.org/w/api.php",{
        params:{
          action:'query',
          list:'search',
          origin:'*',
          format:'json',
          srsearch:term,
        }
      });
      setResult(response.data.query.search);
    };
    
    if(!result.length){
      if(term){
        search();
        }
    }else{
      
      const debounceSearch =  setTimeout(() => {
            if(term){
            search();
            }
          }, 1000);
      return ()=>{
        clearTimeout(debounceSearch);
      };
    }

  },[term,result.length])


  const fetchResult=result.map((el,indx)=>{
    return (
      <tr  key={indx}>
            <th scope="row">{indx+1}</th>
            <td>{el.title}</td>
            <td> <span dangerouslySetInnerHTML={{__html: el.snippet}}/></td>        
      </tr>
    )
    ;
  })


  return (
    <div className="p-5">
      <div className='w-50 mx-auto text-center mb-5'>
        <h1> Search Using <span className='text-warning '>Wiki.</span></h1>
      </div>
      <div className="input-group mb-3 w-50 mx-auto">
        <input onChange={(e)=>setTerm(e.target.value)} value={term}
        type="text" className="form-control" placeholder="Something You want?" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        
      </div>
      
      <table className="table mx-auto my-5 w-50 ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col" >Desc</th>
          </tr>
        </thead>
        <tbody>
          {fetchResult}
        </tbody>
      </table>
    </div>
  );
}

export default App;
