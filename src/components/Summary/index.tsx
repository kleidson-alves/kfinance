import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import { useRegister } from '../../hooks/useRegister';
import { formatValue } from '../../utils/formaters';

import { Container, SummaryItem, SummaryItemText } from './styles';

const Summary: React.FC = () => {
    const theme = useTheme();
    const [positiveBallance, setPositiveBallance] = useState(0);
    const [negativeBallance, setNegativeBallance] = useState(0);

    const { getRegistersByDate } = useRegister();

    useEffect(() => {
        const registers = getRegistersByDate(new Date());

        const ballance = registers.reduce(
            (acc, cur) => {
                if (cur.category.isPositive) {
                    acc.positive += cur.value;
                } else {
                    acc.negative += cur.value;
                }

                return acc;
            },
            {
                positive: 0,
                negative: 0,
            },
        );

        setPositiveBallance(ballance.positive);
        setNegativeBallance(ballance.negative);
    }, [getRegistersByDate]);

    return (
        <Container>
            <SummaryItem>
                <Icon
                    name="arrow-up-circle"
                    size={20}
                    color={theme.colors.positive}
                />
                <SummaryItemText>
                    {formatValue(positiveBallance)}
                </SummaryItemText>
            </SummaryItem>
            <SummaryItem>
                <Icon
                    name="arrow-down-circle"
                    size={20}
                    color={theme.colors.negative}
                />
                <SummaryItemText>
                    {formatValue(negativeBallance)}
                </SummaryItemText>
            </SummaryItem>
            <SummaryItem>
                <Icon name="target" size={20} color={theme.colors.positive} />
                <SummaryItemText>Controle de gastos</SummaryItemText>
            </SummaryItem>
        </Container>
    );
};

export default Summary;
