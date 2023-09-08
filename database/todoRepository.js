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
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id))
    const todo = todos.find(todo => todo.id === parseInt(id));
    const newTodo = { ...todo, completed: !todo.completed }
    const todoList = [...todos];
    todoList[todoIndex] = newTodo
    writeFileSync(todoList);

    return todoList
}

export function deleteById(id) {
    const todoList = todos.filter(todo => todo.id !== parseInt(id));
    writeFileSync(todoList);

    return todoList;
}


