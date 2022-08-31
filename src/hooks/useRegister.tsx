import { Q } from '@nozbe/watermelondb';
import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import database from '../database';
import CategoryModel from '../database/models/categoryModel';
import RegisterModel from '../database/models/registerModel';

interface RegisterProviderProps {
    children: ReactNode;
}

interface IRegister {
    id: string;
    name: string;
    value: number;
    description?: string;
    date: Date;
    category: CategoryModel;
}
interface CreateRegisterProps {
    name: string;
    value: number;
    description?: string;
    date: Date;
    category: string;
}

interface RegisterContextData {
    registers: IRegister[];
    createRegister: (data: CreateRegisterProps) => Promise<IRegister>;
    loadRegisterByDate: (date: Date) => IRegister[];
}

const RegisterContext = createContext<RegisterContextData>(
    {} as RegisterContextData,
);

export function RegisterProvider({ children }: RegisterProviderProps) {
    const collection = database.get<RegisterModel>('registers');
    const [registers, setRegisters] = useState<IRegister[]>([]);

    const loadRegisters = useCallback(async () => {
        const data = await collection
            .query(
                Q.sortBy('year', Q.desc),
                Q.sortBy('month', Q.desc),
                Q.sortBy('day', Q.desc),
            )
            .fetch();
        const allRegisters: IRegister[] = [];

        for (const r of data) {
            const category = await r.category.fetch();
            const register = {
                id: r.id,
                name: r.name,
                category: category!,
                description: r.description,
                value: r.value,
                date: new Date(r.year, r.month, r.day),
            };

            allRegisters.push(register);
        }

        setRegisters(allRegisters);
    }, [collection]);

    const createRegister = async ({
        name,
        value,
        description,
        date,
        category,
    }: CreateRegisterProps) => {
        const selected_category = await database
            .get<CategoryModel>('categories')
            .query(Q.where('name', category))
            .fetch();

        const newRegisterData = await database.write(async () => {
            const register = await database
                .get<RegisterModel>('registers')
                .create(r => {
                    r.name = name;
                    r.value = value;
                    r.description = description;
                    r.day = date.getDate();
                    r.month = date.getMonth();
                    r.year = date.getFullYear();
                    r.category.set(selected_category[0]);
                });
            return register;
        });

        const newRegister: IRegister = {
            id: newRegisterData.id,
            name: newRegisterData.name,
            category: selected_category[0],
            description: newRegisterData.description,
            value: newRegisterData.value,
            date: new Date(
                newRegisterData.year,
                newRegisterData.month,
                newRegisterData.day,
            ),
        };

        await loadRegisters();

        return newRegister;
    };

    const loadRegisterByDate = useCallback(
        (date: Date) => {
            const registersByDate = registers.filter(
                r =>
                    r.date.getFullYear() === date.getFullYear() &&
                    r.date.getMonth() === date.getMonth(),
            );

            return registersByDate;
        },
        [registers],
    );

    useEffect(() => {
        loadRegisters();
    }, [loadRegisters]);

    return (
        <RegisterContext.Provider
            value={{ registers, createRegister, loadRegisterByDate }}>
            {children}
        </RegisterContext.Provider>
    );
}

export function useRegister() {
    const context = useContext(RegisterContext);

    return context;
}
