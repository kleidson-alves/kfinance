import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`;

export const Form = styled.View`
    padding: 20px;
    justify-content: center;
    align-items: center;
`;
