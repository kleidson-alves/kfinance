import React, { useCallback, useEffect, useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import {
    Container,
    Divider,
    ItemContainer,
    ItemContent,
    ItemText,
    ToggleText,
    Toggle,
    ValueText,
} from './styles';
import { formatValue } from '../../utils/formaters';

interface DataProps {
    id: string;
    value: number;
    name: string;
}

interface AccordianProps {
    data: DataProps[];
    title: string;
    active: string;
    setActive: (name: string) => void;
}

const Accordian: React.FC<AccordianProps> = ({
    title,
    data,
    active,
    setActive,
}) => {
    const theme = useTheme();
    const isGain = title === 'Ganhos';

    const [expanded, setExpanded] = useState(false);
    const [total, setTotal] = useState(0);

    const handleExpanded = useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setActive(title);
        setExpanded(prev => !prev);
    }, [setActive, title]);

    useEffect(() => {
        if (active !== title) {
            LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut,
            );

            setExpanded(false);
        }
    }, [active, title]);

    useEffect(() => {
        const ballance = data.reduce((acc, cur) => acc + cur.value, 0);

        setTotal(ballance);
    }, [data]);

    return (
        <Container>
            <TouchableWithoutFeedback onPress={handleExpanded}>
                <Toggle>
                    <ToggleText type="bold">{title}</ToggleText>
                    <ToggleText
                        type="regular"
                        color={
                            isGain
                                ? theme.colors.positive
                                : theme.colors.negative
                        }>
                        {formatValue(total)}
                    </ToggleText>
                </Toggle>
            </TouchableWithoutFeedback>
            {expanded && (
                <>
                    {data.map(item => (
                        <ItemContainer key={item.id}>
                            <ItemContent>
                                <ItemText>{item.name}</ItemText>
                                <ValueText
                                    color={
                                        isGain
                                            ? theme.colors.positive
                                            : theme.colors.negative
                                    }>
                                    {formatValue(item.value)}
                                </ValueText>
                            </ItemContent>
                            <Divider />
                        </ItemContainer>
                    ))}
                </>
            )}
        </Container>
    );
};

export default Accordian;
