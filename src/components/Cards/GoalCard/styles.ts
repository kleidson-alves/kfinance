import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../../utils/fontSize';

export const Card = styled.View`
    flex-direction: row;
    justify-content: space-between;

    padding: 10px 0;
`;

export const IconTitleView = styled.View`
    flex-direction: row;

    align-items: center;
`;

export const BodyText = styled.Text`
    margin-left: 10px;

    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
    color: ${props => props.theme.colors.textBlack};
    font-family: ${props => props.theme.fonts.regular};
`;
