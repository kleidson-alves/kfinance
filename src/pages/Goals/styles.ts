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
`;

export const SummarySection = styled.View`
    flex: 0.3;
`;

export const GoalsSection = styled.View`
    flex: 0.6;
`;
