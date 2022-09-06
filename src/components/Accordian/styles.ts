import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../utils/fontSize';

export const Container = styled.ScrollView``;

export const Toggle = styled.View`
    background-color: ${props => props.theme.colors.stroke};
    padding: 20px;

    margin-bottom: 20px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-radius: 15px;
`;

interface ToggleTextProps {
    color?: string;
    type: 'bold' | 'regular';
}

export const ToggleText = styled.Text<ToggleTextProps>`
    font-size: ${props => getFontSizeByValue(props.theme.sizes.body)};

    font-family: ${props =>
        props.type === 'bold'
            ? props.theme.fonts.bold
            : props.theme.fonts.regular};

    color: ${props =>
        props.color ? props.color : props.theme.colors.textBlack};
`;

export const ItemContainer = styled.View`
    padding: 0 15px;
    margin: 10px 0;
`;

export const ItemContent = styled.View`
    flex-direction: row;

    padding: 0 5px;

    justify-content: space-between;
`;

export const ItemText = styled.Text`
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.primary};
`;

interface ValueTextProps {
    color: string;
}

export const ValueText = styled.Text<ValueTextProps>`
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.color};
`;

export const Divider = styled.View`
    width: 100%;
    height: 2px;

    margin-top: 5px;

    background-color: ${props => props.theme.colors.stroke};
`;
