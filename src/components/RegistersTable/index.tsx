import React from 'react';
import RegisterItem from './RegisterItem';
import { Container } from './styles';

type RegisterProps = {
    id: number;
    type: string;
    name: string;
    price: number;
};

interface RegistersTableProps {
    isPreviewMode?: boolean;
}

const RegistersTable: React.FC<RegistersTableProps> = ({
    isPreviewMode = false,
}) => {
    const registers: RegisterProps[] = [
        {
            id: 1,
            type: 'comida',
            name: 'Vila Tarego',
            price: 36,
        },
        {
            id: 2,
            type: 'lazer',
            name: 'Vila Butiquim',
            price: 60,
        },
        {
            id: 3,
            type: 'lazer',
            name: 'Vila Tarego',
            price: 36,
        },
        {
            id: 4,
            type: 'lazer',
            name: 'Vila Butiquim',
            price: 60,
        },
        {
            id: 5,
            type: 'comida',
            name: 'Vila Tarego',
            price: 36,
        },
        {
            id: 6,
            type: 'lazer',
            name: 'Vila Butiquim',
            price: 60,
        },
        {
            id: 7,
            type: 'lazer',
            name: 'Vila Tarego',
            price: 36,
        },
        {
            id: 8,
            type: 'comida',
            name: 'Vila Butiquim',
            price: 60,
        },
        {
            id: 9,
            type: 'lazer',
            name: 'Vila Tarego',
            price: 36,
        },
    ];

    return (
        <Container
            data={
                isPreviewMode
                    ? registers.filter((register, index) => {
                          if (index < 8) {
                              return register;
                          }
                      })
                    : registers
            }
            renderItem={({ item }) => <RegisterItem data={item} />}
        />
    );
};

export default RegistersTable;
