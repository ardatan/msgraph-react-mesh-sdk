import { generateSdk } from '@graphql-mesh/cli';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { getMeshInstance } from '../src/mesh/getMeshInstance';
import InmemoryLRUCache from '@graphql-mesh/cache-inmemory-lru';
import { printSchema } from 'graphql';

async function main() {
    const mesh = await getMeshInstance({
        cache: new InmemoryLRUCache(),
    });
    const schemaString = printSchema(mesh.schema);
    mesh.destroy();
    writeFileSync(join(process.cwd(), './schema.graphql'), schemaString, 'utf8');
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
