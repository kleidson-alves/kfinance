import React from 'react';
import { FloatActionButton } from '../../components/Buttons';
import Header from '../../components/Header';
import {
    Container,
    Content,
    GoalsSection,
    SummarySection,
    Title,
} from './styles';

const Goals: React.FC = () => {
    return (
        <Container>
            <Header />
            <Content>
                <SummarySection>
                    <Title>Resumo</Title>
                </SummarySection>
                <GoalsSection>
                    <Title>Minhas metas</Title>
                </GoalsSection>
                <FloatActionButton icon="plus" action={() => {}} />
            </Content>
        </Container>
    );
};

export default Goals;
