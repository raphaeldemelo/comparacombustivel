import React, { useContext, useEffect, useState } from 'react';
import {
    Container,
    Imagem,
    Titulo,
    Botao,
    TextoBotao,
} from './styles';
import gas from '../../assets/gas.png';
import { Link } from 'react-router-dom';

import { UserContext } from '../../Contexts/user';

export default function Detalhes() {

    const { precoAlcool, setPrecoAlcool, precoGasolina, setPrecoGasolina, resultado } = useContext(UserContext);

    function CalcularNovamente() {
        setPrecoAlcool('');
        setPrecoGasolina('');
    }
    return (
        <Container>
            <Imagem src={gas} />

            <Titulo>Compensa usar {resultado}</Titulo>

            <strong>Com os preços:</strong>
            <span>Álcool: R${precoAlcool}</span>
            <span>Gasolina: R${precoGasolina}</span>

            <Botao onClick={CalcularNovamente}>
                <Link
                    to='/'
                    style={{
                        textDecoration: 'none',
                    }}
                >
                    <TextoBotao>Calcular novamente</TextoBotao>
                </Link>
            </Botao>
        </Container>
    );
}