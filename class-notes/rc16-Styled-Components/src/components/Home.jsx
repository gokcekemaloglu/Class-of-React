import React from 'react'
import DivStyle from './style/ContainerStyle'
import HeaderS, { LinkS } from './style/HeaderStyle'
import ButtonS, { TomatoButton } from './style/ButonStyle'

const Home = () => {
  return (
    <DivStyle>
        <HeaderS>STYLED COMPONENTS</HeaderS>

        <LinkS href="#">LINK</LinkS>

        <ButtonS kemal>TIKLA1</ButtonS>
        <ButtonS ayse>TIKLA2</ButtonS>
        <ButtonS>TIKLA3</ButtonS>


        <TomatoButton>TIKLA4</TomatoButton>
        <TomatoButton halil>TIKLA5</TomatoButton>

    </DivStyle>
  )
}

export default Home