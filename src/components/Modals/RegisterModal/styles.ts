import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../../utils/fontSize';

export const Container = styled.View`
    align-self: center;
    background-color: ${props => props.theme.colors.background};
    padding: 15px 30px 30px 30px;
    border-radius: 15px;
    width: 100%;
`;

export const DeleteButton = styled.TouchableOpacity`
    margin-bottom: 20px;

    align-self: flex-end;
`;

export const InfoView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`;

interface BaseTextProps {
    color?: string;
    size: number;
}

export const BaseText = styled.Text<BaseTextProps>`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.size)};
    color: ${props =>
        props.color ? props.color : props.theme.colors.textBlack};
`;

export const RegisterContent = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.subtitle)};
    color: ${props => props.theme.colors.textBlack};
`;

export const Description = styled.Text`
    margin-top: 15px;
    text-align: center;

    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
    color: ${props => props.theme.colors.textBlack};
`;

interface TagProps {
    color: string;
}

export const Tag = styled.View<TagProps>`
    margin-top: 20px;
    align-self: flex-end;

    padding: 8px 15px;
    border-radius: 15px;

    background-color: ${props => props.color};
`;

export const TagText = styled.Text`
    font-family: ${props => props.theme.fonts.bold};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
    color: ${props => props.theme.colors.textWhite};
`;
