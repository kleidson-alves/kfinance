import React, { useEffect, useState } from 'react';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
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

interface IconProps {
    [label: string]: string;
}

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
    const theme = useTheme();
    const navigation = useNavigation();

    const pages = props.state.routeNames;
    const [page, setPage] = useState('Home');

    const [icons, setIcons] = useState<IconProps>({});

    useEffect(() => {
        setIcons({
            home: 'home',
            registros: 'file-text-o',
            planejamento: 'money',
        });
    }, []);

    return (
        <Container>
            <ConfigLabel
                onPress={() => navigation.navigate('Registros' as never)}>
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
                {pages.map(p => (
                    <CustomDrawerItem
                        key={p}
                        icon={
                            icons[p.toLocaleLowerCase()]
                                ? icons[p.toLocaleLowerCase()]
                                : 'question'
                        }
                        name={p}
                        setPage={setPage}
                        currentPage={page}
                    />
                ))}
            </DrawerContentScrollView>
        </Container>
    );
};

export default CustomDrawer;
