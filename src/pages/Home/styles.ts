import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.orange};
`;
export const Title = styled.Text`
    color: ${props => props.theme.colors.textWhite};
    font-family: ${props => props.theme.fonts.regular};
`;
