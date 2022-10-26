import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';
import IIcon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { BodyText, Card, IconTitleView } from './styles';

interface GoalCardProps {
    type: string;
    category?: string;
    isComplete: boolean;
}

const GoalCard: React.FC<GoalCardProps> = ({ type, category, isComplete }) => {
    const theme = useTheme();

    return (
        <Card>
            <IconTitleView>
                <IIcon
                    name="game-controller-outline"
                    size={20}
                    color={
                        isComplete
                            ? theme.colors.positive
                            : theme.colors.darkStroke
                    }
                />
                <BodyText>{type}</BodyText>
            </IconTitleView>
            {category && <BodyText>Lazer</BodyText>}
            <RectButton onPress={() => console.log('Hello World')}>
                <Icon name="edit" size={20} color={theme.colors.primary} />
            </RectButton>
        </Card>
    );
};

export default GoalCard;
