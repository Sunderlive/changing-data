
export function firstFunction() {
    let container = document.getElementById('todo-app')
    container.innerHTML = ''
}

export async function changeStorage(owner, getTodoListStorage, createTodoApp, createTodoItemStorage, switchTodoItemDoneStorage, deleteTodoItemStorage) {
    let container = document.getElementById('todo-app')
    container.innerHTML = ''
    const todoItemList = await getTodoListStorage(owner);
    createTodoApp(container, {
        title: owner,
        owner,
        todoItemList,
        onCreateFormSubmit: createTodoItemStorage,
        onDoneClick: switchTodoItemDoneStorage,
        onDeleteClick: deleteTodoItemStorage,
    });
}
