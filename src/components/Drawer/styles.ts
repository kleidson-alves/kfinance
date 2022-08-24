import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../utils/fontSize';

export const Container = styled.View`
    flex: 1;
`;

export const ConfigLabel = styled(RectButton)`
    height: 12%;
    background-color: ${props => props.theme.colors.primary};
`;

export const Item = styled.View`
    flex-direction: row;
    justify-content: space-between;

    padding: 20px;
`;

export const ItemText = styled.View``;

export const ItemTextSimple = styled.Text`
    color: ${props => props.theme.colors.textWhite};

    font-family: ${props => props.theme.fonts.regular};

    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
`;

export const ItemTextSpan = styled.Text`
    color: ${props => props.theme.colors.textWhite};

    font-family: ${props => props.theme.fonts.bold};

    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
`;
