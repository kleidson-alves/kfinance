import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

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

export const FilterInfo = styled.View`
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.primary};
    justify-content: center;
`;

export const FilterInfoText = styled.Text`
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
`;

export const FilterButton = styled(RectButton)`
    elevation: 5;
    background: ${props => props.theme.colors.background};
    border-radius: 10px;
    padding: 8px;
`;

export const FilterIcon = styled(Icon)`
    color: ${props => props.theme.colors.primary};
`;
