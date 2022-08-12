import React from 'react';
import Header from '../../components/Header';
import { Container, Title } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <Title>Hello World</Title>
        </Container>
    );
};

export default Home;
