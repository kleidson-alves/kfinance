import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';

import { Container, SummaryItem, SummaryItemText } from './styles';

const Summary: React.FC = () => {
    const theme = useTheme();

    return (
        <Container>
            <SummaryItem>
                <Icon
                    name="arrow-up-circle"
                    size={20}
                    color={theme.colors.positive}
                />
                <SummaryItemText>R$ 1475,00</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
                <Icon
                    name="arrow-down-circle"
                    size={20}
                    color={theme.colors.negative}
                />
                <SummaryItemText>R$ 1275,00</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
                <Icon name="target" size={20} color={theme.colors.positive} />
                <SummaryItemText>Controle de gastos</SummaryItemText>
            </SummaryItem>
        </Container>
    );
};

export default Summary;
