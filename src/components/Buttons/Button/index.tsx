import React from 'react';
import { ButtonText, Container } from './style';

interface ButtonProps {
    width?: number;
    textLabel: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ textLabel, width = 300, onClick }) => {
    return (
        <Container width={width} onPress={onClick}>
            <ButtonText>{textLabel}</ButtonText>
        </Container>
    );
};

export default Button;
