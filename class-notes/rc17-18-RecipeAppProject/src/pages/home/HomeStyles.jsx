import styled from "styled-components"

/* arama yapıldığında açılan yiyecek kartlarının kutusu RECİPECARD*/

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* sığmayan taşsın düşsün */
    /* flex-direction: row; */
    justify-content: center;
    

`

/* search den sonra çıkan herbir yiyecek kart RECİPECARD*/

export const Cards = styled.div`    
  height: 300px;
  background: #e1f1dd;
  padding: 5px;
  border-radius: 3px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  box-shadow: 8px 8px 5px black;
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
    /* box-shadow: none özelliğinin yavaşça uygulanmasını sağlar; */
  }
`

 /* kartlardaki yiyeceklerin adları */

export const RecipeHeader = styled.h1`
    font-size: 1.5rem;
    text-align: center;
`

/* kartların içindeki resimler RECİPECARD */

export const RecipeImage = styled.img`
  height: 150px;
  border-radius: 10px;
  border: 2px solid red;
`

 /* view more  buton */

export const RecipeButton = styled.button`
  background-color: #00adb5;
  padding: 5px;
  /* outline: none; */
  height: 2rem;
  border: none;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
`
