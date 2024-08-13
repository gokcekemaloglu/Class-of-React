import styled from 'styled-components';

const CardSSS = styled.div`
  background-color: aquamarine;
  border-radius: 15px;
  margin-bottom: 2rem;
  gap: 2rem;
  padding: 60px;
  display: flex;
  /* flex-direction: ${({umut})=> umut || "row"}; 
  row default olduğundan yazmasak da olur*/
  flex-direction: ${({umut})=> umut};

  /* responsive */

  @media screen and (max-width:${({theme}) => theme.responsive}) {
    flex-direction: column;
    background-color: pink;
}

box-shadow: ${({theme}) => theme.golge};

`;

export default CardSSS;
