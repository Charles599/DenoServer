import { Router, Context } from 'https://deno.land/x/oak/mod.ts';

const router: Router = new Router();
const infoArr: string[] = [];

router.all('/', async ({ response, request }: Context, next: () => Promise<void>) => {
    let reqInfo = `${request.method} ${request.ip.replace(/\d+\.\d+$/g, '*')}`;
    infoArr.push(reqInfo);
    response.body = reqInfo;
    await next();
});

router.get('/log', async ({ response }: Context, next: () => Promise<void>) => {
    response.body = infoArr.join('\n');
    await next();
});

export default router;