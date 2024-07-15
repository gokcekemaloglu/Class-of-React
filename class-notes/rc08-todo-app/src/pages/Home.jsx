import React, { useState } from 'react'
import Data from "../helper/Data"
import TodoGoster from '../components/TodoGoster'
import TodoEkle from '../components/TodoEkle'

const Home = () => {

    const [doing, setDoing] = useState(Data)

  return (
    <div>
        <TodoEkle setDoing={setDoing} doing={doing}/>
        <TodoGoster doing={doing} setDoing={setDoing}/>
    </div>
  )
}

export default Home