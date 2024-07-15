import React, { useState } from 'react'
import Data from "../helper/Data"
import TodoGoster from '../components/TodoGoster'

const Home = () => {

    const [doing, setDoing] = useState(Data)

  return (
    <div>
        <TodoGoster doing={doing} setDoing={setDoing}/>
    </div>
  )
}

export default Home