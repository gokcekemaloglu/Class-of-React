import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CardDetails = () => {
    // butonlarda navigate'i kullanacağız
    const navigate = useNavigate()
    const{state:{a}}=useLocation()


  return (
    <div className="container text-center mt-4">
        <div>
            <h3>{a.name}</h3>
            <img src={a.img} alt="" width="400px"/>
            <h3>{a.text}</h3>
            <h4 className='text-danger'>{a.yorum}</h4>
        </div>
        <div>
            <button onClick={()=> navigate(-1)} className='btn btn-warning'>GO BACK</button>
            <button onClick={()=> navigate("/")} className='btn btn-primary'>GO HOME</button>
        </div>
    </div>
  )
}

export default CardDetails


//!!!!!!1.yol
// import {  useNavigate, useParams } from 'react-router-dom'
// import data from "../data"
// const CardDetails = () => {
//   //router dan path olarak gelen namee burada useParams hook u ile yakalandı
//   const {namee}=   useParams()


//  //tekrar bir önceki sayfaya dönebilmek için useNavigate
// const navigate=useNavigate()


//   return (
//     <div className="container text-center mt-4">
//      {data.map(
//         ({ name, text, yorum, img }) =>
//           name === namee && ( 
//             <div>
//               <h3>{name}</h3>
//               <img src={img} alt="" width="300px" />
//               <h3>{text} </h3>
//               <h4>{yorum} </h4>
//               <div>
//                 <button
//                   className="btn btn-warning"
//                   onClick={() => navigate(-1)}
//                 >
//                   GO BACK
//                 </button>
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => navigate("/")}
//                 >
//                   GO HOME
//                 </button>
//               </div>
//             </div>
//            )
//       )} 
//     </div>
//   );
// }

// export default CardDetails

