import styled from 'styled-components/native';

import DropDownPicker from 'react-native-dropdown-picker';
import { getFontSizeByValue } from '../../utils/fontSize';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
    isFilled: boolean;
}

export const Container = styled(DropDownPicker)<ContainerProps>`
    flex: 1;
    margin-bottom: 20px;
    height: 60px;
    padding: 15px;

    border: 1.5px solid
        ${props =>
            props.isFilled
                ? props.theme.colors.primary
                : props.theme.colors.stroke};
`;

export const ItemContent = styled.View`
    padding: 15px;
    border-radius: 5px;
`;

export const ItemContainer = styled(RectButton)``;

export const ItemText = styled.Text`
    color: ${props => props.theme.colors.primary};

    text-transform: capitalize;

    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.input)};
`;

export const Divider = styled.View`
    width: auto;
    height: 1.5px;
    margin-top: 5px;

    background-color: ${props => props.theme.colors.stroke};
`;
