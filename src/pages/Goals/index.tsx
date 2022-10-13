import React from 'react';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import { FloatActionButton } from '../../components/Buttons';

import { useTheme } from 'styled-components';

import {
    Container,
    Content,
    GoalsSection,
    SummaryCard,
    SummaryCardText,
    SummarySection,
    Title,
} from './styles';

const Goals: React.FC = () => {
    const navigation = useNavigation();
    const theme = useTheme();
    return (
        <Container>
            <Header />
            <Content>
                <SummarySection>
                    <SummaryCard>
                        <Icon
                            name="target"
                            color={theme.colors.primary}
                            size={20}
                        />
                        <SummaryCardText>5</SummaryCardText>
                    </SummaryCard>
                    <SummaryCard>
                        <Icon
                            name="check"
                            color={theme.colors.positive}
                            size={20}
                        />

                        <SummaryCardText>3</SummaryCardText>
                    </SummaryCard>
                    <SummaryCard>
                        <Icon
                            name="x"
                            color={theme.colors.negative}
                            size={20}
                        />

                        <SummaryCardText>1</SummaryCardText>
                    </SummaryCard>
                </SummarySection>
                <GoalsSection>
                    <Title>Minhas metas</Title>
                </GoalsSection>
                <FloatActionButton
                    icon="plus"
                    action={() => navigation.navigate('NewGoal' as never)}
                />
            </Content>
        </Container>
    );
};

export default Goals;
