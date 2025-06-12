const todoForm = document.getElementById("todoForm")
const todoList = document.getElementById("todoList")

todoForm.addEventListener("submit", function(e){
    e.preventDefault();
    const todoInput = document.getElementById('todoInput')
    const InputTodo = todoInput.value
    const li = document.createElement("li")
    li.textContent = InputTodo;

    // O‘chirish tugmasi
    let delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "🗑";
    li.appendChild(delBtn);

    // Delete event
    delBtn.addEventListener("click", function(e){
        e.stopPropagation();
        li.remove();
    });

    // li'ni ul ga qo‘shish
    todoList.appendChild(li);

    // Inputni tozalash
    todoInput.value = "";
});
