import { writeFileSync, readFileSync } from '../helpers/writeAndReadFileSync.js';

const todos = readFileSync();

export function getAll() {
    let result = [...todos];
    return result;
}


export function add(data) {
    const todo = { id: parseInt(Date.now()), ...data };

    const dataObject = [{ ...todo }, ...todos]
    //data: Object
    writeFileSync(dataObject);
    return dataObject
}

export function updateById(id) {
    const todoList = todos.map(todo => {
        if (todo.id === parseInt(id)) {
            return {
                ...todo,
                completed: true
            }
        }
        return todo;
    })
    writeFileSync(todoList);
    return todoList
}

export function deleteById(id) {
    const todoList = todos.filter(todo => todo.id !== parseInt(id));

    writeFileSync(todoList);
    return todoList;
}

