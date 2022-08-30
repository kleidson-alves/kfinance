import React, { useEffect, useRef } from 'react';
import { Container } from './styles';

import Logo from '../../assets/logo-big.svg';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCategory } from '../../hooks/useCategory';

const Splash: React.FC = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const { loadCategories } = useCategory();
    const navigate = useNavigation();

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        loadCategories().then(_ =>
            navigate.reset({
                index: 0,
                routes: [{ name: 'Drawer' as never }],
            }),
        );
    }, [opacity, navigate, loadCategories]);

    return (
        <Container style={{ opacity }}>
            <Logo />
        </Container>
    );
};

export default Splash;
