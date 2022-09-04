import React, { useCallback, useEffect, useState } from 'react';
import {
    Container,
    Content,
    Option,
    OptionText,
    VerticalDivider,
} from './styles';

import { useCategory } from '../../../hooks/useCategory';
import { useTheme } from 'styled-components';
import { DEFAULT_CATEGORY_FILTER } from '../../../utils/constants';

interface DataProps {
    id: string;
    name: string;
    color: string;
}

interface FilterModalProps {
    visible: boolean;
    setIsVisible: (value: boolean) => void;
    currentValue: string;
    setCategory: (options: any) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
    visible,
    setIsVisible,
    setCategory,
    currentValue,
}) => {
    const { categories } = useCategory();
    const theme = useTheme();

    const [data, setData] = useState<DataProps[]>([]);

    useEffect(() => {
        setData([
            ...categories,
            {
                id: '1',
                name: DEFAULT_CATEGORY_FILTER,
                color: theme.colors.primary,
            },
        ]);
    }, [categories, theme.colors.primary]);

    const handleSelectItem = useCallback(
        (name: string, color: string) => {
            setCategory({ name, color });

            setIsVisible(false);
        },
        [setCategory, setIsVisible],
    );

    return (
        <Container
            isVisible={visible}
            onBackdropPress={() => setIsVisible(false)}
            backdropOpacity={0.4}>
            <Content>
                {data.map(c => (
                    <Option
                        key={c.id}
                        onPress={() => handleSelectItem(c.name, c.color)}>
                        <VerticalDivider
                            isActive={currentValue === c.name}
                            color={c.color}
                        />
                        <OptionText>{c.name}</OptionText>
                    </Option>
                ))}
            </Content>
        </Container>
    );
};

export default FilterModal;
