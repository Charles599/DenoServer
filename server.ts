import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './routes.ts';

const app: Application = new Application();

app.use(router.routes(), router.allowedMethods());

console.log(`App is Listening on port 8000!`);
await app.listen({port: 8000});