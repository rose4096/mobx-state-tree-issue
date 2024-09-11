'use client';

import {useMst} from "@/app/mst";
import {useEffect} from "react";

export default function Home() {
    const rootStore = useMst();

    useEffect(() => {
        rootStore.fetchGeralds().then(() => {
            console.log('fetched...')
        });
    }, [rootStore])

    return (
        <div>
            <h1>{rootStore.users.length}</h1>
            {rootStore.users.map(user => {
                return (
                    <>
                        <h1>{user.name} - {user.age}</h1>
                    </>
                )
            })}
        </div>
    );
}
