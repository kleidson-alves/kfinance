import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import { Container } from './styles';

interface FloatActionButtonProps {
    action: () => void;
    icon: string;
    color?: string;
}

const FloatActionButton: React.FC<FloatActionButtonProps> = ({
    action,
    icon,
    color,
}: FloatActionButtonProps) => {
    const theme = useTheme();

    return (
        <Container color={color} onPress={action}>
            <Icon name={icon} size={30} color={theme.colors.textWhite} />
        </Container>
    );
};

export default FloatActionButton;
