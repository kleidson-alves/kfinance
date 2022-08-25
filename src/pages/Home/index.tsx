import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { FloatActionButton } from '../../components/Buttons';
import Header from '../../components/Header';
import RegistersTable from '../../components/RegisterList';
import Summary from '../../components/Summary';

import {
    Container,
    Content,
    LatestsRegistersSection,
    SummarySection,
    Title,
} from './styles';

const Home: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <Header />
            <Content>
                <SummarySection>
                    <Title>Resumo</Title>
                    <Summary />
                </SummarySection>

                <LatestsRegistersSection>
                    <Title>Últimos Registros</Title>

                    <RegistersTable isPreviewMode={true} />
                </LatestsRegistersSection>
            </Content>
            <FloatActionButton
                icon="plus"
                action={() => navigation.navigate('NewRegister' as never)}
            />
        </Container>
    );
};

export default Home;
