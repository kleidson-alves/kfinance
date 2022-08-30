import React, { useCallback } from 'react';
import { useRegister } from '../../hooks/useRegister';
import { MAX_ITEMS_PREVIEW_MODE, MONTHS } from '../../utils/constants';
import RegisterItem from './RegisterItem';

import { List, Content, Divider, HeaderTable, Month, Year } from './styles';

interface RegisterProps {
    name: string;
    category: {
        color: string;
    };
    value: number;
}

interface RegistersListProps {
    isPreviewMode?: boolean;
}

const RegistersList: React.FC<RegistersListProps> = ({
    isPreviewMode = false,
}) => {
    const { registers } = useRegister();

    const allowNewHeaderTable = useCallback(
        (index: number) => {
            if (index === 0) {
                return true;
            }

            const registerYear = registers[index].date.getFullYear();
            const lastRegisterYear = registers[index - 1].date.getFullYear();

            const registerMonth = registers[index].date.getMonth();
            const lastRegisterMonth = registers[index - 1].date.getMonth();

            if (
                registerYear === lastRegisterYear &&
                registerMonth === lastRegisterMonth
            ) {
                return false;
            }

            return true;
        },
        [registers],
    );

    return (
        <>
            {isPreviewMode ? (
                <List
                    data={registers.filter((register, index) => {
                        const currentDate = new Date();
                        if (
                            index < MAX_ITEMS_PREVIEW_MODE &&
                            register.date.getFullYear() ===
                                currentDate.getFullYear() &&
                            register.date.getMonth() === currentDate.getMonth()
                        ) {
                            return register;
                        }
                    })}
                    renderItem={({ item }) => (
                        <RegisterItem data={item as RegisterProps} />
                    )}
                />
            ) : (
                <Content>
                    <List
                        data={registers}
                        renderItem={({ item, index }) => (
                            <>
                                {allowNewHeaderTable(index) && (
                                    <>
                                        <HeaderTable>
                                            <Month>
                                                {
                                                    MONTHS[
                                                        registers[
                                                            index
                                                        ].date.getMonth()
                                                    ]
                                                }
                                            </Month>
                                            <Year>
                                                {registers[
                                                    index
                                                ].date.getFullYear()}
                                            </Year>
                                        </HeaderTable>
                                        <Divider />
                                    </>
                                )}
                                <RegisterItem data={item as RegisterProps} />
                            </>
                        )}
                    />
                </Content>
            )}
        </>
    );
};

export default RegistersList;
