import { Router } from 'https://deno.land/x/oak/mod.ts';
import { v4 } from 'https://deno.land/std/uuid/mod.ts';

const router = new Router();

router.get('/', ctx => {
    ctx.response.body = 'Deno oak!';
})

router.get('/uuid', ctx => {
    ctx.response.body = `UUID is ${v4.generate()}`;
})

export default router;