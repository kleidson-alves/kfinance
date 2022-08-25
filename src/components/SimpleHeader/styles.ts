import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { getFontSizeByValue } from '../../utils/fontSize';

export const Container = styled.View`
    padding: 20px;
`;

export const Action = styled(TouchableWithoutFeedback)``;

export const BackArrow = styled(Icon)`
    color: ${props => props.theme.colors.primary};
`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.textBlack};
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.subtitle)};
    align-self: center;
`;
