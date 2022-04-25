import React, { useContext } from 'react';
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

import { UserContext } from '../../Contexts/user';

export default function Home() {

  const { setResultado, precoAlcool, precoGasolina, setPrecoAlcool, setPrecoGasolina } = useContext(UserContext);

  function calcular() {

    const resposta = precoAlcool / precoGasolina;

    if (resposta < 0.7) {
      return setResultado('Álcool')
    } else {
      return setResultado('Gasolina')
    }
  }

  return (
    <Container>
      <Imagem src={Logo} />
      <Titulo>Qual é a melhor opção?</Titulo>
      <Label>Álcool (Preço por litro):</Label>
      <Input
        placeholder='valor do álcool'
        value={precoAlcool}
        onChange={(e) => setPrecoAlcool(e.target.value)}
      />
      <Label>Gasolina (Preço por litro):</Label>
      <Input
        placeholder='valor da gasolina'
        value={precoGasolina}
        onChange={(e) => setPrecoGasolina(e.target.value)}
      />

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
          <TextoBotao onClick={calcular()}>Calcular</TextoBotao>
        </Link>
      </Botao>
    </Container>
  );

}
