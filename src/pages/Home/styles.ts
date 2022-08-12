import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;

    background-color: ${props => props.theme.colors.background};
`;
export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
`;
