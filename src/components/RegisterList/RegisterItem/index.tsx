import React from 'react';

import { Container, Info, Tag, Text, ValueInfo } from './styles';

interface RegisterItemProps {
    data: {
        name: string;
        category: {
            color: string;
        };
        value: number;
    };
}

const RegisterItem: React.FC<RegisterItemProps> = ({ data }) => {
    return (
        <Container>
            <Info>
                <Tag color={data.category.color} />
                <Text>{data.name}</Text>
            </Info>
            <ValueInfo>
                <Text>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(data.value)}
                </Text>
            </ValueInfo>
        </Container>
    );
};

export default RegisterItem;
