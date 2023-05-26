export function createTodoItemStorage({ owner, name }) {
    console.log(name)
    let result = JSON.parse(localStorage.getItem(owner))
    if (result == null) {
        result = []
    }
    console.log(result)
    let newTodo = { owner: owner, name: name, done: false }
    console.log(newTodo)
    result.push(newTodo)
    localStorage.setItem(owner, JSON.stringify(result))
    return newTodo
}

export function getTodoListStorage(owner) {
    let result = JSON.parse(localStorage.getItem(owner))
    if (result == null) {
        return
    }
    else {
        return result
    }
}

export function switchTodoItemDoneStorage({ todoItem }) {
    todoItem.done = !todoItem.done;
    let array = JSON.parse(localStorage.getItem(todoItem.owner))
    for (let i = 0; i < array.length; i++) {
        if (array[i].name == todoItem.name) {
            array[i].done = todoItem.done;
            localStorage.setItem(todoItem.owner, JSON.stringify(array))
        }
    }
}

export function deleteTodoItemStorage({ element, todoItem }) {
    console.log(todoItem);
    if (!confirm('Вы Уверены?')) {
        return
    }
    let array = JSON.parse(localStorage.getItem(todoItem.owner))
    for (let i = 0; i < array.length; i++) {
        if (array[i].name == todoItem.name) {
            array.splice(i, 1)
            console.log(array[i]);
            localStorage.setItem(todoItem.owner, JSON.stringify(array))
        }
    }
    element.remove();
}


