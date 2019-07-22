const toDosContainer = document.querySelector("#todos__container")

const toDoFactory = (toDoItem) => {
    return `
    <section class="toDo__item ${toDoItem.completed ? "checked-item" : ""}">
        <input type="checkbox" name="todo" value="${toDoItem.completed}" ${toDoItem.completed ? "checked" : ""}><br/>
        <h2>${toDoItem.title}</h2>
    </section>
`
}

fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(toDoItems => {
        for (let toDo = 0; toDo < 30; toDo++) {
            toDoItem = toDoItems[toDo];
            const toDosHTML = toDoFactory(toDoItem)
            toDosContainer.innerHTML += toDosHTML
        }
    })