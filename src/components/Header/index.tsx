import React, { useCallback, useEffect, useState } from 'react';
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
import { useRegister } from '../../hooks/useRegister';
import { formatValue } from '../../utils/formaters';

Icon.loadFont();

const Header: React.FC = () => {
    const [ballance, setBallance] = useState(0);
    const [color, setColor] = useState('#E53030');
    const theme = useTheme();
    const navigation = useNavigation();
    const { getRegistersByDate } = useRegister();

    const calculateBallance = useCallback(async () => {
        const registers = getRegistersByDate(new Date());

        const value = registers.reduce((acc, cur) => {
            if (cur.category.isPositive) {
                return (acc += cur.value);
            } else {
                return (acc -= cur.value);
            }
        }, 0);

        if (value >= 0) {
            setColor(theme.colors.positive);
        } else {
            setColor(theme.colors.negative);
        }

        setBallance(value);
    }, [getRegistersByDate, theme]);

    useEffect(() => {
        calculateBallance();
    }, [calculateBallance]);

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
                <Icon name="arrow-up-circle" color={color} size={30} />
                <BalanceSpan color={color}>{formatValue(ballance)}</BalanceSpan>
            </Balance>
        </Container>
    );
};

export default Header;
