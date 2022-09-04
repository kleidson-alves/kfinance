import React, { useCallback, useEffect, useState } from 'react';
import { useRegister } from '../../hooks/useRegister';
import {
    DEFAULT_CATEGORY_FILTER,
    MAX_ITEMS_PREVIEW_MODE,
    MONTHS,
} from '../../utils/constants';

import RegisterItem from './RegisterItem';

import { List, Content, Divider, HeaderTable, Month, Year } from './styles';

interface RegisterProps {
    name: string;
    id: string;
    category: {
        color: string;
    };
    value: number;
}

interface RegistersListProps {
    isPreviewMode?: boolean;
    filterBy?: string;
}

const RegistersList: React.FC<RegistersListProps> = ({
    isPreviewMode = false,
    filterBy = DEFAULT_CATEGORY_FILTER,
}) => {
    const { registers } = useRegister();
    const [data, setData] = useState<any>();

    const allowNewHeaderTable = useCallback(
        (index: number) => {
            if (isPreviewMode || !registers[index]) {
                return false;
            }
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
        [isPreviewMode, registers],
    );

    useEffect(() => {
        if (isPreviewMode) {
            const array = registers.filter((register, index) => {
                const currentDate = new Date();
                if (
                    index < MAX_ITEMS_PREVIEW_MODE &&
                    register.date.getFullYear() === currentDate.getFullYear() &&
                    register.date.getMonth() === currentDate.getMonth()
                ) {
                    return register;
                }
            });

            setData(array);
        } else if (filterBy !== DEFAULT_CATEGORY_FILTER) {
            setData(registers.filter(r => r.category.name === filterBy));
        } else {
            setData(registers);
        }
    }, [filterBy, isPreviewMode, registers]);

    return (
        <Content>
            <List
                data={data}
                renderItem={({ item, index }) => (
                    <>
                        {allowNewHeaderTable(index) && (
                            <>
                                <HeaderTable>
                                    <Month>
                                        {
                                            MONTHS[
                                                registers[index].date.getMonth()
                                            ]
                                        }
                                    </Month>
                                    <Year>
                                        {registers[index].date.getFullYear()}
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
    );
};

export default RegistersList;
