import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../components/Drawer';
import Goals from '../pages/Goals';
import Home from '../pages/Home';
import Planning from '../pages/Planning';
import Registers from '../pages/Registers';

const Drawer = createDrawerNavigator();

const DrawerNav: React.FC = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={CustomDrawer}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Registros" component={Registers} />
            <Drawer.Screen name="Planejamento" component={Planning} />
            <Drawer.Screen name="Metas" component={Goals} />
        </Drawer.Navigator>
    );
};

export default DrawerNav;
