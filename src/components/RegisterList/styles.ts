import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../utils/fontSize';

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const Content = styled.View``;

export const Month = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
    font-family: ${props => props.theme.fonts.regular};
`;

export const HeaderTable = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Year = styled.Text`
    color: #b8bdb5;
    font-size: ${getFontSizeByValue(12)};
    font-family: ${props => props.theme.fonts.regular};
`;

export const Divider = styled.View`
    width: auto;
    margin-top: 5px;
    margin-bottom: 10px;
    height: 2px;
    background-color: ${props => props.theme.colors.stroke};
`;
