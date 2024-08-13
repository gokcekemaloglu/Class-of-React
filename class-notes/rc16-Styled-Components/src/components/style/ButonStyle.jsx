import styled from 'styled-components';

const ButtonS = styled.button`
color: ${({kemal}) => kemal ? "blue" : "red"};
background-color: ${({kemal, ayse}) => kemal ? "lightblue" : ayse ? "blue" : "brown"};
cursor: pointer;
padding: 1rem 1.5rem;
font-family: "Tahoma";

&:hover{
    transform: scale(0.90);
}

`;

export const TomatoButton = styled(ButtonS)`

width: ${({halil}) => halil ? "400px" : "300px"};
background-color: aquamarine;
color: tomato;

`;


export default ButtonS;
