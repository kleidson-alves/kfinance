import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../../utils/fontSize';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
`;

interface ItemRadioProps {
    isActive: boolean;
}

export const Label = styled.View<ItemRadioProps>`
    background-color: ${props =>
        props.isActive
            ? props.theme.colors.primary
            : props.theme.colors.background};

    border: ${props =>
        props.isActive ? '0px' : `1px solid ${props.theme.colors.primary}`};

    padding: 15px 50px;
    border-radius: 15px;
`;

export const LabelText = styled.Text<ItemRadioProps>`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.body)};
    color: ${props =>
        props.isActive
            ? props.theme.colors.textWhite
            : props.theme.colors.primary};
`;
