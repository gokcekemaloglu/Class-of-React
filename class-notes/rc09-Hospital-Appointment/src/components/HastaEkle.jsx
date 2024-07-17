import React, { useState } from 'react'

const HastaEkle = () => {
  const [hastaName, setHastaName] = useState("")
  const [hastaTarih, setTarih] = useState("")


  return (
    <div>

      <form>
        <div className="formControl">
          <label htmlFor="text">Hasta Bilgileri</label>
          <input
            type="text"
            id="text"
              
          />
        </div>

        <div className="formControl">
          <label htmlFor="day">Day & Time</label>
          <input
            type="datetime-local"
            id="day"
              
          />
        </div>

        <button type="submit" className="kayit"><span style={{color:"#6a0707"}}>DR ADI</span>ICIN KAYIT OLUSTUR</button>
      </form>
    </div>
  )
}

export default HastaEkle