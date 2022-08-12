import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { useTheme } from 'styled-components';
import { TextSpam } from '../Header/styles';
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
    return (
        <Container>
            <ConfigLabel onPress={() => navigation.navigate('Registers')}>
                <Item>
                    <ItemText>
                        <ItemTextSimple>Configure o seu perfil,</ItemTextSimple>
                        <TextSpam>Kleidson Alves</TextSpam>
                    </ItemText>
                    <Icon
                        name="settings"
                        color={theme.colors.textWhite}
                        size={30}
                    />
                </Item>
            </ConfigLabel>
            <DrawerContentScrollView {...props}>
                <CustomDrawerItem icon="home" name="Home" navigateTo="Home" />
                <CustomDrawerItem
                    icon="file-text-o"
                    name="Registros"
                    navigateTo="Registers"
                />
            </DrawerContentScrollView>
        </Container>
    );
};

export default CustomDrawer;
