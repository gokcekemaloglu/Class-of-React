import React, { useState } from "react";
import { doctorData, hastaData } from "../helper/Data";
import HastaEkle from "../components/HastaEkle";
import HastaListe from "../components/HastaListe";

const Home = () => {
  const [doktorlar, setDoktorlar] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);
  const [tikla, setTikla] = useState(true)

  const doctorClick = (id) => {
    // tıklayıdeğiştir
    setTikla(!tikla)

    // doktorlar dizisinin tıklanan  doktorla te elemanlı yap
    setDoktorlar(tikla ? doktorlar.filter((i)=>i.id === id) : doctorData)
  }

  return (
    <div style={{display: tikla ? "block": "flex", justifyContent:"space-between"}}>
      <div>
        <header className="header">
          <h1>HOSPITAL</h1>

          <div className="dr">
            {doktorlar.map((doc) => (
              <div key={doc.id}>
                <img
                  src={doc.doctorImg}
                  alt=""
                  width="180px"
                  height="150px"
                  className="btn"
                  style={{ backgroundColor: tikla ? "aqua" : "lightgreen"}}
                  onClick={()=>doctorClick(doc.id)}
                />

                <h4
                  style={{
                    backgroundColor: tikla ? "aqua" : "lightgreen",
                    borderLeft: `10px solid ${tikla ? "blue" : "green"}`,
                  }}
                >
                  {doc.doctorName}
                </h4>
              </div>
            ))}
          </div>
        </header>

        {!tikla && (<HastaEkle hastalar={hastalar} setHastalar={setHastalar} doktorlar={doktorlar} />)}

        

      </div>

      <HastaListe hastalar={hastalar} setHastalar={setHastalar} doktorlar={doktorlar} />
    </div>
  );
};

export default Home;
