import styled from "styled-components"

// resmin olduğu en dış div

export const LoginContainer = styled.div`
    background-image: url("https://picsum.photos/1600/900");
    background-repeat: no-repeat;
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

/* yuvarlak yer */

export const FormContainer = styled.div`
  /* width: 600px; */
  min-width: 600px;
  height: 600px;
  background-color: rgba(0, 173, 181, 0.5);
  border-radius: 50%;
  border: 2px solid #e1f1dd;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

/* yuvarlağın içindeki üstteki küçük resim */

export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`

 /* clarusway başlığı yazan yer */

export const Header = styled.h1`
  color: white;
  font-family: "Girassol", sans-serif;
  font-size: 3rem;
`

/* 3 kutunun olduğu form */

export const StyledForm = styled.form`
  background: pink;
  display: flex;
  flex-direction: column;
`

/* username giriş inputları */

export const StyledInput = styled.input`
  height: 50px;
  font-size: 2rem;
  width: 250px;
  border-radius: 5px;
  font-family: "Girassol", sans-serif;
  /* inputa girilen yazıyı büyük harf yapar */
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 20px;
`

/* login butonu */

export const StyledButton = styled.button`
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  cursor: pointer;
  margin: 1rem;
`
