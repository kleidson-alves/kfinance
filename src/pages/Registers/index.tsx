import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FloatActionButton } from '../../components/Buttons';
import Header from '../../components/Header';
import RegisterList from '../../components/RegisterList';
import {
    Actions,
    Container,
    Content,
    FilterButton,
    FilterIcon,
    FilterInfo,
    FilterInfoText,
} from './styles';

const Registers: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <Header />
            <Content>
                <Actions>
                    <FilterInfo>
                        <FilterInfoText>Todos os registros</FilterInfoText>
                    </FilterInfo>
                    <FilterButton>
                        <FilterIcon name="sliders" size={25} />
                    </FilterButton>
                </Actions>
                <RegisterList />
            </Content>
            <FloatActionButton
                icon="plus"
                action={() => navigation.navigate('NewRegister' as never)}
            />
        </Container>
    );
};

export default Registers;
