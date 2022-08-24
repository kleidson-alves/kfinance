import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../utils/fontSize';

export const Container = styled.View``;

export const SummaryItem = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

export const SummaryItemText = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
    color: ${props => props.theme.colors.textBlack};
    margin-left: 10px;
`;
