import * as yup from 'yup';

export default async function validateTodo(ctx) {
    try {
        const data = ctx.request.body;
        let schema = yup.object().shape({
            title: yup.string(),
            // completed: yup.boolean(),
        });

        await schema.validate(data);
        return await next();
    } catch (e) {
        ctx.status = 500;
        ctx.body = {
            success: false,
            errors: e.errors,
        }
    }

}

