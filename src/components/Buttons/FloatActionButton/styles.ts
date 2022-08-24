import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface Props {
    color?: string;
}

export const Container = styled(RectButton)<Props>`
    position: absolute;
    bottom: 20px;
    right: 20px;

    elevation: 4;
    z-index: 10;

    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-color: ${props =>
        props.color ? props.color : props.theme.colors.primary};

    justify-content: center;
    align-items: center;
`;
