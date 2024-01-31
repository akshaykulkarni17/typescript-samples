"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function call() {
    axios_1.default.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
        console.log(res.data);
        res.data.forEach(printTodos);
    })
        .catch(e => console.log(e));
}
call();
function printTodos(todo) {
    console.log(todo.id);
    console.log(todo.title);
    console.log(todo.completed);
}
