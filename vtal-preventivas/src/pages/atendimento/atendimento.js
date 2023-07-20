import React from 'react';
import { useParams } from 'react-router-dom';
import InputSeta from '../../componentes/input-seta';
import Header from '../../componentes/header/header';
import Footer from '../../componentes/footer/footer';

const Atendimentos = () => {
    const { nomeFuncionario } = useParams();

    return (
        <>
        <Header /> 
        <div className="container-atendimentos">
            <h1 className="ola-funcionario">
                Olá, <span className="nome-funcionario"> {nomeFuncionario} </span>! Esses são seus atendimentos do dia:
            </h1>
            <InputSeta />
        </div>
        <Footer />
        </>

    );
}

export default Atendimentos;