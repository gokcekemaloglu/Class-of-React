//* ==================== HOOKS ===============================
//! Hook’lar fonksiyonel component’ler icerisinde state’leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler’in
//! kullanimini cok azaltmistir.

import { useState } from "react";
import Events from "../1-events-hooksIntro/Events";


//? React’ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.
//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from “react”;
//* 2. Hook’lar ust seviyede tanimlanmalidir. Yani Hook’lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook’lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook’lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* ============================================================= 



const Hooks = () => {
    const [sayac,setSayac] = useState(0)
    const [kisi, setKisi] = useState({isim:"Mustafa",meslek:"developer",yas:45,renk:"red"})

    const arttir = () => {
        // sayac = sayac + 1 

        setSayac(sayac+1) //sayac=sayac+1
    }

    const[toggle,setToggle]=useState(true)

    //! 1. Yol

    // const changeAll = () => {
    //     if(kisi.isim==="mustafa"){
    //         setKisi({ isim: "erkan",
    //              meslek: "Full-stack", 
    //              yas: 35, 
    //              renk: "green" });
    //     }else{setKisi({
    //       isim: "mustafa",
    //       meslek: "developer",
    //       yas: 45,
    //       renk: "red",
    //     });        
            
    //     }
        
    // }

    const changeAll = () => {

        setToggle(!toggle)

        if(!toggle){
            setKisi({isim:"Mustafa",meslek:"developer",yas:45,renk:"red"})
            
        }else {
            setKisi({isim:"Erkan",meslek:"Fullstack",yas:35,renk:"green"})
        }
        
    }

    const changeName = () =>{

        setKisi({...kisi, isim:"Osman", renk:"blue"})
    }


  return <div className="container text-center">
    <h1>****************************************</h1>

    <h1>USESTATE</h1>
    <h2 className="text-danger">COUNT: {sayac}</h2>

    <button onClick={arttir} className="btn btn-primary">
        ARTTIR
    </button>

    <h1 className="mt-5">USESTATE OBJECT KULLANIMI</h1>
    <div style={{color:kisi.renk}}>
        <h1>{kisi.isim}</h1>
        <h2>{kisi.meslek}</h2>
        <h3>{kisi.yas}</h3>
    </div>

    <button onClick={changeAll} className="btn btn-primary m-2">CHANGEall</button>
    <button onClick={changeName} className="btn btn-info m-2">CHANGEname</button>

    <button className="btn btn-success m-2" onClick={()=>setKisi({...kisi,yas:30})}>CHANGEyas</button>

    <button onClick={()=>setToggle(!toggle)} className="btn btn-secondary">SHOW</button>
    

    {
        toggle && <Events/>  // toggle true ise Event'i bastır, yoksa birşey yapma demek(&& gördün mü solda sağda true olsun hatırla)
    }
    {/* {toggle ? <Events/> : ""}    //2. yol aynı anlamlı*/} 

  </div>
  
}

export default Hooks

