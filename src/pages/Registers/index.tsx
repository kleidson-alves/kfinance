import React from 'react';
import Header from '../../components/Header';
import { Container, Temp } from './styles';

const Registers: React.FC = () => {
    return (
        <Container>
            <Header />
            <Temp>Página de registro</Temp>
        </Container>
    );
};

export default Registers;
