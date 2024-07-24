import React from 'react'
import notFound from "../img/notFound.jpeg"
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <Container className="text-center">
      <img src={notFound} alt="" width="500px" />
      <div>
        <button onClick={()=>navigate("/")} className="btn btn-info" >
          GO HOME
        </button>
      </div>
    </Container>
  )
}

export default NotFound