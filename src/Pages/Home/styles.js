import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
flex-direction: column;
`;

export const Imagem = styled.img`
`;

export const Titulo = styled.h1`

`;
export const Label = styled.strong`

:nth-of-type(2) {
margin-top: 20px;
}
`;
export const Input = styled.input`
border-radius: 8px;
border: none;
height: 30px;
padding: 5px;
margin-top: 3px;
width: 30%;
`;
export const Botao = styled.button`
padding: 10px;
border: none;
border-radius: 8px;
background-color: #202020;
cursor: pointer;
margin-top: 20px;
width: 30%;
`;
export const TextoBotao = styled.span`
color: #fff;
font-weight: bold;
`;
