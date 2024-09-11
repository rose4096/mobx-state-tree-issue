'use client';

import {useMst} from "@/app/mst";
import {observer} from "mobx-react-lite";
import {useEffect} from "react";


const Home = observer(() => {
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
                    <div key={user.name}> {/* Add key to avoid warning */}
                        <h1>{user.name} - {user.age}</h1>
                    </div>
                )
            })}
        </div>
    );
});

export default Home;