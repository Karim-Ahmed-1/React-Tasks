import React from 'react'




const Card = ({list ,seeDetails }) => {
    const cards=list.map(({name,details},indx)=>(
        <div className="w-80 h-80  mt-5 rounded-lg shadow-md lg:max-w-sm"  key={indx} >
        <img
            className="object-cover w-full h-48"
            src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
            alt=""
        />
        <div className="p-4">
            <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                {name}
            </h4>
            <p className="mb-2 leading-normal">
                {details}
            </p>
            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
                    onClick={()=>seeDetails(indx)}
            >
                Read more about {name}
            </button>
        </div>
      </div>
      ))
  return (
    <div className="container flex flex-row justify-between flex-wrap mx-auto gap-10">
    {cards}
    </div>
  )
}

export default Card