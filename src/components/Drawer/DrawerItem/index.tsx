import { DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components';

interface CustomDrawerIntemProps {
    icon: string;
    name: string;
    navigateTo: string;
}

const CustomDrawerItem: React.FC<CustomDrawerIntemProps> = ({
    icon,
    name,
    navigateTo,
}: CustomDrawerIntemProps) => {
    const theme = useTheme();
    const navigation = useNavigation();
    return (
        <DrawerItem
            label={name}
            labelStyle={{
                fontFamily: theme.fonts.regular,
                fontSize: theme.sizes.body,
                color: theme.colors.primary,
            }}
            onPress={() => navigation.navigate(navigateTo)}
            activeBackgroundColor={theme.colors.primary}
            activeTintColor={theme.colors.textWhite}
            icon={() => (
                <Icon name={icon} size={25} color={theme.colors.primary} />
            )}
        />
    );
};

export default CustomDrawerItem;
