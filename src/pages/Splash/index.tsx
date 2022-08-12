import React, { useEffect, useRef } from 'react';
import { Container } from './styles';

import Logo from '../../assets/logo-big.svg';
import { Animated } from 'react-native';

const Splash: React.FC = () => {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [opacity]);

    return (
        <Container style={{ opacity }}>
            <Logo />
        </Container>
    );
};

export default Splash;
