import axios from "axios";
import _ from "lodash";

interface Todos {
    //foreach(printTodos: (todo: Todos) => void): unknown;
    //[x: string]: any;
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
function call()   {
    axios.get<Todos[]>("https://jsonplaceholder.typicode.com/todos")
    .then(res=>{
        console.log(res.data)
       res.data.forEach(printTodos);
    }
        )
    .catch(e => console.log(e))
}
call();
function printTodos(todo : Todos){
    console.log(todo.id);
    console.log(todo.title);
    console.log(todo.completed);
} 