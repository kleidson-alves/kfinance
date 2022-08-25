import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../../utils/fontSize';

interface ContainerProps {
    width: number;
}

export const Container = styled(RectButton)<ContainerProps>`
    width: ${props => `${props.width}px`};

    padding: 15px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.colors.primary};
`;

export const ButtonText = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.body)};
    color: ${props => props.theme.colors.background};
`;
