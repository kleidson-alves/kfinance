import React, { useCallback, useState } from 'react';
import { formatValue } from '../../../utils/formaters';
import RegisterModal from '../../RegisterModal';

import { Container, Info, Tag, Text, ValueInfo } from './styles';

interface RegisterItemProps {
    data: {
        id: string;
        name: string;
        category: {
            color: string;
        };
        value: number;
    };
}

const RegisterItem: React.FC<RegisterItemProps> = ({ data }) => {
    const [isVisibleModalRegister, setIsVisibleModalRegister] = useState(false);
    const handleSelectItem = useCallback(() => {
        setIsVisibleModalRegister(true);
    }, []);

    return (
        <Container onPress={handleSelectItem}>
            <RegisterModal
                isVisible={isVisibleModalRegister}
                registerId={data.id}
                setIsVisible={setIsVisibleModalRegister}
            />
            <Info>
                <Tag color={data.category.color} />
                <Text>{data.name}</Text>
            </Info>
            <ValueInfo>
                <Text>{formatValue(data.value)}</Text>
            </ValueInfo>
        </Container>
    );
};

export default RegisterItem;
