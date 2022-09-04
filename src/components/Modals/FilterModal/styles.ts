import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import { getFontSizeByValue } from '../../../utils/fontSize';

export const Container = styled(Modal)``;

export const Content = styled.View`
    width: 100%;
    background-color: ${props => props.theme.colors.background};
    justify-content: center;

    border-radius: 10px;
`;

interface VerticalDividerProps {
    isActive: boolean;
    color: string;
}

export const VerticalDivider = styled.View<VerticalDividerProps>`
    height: ${props => getFontSizeByValue(props.theme.sizes.body + 5)};
    width: 3px;

    background-color: ${props =>
        props.isActive ? props.color : props.theme.colors.stroke};
`;

export const Option = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;

    padding: 15px;
`;

export const OptionText = styled.Text`
    color: #000;
    margin-right: 50px;
    margin-left: 15px;

    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.body)};
`;
