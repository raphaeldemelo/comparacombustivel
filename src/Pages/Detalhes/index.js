import React from 'react';
import {
    Container,
    Imagem,
    Titulo,
    TextoBotao,
} from './styles';
import gas from '../../assets/gas.png';
import { Link } from 'react-router-dom';

export default function Detalhes() {

    return (
        <Container>
            <Imagem src={gas} />

            <Titulo>Compensa usar Álcool</Titulo>

            <strong>Com os preços:</strong>
            <span>Álcool: R$4.60</span>
            <span>Gasolina: R$7.60</span>

            <Link
                to='/'
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
            >
                <TextoBotao>Calcular novamente</TextoBotao>
            </Link>
        </Container>
    );
}