import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../../utils/fontSize';

interface ContainerProps {
    width: number;
}

export const Container = styled(RectButton)<ContainerProps>`
    align-items: center;
    justify-content: center;

    width: ${props => `${props.width}px`};

    padding: 15px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 15px;
`;

export const ButtonText = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
    color: ${props => props.theme.colors.background};
`;
