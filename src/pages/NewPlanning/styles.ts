import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../utils/fontSize';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`;

export const Form = styled.View`
    margin-top: 30px;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
`;

export const InfoArea = styled.View`
    width: 100%;
    padding: 20px;
    margin-bottom: 40px;
    margin-top: 20px;
    background-color: ${props => props.theme.colors.stroke};
    border-radius: 15px;
`;

export const InfoText = styled.Text`
    color: ${props => props.theme.colors.textBlack};
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
`;

export const Gap = styled.View`
    margin-top: 60px;
`;
