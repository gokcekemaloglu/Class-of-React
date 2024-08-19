import React from 'react'

const SpacingandSizing = () => {
  return (
    <div>
      <h3>SpacingandSizing</h3>
      <div>
        <button className="bg-blue-500 text-white m-1 p-4">Tıkla</button>
        <button className="bg-blue-500 text-white ml-1 p-4 ">Tıkla</button>
        <button className="bg-orange-500 text-white m-1 p-4">Tıkla</button>
        <button className="bg-blue-500 text-white mx-1 my-2 px-4 py-2">Tıkla</button> 
      </div>
      <div>
        <button className="bg-blue-500 text-white m-1 p-4 border border-red-500 rounded-md">Tıkla</button>
        <button className="bg-blue-500 text-white ml-1 p-4 border-[4px] border-red-500 rounded-[1rem]">Tıkla</button>
        <button className="bg-blue-500 text-white m-1 p-4 w-20 h-20 rounded-[50%]">Tıkla</button>
        <button className="bg-blue-500 text-white mx-1 my-2 px-4 py-2 hover:bg-slate-700"> //"hover background color verdik"
          Tıkla
        </button>
      </div>
    </div>
  )
}

export default SpacingandSizing