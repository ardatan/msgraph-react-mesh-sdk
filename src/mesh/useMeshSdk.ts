import { getMeshInstance } from './getMeshInstance';
import LocalforageCache from '@graphql-mesh/cache-localforage';
import { getSdk, Sdk } from './sdk';
import { useEffect, useState } from 'react';

export function useMeshSdk({ accessToken }: { accessToken?: string }) {
    const [meshSdk, setMeshSdk] = useState<Sdk>();
    useEffect(() => {
        getMeshInstance({
            cache: new LocalforageCache(),
            accessToken,
        }).then(mesh => {
            setMeshSdk(getSdk(mesh.sdkRequester));
        });
    }, [accessToken]);
    return meshSdk;
}