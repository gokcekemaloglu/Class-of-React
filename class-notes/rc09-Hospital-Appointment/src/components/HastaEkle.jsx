import React, { useState } from 'react'

const HastaEkle = ({hastalar, setHastalar}) => {
  const [hastaName, setHastaName] = useState("")
  const [hastaTarih, setTarih] = useState("")

  const handleSubmitt = (e) => {
    e.preventDefault() // direk submit yapma, önce alttaki kodlara bak
    

  }


  return (
    <div>

      <form onSubmit={handleSubmitt}>
        <div className="formControl">
          <label htmlFor="text">Hasta Bilgileri</label>
          <input
            type="text"
            id="text"
            onChange={(e)=>setHastaName(e.target.value)}
          />
        </div>

        <div className="formControl">
          <label htmlFor="day">Day & Time</label>
          <input
            type="datetime-local"
            id="day"
            onChange={(e)=>setTarih(e.target.value)}
          />
        </div>

        <button type="submit" className="kayit"><span style={{color:"#6a0707"}}>DR ADI</span>ICIN KAYIT OLUSTUR</button>
      </form>
    </div>
  )
}

export default HastaEkle