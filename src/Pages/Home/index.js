import React from 'react';
import {
  Container,
  Imagem,
  Titulo,
  Label,
  Input,
  Botao,
  TextoBotao,
} from './styles';
import Logo from '../../assets/logo.png'

export default function Home() {
  return (
    <Container>
      <Imagem src={Logo} />
      <Titulo>Qual é a melhor opção?</Titulo>
      <Label>Álcool (Preço por litro):</Label>
      <Input />
      <Label>Gasolina (Preço por litro):</Label>
      <Input />
      <Botao>
        <TextoBotao>Calcular</TextoBotao>
      </Botao>
    </Container>
  );
}