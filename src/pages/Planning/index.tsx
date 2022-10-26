import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { usePlanning } from '../../hooks/usePlanning';

import Accordian from '../../components/Accordian';
import { FloatActionButton } from '../../components/Buttons';
import { Header } from '../../components/Headers';

import { Container, Content } from './styles';

const Planning: React.FC = () => {
    const navigation = useNavigation();
    const { plannings } = usePlanning();

    const [gainPlannings, setGainPlannings] = useState([]);
    const [spentPlannings, setSpentPlannings] = useState([]);
    const [currentAccordian, setCurrentAccordian] = useState('');

    useEffect(() => {
        setGainPlannings(plannings.filter(p => p.type === 'Ganho') as never);
        setSpentPlannings(plannings.filter(p => p.type === 'Gasto') as never);
    }, [plannings]);

    return (
        <Container>
            <Header />
            <Content>
                <Accordian
                    title="Ganhos"
                    active={currentAccordian}
                    setActive={setCurrentAccordian}
                    data={gainPlannings}
                />

                <Accordian
                    title="Gastos"
                    active={currentAccordian}
                    setActive={setCurrentAccordian}
                    data={spentPlannings}
                />
            </Content>
            <FloatActionButton
                icon="plus"
                action={() => navigation.navigate('NewPlanning' as never)}
            />
        </Container>
    );
};

export default Planning;
