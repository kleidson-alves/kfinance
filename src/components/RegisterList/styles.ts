import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../utils/fontSize';

export const Container = styled.FlatList`
    margin-top: 20px;
`;

export const Content = styled.View`
    margin-top: 30px;
`;

export const Month = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
    font-family: ${props => props.theme.fonts.regular};
`;

export const Divider = styled.View`
    width: auto;
    margin-top: 5px;
    height: 2px;
    background-color: ${props => props.theme.colors.stroke};
`;
