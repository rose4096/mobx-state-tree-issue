'use client';

import {createContext, ReactNode, useContext} from "react";
import {flow, Instance, types} from "mobx-state-tree";

const ExampleObject = types.model({
    name: types.string,
    age: types.number,
})

const RootModel = types
    .model({
        users: types.array(ExampleObject),
    })
    .actions(self => {
        const fetchGeralds = flow(function* () {
            try {
                const res = yield fetch('/api')
                const json = yield res.json();
                self.users = json.users;
            } catch (error) {

            }
        })

        return {
            fetchGeralds
        }
    })

export const rootStore = RootModel.create({
    users: [],
})

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;

export function useMst() {
    const store = useContext(RootStoreContext);
    if (store === null) {
        throw new Error("Store cannot be null, please add a context provider");
    }
    return store;
}

export const Provide = ({children}: {children: ReactNode}) => {
    return (
        <Provider value={rootStore}>
            {children}
        </Provider>
    )
}
