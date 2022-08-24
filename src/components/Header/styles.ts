import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../utils/fontSize';

export const Container = styled.View`
    height: 120px;

    background-color: ${props => props.theme.colors.primary};
    z-index: 10;
`;

export const Actions = styled.View`
    flex-direction: row;
    justify-content: space-between;

    padding: 20px;
`;

export const WellcomeBox = styled.View``;

export const WellcomeText = styled.Text`
    color: ${props => props.theme.colors.textWhite};
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.body)};
`;

export const TextSpan = styled.Text`
    color: ${props => props.theme.colors.textWhite};
    font-family: ${props => props.theme.fonts.bold};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.body)};
`;

export const Balance = styled.View`
    width: 50%;
    height: 55px;

    position: absolute;
    bottom: -25px;

    background-color: ${props => props.theme.colors.background};
    elevation: 3;

    border-radius: 15px;
    align-self: center;

    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

interface BalanceSpanProps {
    color: string;
}

export const BalanceSpan = styled.Text<BalanceSpanProps>`
    font-family: ${props => props.theme.fonts.bold};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.body)};

    color: ${props => props.color};
    margin-left: 5px;
`;
