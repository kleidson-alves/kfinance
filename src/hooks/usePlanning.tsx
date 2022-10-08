import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import database from '../database';
import PlanningModel from '../database/models/planningModel';

interface IPlanning {
    name: string;
    value: number;
    type: string;
}

interface PlanningProviderProps {
    children: ReactNode;
}

interface PlanningContextData {
    plannings: IPlanning[];
    createPlanning: (planning: IPlanning) => Promise<void>;
}

const PlanningContext = createContext<PlanningContextData>(
    {} as PlanningContextData,
);

export function PlanningProvider({ children }: PlanningProviderProps) {
    const [plannings, setPlannings] = useState<IPlanning[]>([]);
    const loadPlannings = useCallback(async () => {
        const allPlannings = await database
            .get<PlanningModel>('plannings')
            .query()
            .fetch();

        setPlannings(allPlannings);
    }, []);

    useEffect(() => {
        loadPlannings();
    }, [loadPlannings]);

    const createPlanning = useCallback(
        async (planning: IPlanning) => {
            await database.write(async () => {
                database.get<PlanningModel>('plannings').create(record => {
                    record.name = planning.name;
                    record.value = planning.value;
                    record.type = planning.type;
                });
            });

            await loadPlannings();
        },
        [loadPlannings],
    );

    return (
        <PlanningContext.Provider value={{ plannings, createPlanning }}>
            {children}
        </PlanningContext.Provider>
    );
}

export function usePlanning() {
    const context = useContext(PlanningContext);

    return context;
}
