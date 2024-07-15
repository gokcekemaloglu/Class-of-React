import React, { useState } from 'react'
import Data from "../helper/Data"
import TodoGoster from '../components/TodoGoster'
import TodoEkle from '../components/TodoEkle'

const Home = () => {

    const [doing, setDoing] = useState(JSON.parse(localStorage.getItem("todoList")) || Data)

  return (
    <div>
        <TodoEkle setDoing={setDoing} doing={doing}/>
        <TodoGoster doing={doing} setDoing={setDoing}/>
    </div>
  )
}

export default Home