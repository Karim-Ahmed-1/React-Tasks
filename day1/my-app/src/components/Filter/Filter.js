import React, { useState } from 'react'

//two way binding
const Filter = ({filteration}) => {
    const [filter,setFilter]=useState("");
    const filterHandler=(e)=>{
        const name=e.target.value;
        setFilter(name);
        filteration(name);

    }
  return (
    <div>
    <input type="text" value={filter} onChange={filterHandler} placeholder='Filter By name' className="ml-20 mb-5 mt-10 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-64 rounded-md sm:text-sm focus:ring-1"  />
    </div>
  )
}

export default Filter