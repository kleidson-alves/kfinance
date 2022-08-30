import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../../utils/fontSize';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 15px;
`;

export const Info = styled.View`
    flex: 2.5;
    flex-direction: row;
    align-items: center;
`;

export const ValueInfo = styled.View`
    /* flex: 1; */
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: ${props => props.theme.colors.textBlack};
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
`;

interface TagProps {
    color: string;
}

export const Tag = styled.View<TagProps>`
    width: 14px;
    height: 14px;
    border-radius: 14px;

    background-color: ${props => props.color};

    margin-right: 13px;
`;
