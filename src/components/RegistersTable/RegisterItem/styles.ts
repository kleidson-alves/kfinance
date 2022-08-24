import styled from 'styled-components/native';
import { getFontSizeByValue } from '../../../utils/fontSize';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 15px;
`;

export const Info = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Text = styled.Text`
    color: ${props => props.theme.colors.textBlack};
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => getFontSizeByValue(props.theme.sizes.bodySmall)};
`;

interface TagProps {
    color: 'lazer' | 'comida';
}

const colors = {
    lazer: '#662E9B',
    comida: '#F86624',
};

export const Tag = styled.View<TagProps>`
    width: 14px;
    height: 14px;
    border-radius: 14px;
    background-color: ${props => colors[props.color]};

    margin-right: 5px;
`;
