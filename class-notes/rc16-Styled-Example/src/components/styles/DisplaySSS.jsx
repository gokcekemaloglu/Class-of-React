import styled from 'styled-components';

const DisplaySSS = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* responsive */

  @media screen and (max-width:${({theme}) => theme.responsive}) {
    flex-direction: column;
  }
`;

export default DisplaySSS;
