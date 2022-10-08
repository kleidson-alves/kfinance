import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

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

export const Actions = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

interface InfoProps {
    color: string;
}

export const FilterInfo = styled.View<InfoProps>`
    padding: 10px;
    border: 1px solid ${props => props.color};
    justify-content: center;
`;

export const FilterInfoText = styled.Text<InfoProps>`
    color: ${props => props.color};
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
`;

export const FilterButton = styled(RectButton)`
    elevation: 5;
    background: ${props => props.theme.colors.background};
    border-radius: 10px;
    padding: 8px;
`;
