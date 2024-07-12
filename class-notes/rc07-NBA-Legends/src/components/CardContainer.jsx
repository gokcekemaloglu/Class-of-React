import React, { useState } from 'react'
import { data } from '../helper/data'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Player from './Player'

const CardContainer = () => {
    // console.log(data);

    const [arama, setArama] = useState("")

    // react alanında set'i kullanılmayacaksa tekrar useState'e gerek yok

    //! 1.Yol
    // let filtrelenmisData = ""

    // filtrelenmisData = data.filter((a)=>a.name.includes(arama))

    // console.log(filtrelenmisData);

  return (
    <>
        <Form.Control className='w-50 m-auto' type="search" placeholder="Search player..." onChange={(e)=>setArama(e.target.value)}/>

        <Container className='kart-container my-4 p-3 rounded-4'>
            <Row className='g-3'>
                {/* {filtrelenmisData.map((player)=>( */}
                {data.filter((abc)=>abc.name.toLowerCase().includes(arama.toLowerCase())).map((player)=>(
                    <Col key={player.name} md={6} lg={4} xl={3}>
                        <Player {...player}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
  )
}

export default CardContainer