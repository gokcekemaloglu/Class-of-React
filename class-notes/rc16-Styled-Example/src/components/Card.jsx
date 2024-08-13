import React from 'react'
import data from "../data"
import ImageSSS from './styles/ImageSSS'
import CardSSS from './styles/CardSSS'

const Card = () => {
  return (
    <div>
        {data.map((item)=>(
            <CardSSS key={item.id} umut={item.id%2 === 1 && "row-reverse"}>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
                <ImageSSS src={`./images/${item.image}`} alt="" />
            </CardSSS>
        ))}
    </div>
  )
}

export default Card