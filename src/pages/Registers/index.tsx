import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { Container, Temp } from './styles';

const Registers: React.FC = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const id = navigation.getId();

        console.log(id);
    }, [navigation]);

    return (
        <Container>
            <Header />
            <Temp>Página de registro</Temp>
        </Container>
    );
};

export default Registers;
