import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { useTheme } from 'styled-components';
import { TextSpan } from '../Header/styles';
import CustomDrawerItem from './DrawerItem';
import {
    ConfigLabel,
    Container,
    Item,
    ItemText,
    ItemTextSimple,
} from './styles';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
    const theme = useTheme();
    const navigation = useNavigation();

    const [page, setPage] = useState('Home');

    return (
        <Container>
            <ConfigLabel
                onPress={() => navigation.navigate('Registers' as never)}>
                <Item>
                    <ItemText>
                        <ItemTextSimple>Configure o seu perfil,</ItemTextSimple>
                        <TextSpan>Kleidson Alves</TextSpan>
                    </ItemText>
                    <Icon
                        name="settings"
                        color={theme.colors.textWhite}
                        size={30}
                    />
                </Item>
            </ConfigLabel>
            <DrawerContentScrollView {...props}>
                <CustomDrawerItem
                    icon="home"
                    name="Home"
                    navigateTo="Home"
                    setPage={setPage}
                    currentPage={page}
                />
                <CustomDrawerItem
                    icon="file-text-o"
                    name="Registros"
                    navigateTo="Registers"
                    setPage={setPage}
                    currentPage={page}
                />
            </DrawerContentScrollView>
        </Container>
    );
};

export default CustomDrawer;
