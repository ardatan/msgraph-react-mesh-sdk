import { serveMesh } from '@graphql-mesh/cli';
import { getMeshInstance } from '../src/mesh/getMeshInstance';
import InmemoryLRUCache from '@graphql-mesh/cache-inmemory-lru';

async function main() {
    const mesh = await getMeshInstance({
        cache: new InmemoryLRUCache(),
    });
    await serveMesh(console as any, mesh.schema, mesh.contextBuilder, mesh.pubsub, {});
    mesh.destroy();
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
