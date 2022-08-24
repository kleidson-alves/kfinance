import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../utils/fontSize';

export const Container = styled.View`
    flex: 1;

    background-color: ${props => props.theme.colors.background};
`;
export const Content = styled.View`
    flex: 1;
    padding: 40px 20px 20px 20px;
    flex-direction: column;
`;

export const SummarySection = styled.View`
    flex: 0.3;
`;

export const LatestsRegistersSection = styled.View`
    flex: 0.6;
`;

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.subtitle)};
    color: ${props => props.theme.colors.textBlack};
`;
