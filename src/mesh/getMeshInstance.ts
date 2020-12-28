
import { getMesh } from '@graphql-mesh/runtime';
import ODataHandler from '@graphql-mesh/odata';
import StitchingMerger from '@graphql-mesh/merger-stitching';
import { MeshPubSub, KeyValueCache } from '@graphql-mesh/types';
import { PubSub } from 'graphql-subscriptions';

export function getMeshInstance({ cache, accessToken }: { cache: KeyValueCache; accessToken?: string; }) {
    const pubsub = new PubSub() as MeshPubSub;
    return getMesh({
        sources: [
            {
                name: 'Microsoft Graph',
                handler: new ODataHandler({
                    name: 'Microsoft Graph',
                    cache,
                    pubsub,
                    config: {
                        baseUrl: 'https://graph.microsoft.com/v1.0',
                        batch: 'json',
                        operationHeaders: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    },
                }),
            },
        ],
        cache,
        pubsub,
        merger: StitchingMerger,
    });
}