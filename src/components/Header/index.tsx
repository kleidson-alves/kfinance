import React from 'react';
import {
    Actions,
    Balance,
    BalanceSpan,
    Container,
    TextSpan,
    WellcomeBox,
    WellcomeText,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

Icon.loadFont();

const Header: React.FC = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    return (
        <Container>
            <Actions>
                <TouchableWithoutFeedback
                    onPress={() =>
                        navigation.dispatch(DrawerActions.openDrawer)
                    }>
                    <Icon
                        name="menu"
                        size={30}
                        color={theme.colors.textWhite}
                    />
                </TouchableWithoutFeedback>
                <WellcomeBox>
                    <WellcomeText>Seja bem-vindo</WellcomeText>
                    <TextSpan>Kleidson Alves</TextSpan>
                </WellcomeBox>
            </Actions>

            <Balance>
                <Icon
                    name="arrow-up-circle"
                    color={theme.colors.positive}
                    size={30}
                />
                <BalanceSpan color={theme.colors.positive}>
                    R$ 200,00
                </BalanceSpan>
            </Balance>
        </Container>
    );
};

export default Header;
