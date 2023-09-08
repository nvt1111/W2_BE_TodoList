import {
    getAll, add,
    updateById, deleteById,
} from '../database/todoRepository.js';


const getTodos = (ctx) => {
    try {
        const data = getAll()

        ctx.body = {
            data: data
        };
    } catch (e) {
        ctx.status = 404;
        ctx.body = {
            success: false,
            data: [],
            error: e.message
        };
    }
}

const deleteTodoById = (ctx) => {
    try {
        const id = ctx.params.id;
        const newTodos = deleteById(id);
        ctx.body = {
            success: true,
            message: `Todo with ID ${id} has been deleted`,
            data: newTodos
        };
    } catch (e) {
        ctx.status = 404;
        ctx.body = {
            success: false,
            data: [],
            error: e.message
        };
    }
}

const createTodo = async (ctx) => {
    try {
        const data = ctx.request.body

        const newTodos = add(data);

        ctx.body = {
            success: true,
            message: `Todo with ID ${data.id} has been created`,
            data: newTodos
        };

    } catch (e) {
        ctx.status = 404;
        ctx.body = {
            success: false,
            data: [],
            error: e.message
        };
    }
}


const updateTodoById = (ctx) => {
    try {
        const id = ctx.params.id;

        const data = updateById(id);

        ctx.body = {
            success: true,
            message: `Todo with ID ${id} has been UPDATE`,
            data: data
        };
    } catch (e) {
        ctx.status = 404;
        ctx.body = {
            success: false,
            data: [],
            error: e.message
        };
    }
}

export default {
    updateTodoById,
    createTodo,
    getTodos,
    deleteTodoById
}

