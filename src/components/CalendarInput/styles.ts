import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../utils/fontSize';

interface ContainerProps {
    isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    border: 1.5px solid
        ${props =>
            props.isFilled
                ? props.theme.colors.primary
                : props.theme.colors.stroke};
    border-radius: 15px;
`;

export const DateButton = styled(RectButton)`
    flex: 1;
    justify-content: center;
    padding: 15px;
`;

interface TextSpanProps {
    isFilled: boolean;
}

export const TextSpan = styled.Text<TextSpanProps>`
    opacity: ${props => (props.isFilled ? 1 : 0.4)};
    color: ${props =>
        props.isFilled
            ? props.theme.colors.primary
            : props.theme.colors.textBlack};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.input)};
    font-family: ${props => props.theme.fonts.regular};
`;
