import React, { useState } from 'react';
import Accordian from '../../components/Accordian';
import Header from '../../components/Header';
import { Container, Content } from './styles';

const Planning: React.FC = () => {
    const [currentAccordian, setCurrentAccordian] = useState('');
    return (
        <Container>
            <Header />
            <Content>
                <Accordian
                    title="Ganhos"
                    active={currentAccordian}
                    setActive={setCurrentAccordian}
                    data={[
                        { id: '1', title: 'Freelance', value: 500 },
                        { id: '2', title: 'Devedores', value: 50 },
                    ]}
                />

                <Accordian
                    title="Gastos"
                    active={currentAccordian}
                    setActive={setCurrentAccordian}
                    data={[
                        { id: '1', title: 'Terno', value: 750 },
                        { id: '2', title: 'Sapato', value: 200 },
                        { id: '3', title: 'PS5', value: 3500 },
                    ]}
                />
            </Content>
        </Container>
    );
};

export default Planning;
