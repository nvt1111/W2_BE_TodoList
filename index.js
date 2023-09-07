import Koa from 'koa';
import { koaBody } from 'koa-body';
import routes from './routes/routes.js';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

const app = new Koa();

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(koaBody());
app.use(routes.routes());
app.use(routes.allowedMethods());
app.use(bodyParser());

app.listen(3001, () => {
    console.log('Server is running http://localhost:3001')
})