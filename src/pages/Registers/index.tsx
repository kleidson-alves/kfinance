import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { FloatActionButton } from '../../components/Buttons';
import { Header } from '../../components/Headers';
import RegisterList from '../../components/RegisterList';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Actions,
    Container,
    Content,
    FilterButton,
    FilterInfo,
    FilterInfoText,
} from './styles';
import { FilterModal } from '../../components/Modals';
import { useTheme } from 'styled-components';
import { DEFAULT_CATEGORY_FILTER } from '../../utils/constants';

interface CategoryFilterProps {
    name: string;
    color: string;
}

const Registers: React.FC = () => {
    const navigation = useNavigation();
    const theme = useTheme();

    const [filterModalIsVisible, setFilterModalIsVisible] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState<CategoryFilterProps>({
        name: DEFAULT_CATEGORY_FILTER,
        color: theme.colors.primary,
    });
    const [filterInfo, setFilterInfo] = useState('Todos os registros');

    useEffect(() => {
        if (categoryFilter.name === DEFAULT_CATEGORY_FILTER) {
            setFilterInfo('Todos os registros');
        } else {
            setFilterInfo(`Registros de ${categoryFilter.name}`);
        }
    }, [categoryFilter]);

    return (
        <Container>
            <Header />
            <Content>
                <FilterModal
                    visible={filterModalIsVisible}
                    setIsVisible={setFilterModalIsVisible}
                    setCategory={setCategoryFilter}
                    currentValue={categoryFilter.name}
                />
                <Actions>
                    <FilterInfo color={categoryFilter.color}>
                        <FilterInfoText color={categoryFilter.color}>
                            {filterInfo}
                        </FilterInfoText>
                    </FilterInfo>
                    <FilterButton onPress={() => setFilterModalIsVisible(true)}>
                        <Icon
                            name="sliders"
                            size={25}
                            color={categoryFilter.color}
                        />
                    </FilterButton>
                </Actions>
                <RegisterList filterBy={categoryFilter.name} />
            </Content>
            <FloatActionButton
                icon="plus"
                action={() => navigation.navigate('NewRegister' as never)}
            />
        </Container>
    );
};

export default Registers;
