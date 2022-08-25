import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Action, BackArrow, Container, Title } from './styles';

interface SimpleHeaderProps {
    title: string;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({ title }) => {
    const navigate = useNavigation();

    return (
        <Container>
            <Action onPress={() => navigate.goBack()}>
                <BackArrow name="arrow-left" size={30} />
            </Action>
            <Title>{title}</Title>
        </Container>
    );
};

export default SimpleHeader;
