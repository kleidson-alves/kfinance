import { Q } from '@nozbe/watermelondb';
import React, { useCallback, useContext, useState } from 'react';

import { createContext, ReactNode } from 'react';
import database from '../database';
import CategoryModel from '../database/models/categoryModel';

interface CategoryProviderProps {
    children: ReactNode;
}

interface ICategory {
    id: string;
    name: string;
    color: string;
}

interface CategoryContextData {
    categories: ICategory[];
    loadCategories: () => Promise<void>;
    deletAllCategories: () => Promise<void>;
    findGateroyById: (id: string) => Promise<CategoryModel>;
}

const CategoryContext = createContext<CategoryContextData>(
    {} as CategoryContextData,
);

export function CategoryProvider({ children }: CategoryProviderProps) {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const collection = database.get<CategoryModel>('categories');

    const findGateroyById = useCallback(
        async (categoryId: string) => {
            const category = await collection.find(categoryId);

            return category;
        },
        [collection],
    );

    const deletAllCategories = useCallback(async () => {
        database.write(async () => {
            await collection.query().destroyAllPermanently();
        });
    }, [collection]);

    const loadCategories = useCallback(async () => {
        const categoryAlreadyExists = await collection
            .query(Q.where('name', 'Lazer'))
            .fetch();

        if (categoryAlreadyExists.length === 0) {
            database.write(async () => {
                await database.batch(
                    collection.prepareCreate(category => {
                        category.name = 'Lazer';
                        category.color = '#662E9B';
                    }),
                    collection.prepareCreate(category => {
                        category.name = 'Alimentação';
                        category.color = '#F9C80E';
                    }),

                    collection.prepareCreate(category => {
                        category.name = 'Despesa';
                        category.color = '#EA3546';
                    }),

                    collection.prepareCreate(category => {
                        category.name = 'Ganho';
                        category.color = '#A4D604';
                    }),

                    collection.prepareCreate(category => {
                        category.name = 'Outros';
                        category.color = '#43BCCD';
                    }),
                );
            });
        }

        const response = await collection.query().fetch();

        setCategories(response);
    }, [collection]);

    return (
        <CategoryContext.Provider
            value={{
                loadCategories,
                categories,
                deletAllCategories,
                findGateroyById,
            }}>
            {children}
        </CategoryContext.Provider>
    );
}

export function useCategory() {
    const context = useContext(CategoryContext);

    return context;
}
