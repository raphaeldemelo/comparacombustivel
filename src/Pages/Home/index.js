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
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

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
        <Link
          style={{
            padding: 10,
            border: 'none',
            borderRadius: 8,
            backgroundColor: '#202020',
            cursor: 'pointer',
            marginTop: 20,
            width: '30%',
            textAlign: 'center',
            textDecoration: 'none',
          }}
          to="/detalhes">
          <TextoBotao>Calcular</TextoBotao>
        </Link>
      </Botao>
    </Container>
  );
}