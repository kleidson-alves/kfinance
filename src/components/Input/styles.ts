import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../utils/fontSize';

interface TextInputProps {
    isFilled: boolean;
}

export const Container = styled.TextInput<TextInputProps>`
    width: 100%;
    padding: 15px;
    min-height: 60px;

    border: 1.5px solid
        ${props =>
            props.isFilled
                ? props.theme.colors.primary
                : props.theme.colors.stroke};
    margin-bottom: 25px;
    border-radius: 10px;

    font-size: ${props => getFontSizeByValue(props.theme.sizes.input)};
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.primary};
`;
