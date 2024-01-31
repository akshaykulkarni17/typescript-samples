interface Todo {
    text : string;
    done : boolean;
}

const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

const todos : Todo[] = readTodos();
todos.forEach(createTodo);

form.addEventListener("submit",handleSubmit);

function handleSubmit(ev: SubmitEvent) {
    ev.preventDefault();
    if(input.value==="") return;
    const todo : Todo = {text:input.value, done:false};
    createTodo(todo);
    todos.push(todo);
    saveTodos();
    input.value = "";
    console.log(todos);
}


function createTodo(todo: Todo) {
    const li = document.createElement("LI");
    const chk = document.createElement("input");
    chk.type = "checkbox";
    chk.checked=todo.done;
    chk.addEventListener("change", ()=> {
        todo.done=chk.checked;
        saveTodos();
    });
    li.append(chk);
    li.append(todo.text);
    list.append(li);
}

function readTodos(): Todo[] {
    const localTodo = localStorage.getItem("todos");
    if(localTodo===null) return [];
    return JSON.parse(localTodo);
}

function saveTodos() {
    localStorage.setItem("todos",JSON.stringify(todos));
}
// btn.addEventListener("click",()=>{
//     console.log(input.value);
// });
