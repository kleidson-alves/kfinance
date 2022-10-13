import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../utils/fontSize';

export const Container = styled.View`
    flex: 1;
    background: ${props => props.theme.colors.background};
`;

export const Content = styled.View`
    padding: 40px 20px 20px 20px;
    flex: 1;
`;

export const Title = styled.Text`
    font-size: ${props => getFontSizeByValue(props.theme.sizes.subtitle)};
    color: ${props => props.theme.colors.textBlack};
    font-family: ${props => props.theme.fonts.regular};

    margin-bottom: 15px;
`;

export const SummarySection = styled.View`
    margin: 20px 0;

    flex-direction: row;
    justify-content: space-evenly;
`;

export const SummaryCard = styled.View`
    width: 20%;
    height: 60px;

    padding: 5px;

    margin-left: 20px;
    align-items: center;
    justify-content: space-between;

    border: 1px solid ${props => props.theme.colors.stroke};
`;

export const SummaryCardText = styled.Text`
    font-family: ${props => props.theme.fonts.bold};
    color: ${props => props.theme.colors.textBlack};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.body)};

    margin-bottom: 10px;
`;

export const BodyText = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.textBlack};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};

    margin-bottom: 10px;
`;

export const GoalsSection = styled.View`
    flex: 1;
`;
