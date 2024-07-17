import React from 'react';
import { FaTimesCircle } from "react-icons/fa";

const HastaListe = ({hastalar, setHastalar, doktorlar }) => {

  // (doktorlar.length === 1) ? setHastalar(hastalar.filter((a)=> a.myDoctor === doktorlar[0].doctorName)) : hastalar

  return (
    <div>
      {hastalar.map((hasta)=>(
        <div key={hasta.id}>
          {doktorlar.map((a)=> a.doctorName === hasta.myDoctor && (
            <div className={hasta.isDone ? "trueStil" : "falseStyle"} 
              onDoubleClick={()=>setHastalar(hastalar.map((a)=>a.id === hasta.id ?  {...a, isDone: !a.isDone} : a))}>

              <div>
                <h2>{hasta.text}</h2> 
                <h4>{hasta.day}</h4>
                <h3>{hasta.myDoctor}</h3>
              </div>
              <div>
                <FaTimesCircle style={{color:"red"}} />
              </div>

            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default HastaListe