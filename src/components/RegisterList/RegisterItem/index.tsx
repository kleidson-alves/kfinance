import React from 'react';
import { Container, Info, Tag, Text } from './styles';

type Register = {
    id: number;
    name: string;
    price: number;
    type: string;
};

interface RegisterItemProps {
    data: Register;
}

const RegisterItem: React.FC<RegisterItemProps> = ({
    data,
}: RegisterItemProps) => {
    return (
        <Container>
            <Info>
                <Tag color={data.type} />
                <Text>{data.name}</Text>
            </Info>
            <Text>
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(data.price)}
            </Text>
        </Container>
    );
};

export default RegisterItem;
