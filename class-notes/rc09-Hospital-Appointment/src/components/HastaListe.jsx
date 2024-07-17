import React from 'react';
import { FaTimesCircle } from "react-icons/fa";

const HastaListe = ({hastalar, setHastalar, doktorlar }) => {

  // if(doktorlar.length===1){
  //   setHastalar(hastalar.filter((a)=> a.myDoctor===doktorlar[0].doctorName))
  // }else setHastalar(hastalar)
  // üstteki gibi yazarsam doktorlar dizisi teke düştüğünde sonsuz döngü onblur, çünkü 1 doktor varken setHastalar a git diyoruz, gidip buraya döndüğünde doktor sayısı 1 old için yine set çalışır

  // başka yol
  // doktorlar.length === 4 ? (ilk yaptığımız gibi hastalarda gez hepsini bastır) : 

  // doktorlar[0].doktor === doktorum && (soldaki şarta uyanları bastır)

  //son yol da alttaki doktorlar 4 olsa da bir olsa da ismi geçen doktorun hastalarını bastır
  // hastalarda gezerken ilk hastayı al, bişey bastırmadan doktorlarda gezin, elindeki hastanın doktoru,o anki doktorlar dizisinde varsa, o hastayı bastır. 4 doktor varken bütün hastalar basılır. tek doktor varken, bahsi geçen doktorun hastaları bastırılır

  const deleteHasta = (id) => {
    setHastalar(hastalar.filter((x)=>x.id !== id))
  }

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
                <FaTimesCircle style={{color:"red"}} onClick={()=>deleteHasta(hasta.id)}/>
              </div>

            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default HastaListe