import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const TodoGoster = ({doing, setDoing}) => {
    console.log(doing);
  return (
    <div>
        {doing.map((x)=>(

            <div className={x.isDone ? "done" : "gorev"}>
                <h3>
                    {x.text}
                    <div>
                        <FaCheckCircle style={{color:"green",fontSize:"20px"}}/>
                        <MdDeleteForever style={{color:"red",fontSize:"25px"}}/>
                        {/* ikonlar */}
                    </div>
                
                
                </h3>
                <h6>{x.day}</h6>
            </div>
        ))}
    </div>
  )
}

export default TodoGoster