import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from './routes.ts';
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`App is Listening on 8000`);
await app.listen({port: 8000});