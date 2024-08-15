import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles'
import mealPhoto from "../../assets/meal.svg"

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealPhoto}/>
        <Header>{"<Clarusway/>"} Recipe</Header>
        <StyledForm>
          <StyledInput type="text" placeholder="username" required/>
          <StyledInput type="password" placeholder="password" required/>
          <StyledButton>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login