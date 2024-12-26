const allbtn = document.querySelector(".allbtn");
const Completedbtn = document.querySelector(".Completedbtn");
const pendingbtn = document.querySelector(".pendingbtn");
const text = document.querySelector(".text");
const icon = document.querySelector("fa-regular fa-pen-to-square");
class Task {
    constructor(text) {
        this.text = text;
        this.completed = false;
    }
}
class TodoList {
    constructor() {
        this.tasks = this.loadTasks();
    }
    addTask(text) {
        const task = new Task(text);
        this.tasks.push(task);
        this.saveTasks();
    }
    saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
    loadTasks() {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    }
    renderTasks(filter) {
        const ul = document.querySelector(".inputarea");
        ul.innerHTML = "";
        const filteredTasks = this.tasks.filter((task) => {
            if (filter === "completed") return task.completed;
            if (filter === "pending") return !task.completed;
            return true;
        });
        filteredTasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
          <input type="checkbox" class="task-checkbox" ${task.completed ? "checked" : ""} data-index="${index}">
          <span class="task-text ${task.completed ? "completed" : ""}">${task.text}</span>
          <button style="margin-left:205px" class="edit" data-index="${index}"><i style="color: white;" class="fa-regular fa-pen-to-square"></i></button>
          <button class="delete" data-index="${index}"><i style="color: white;" class="fa-solid fa-trash-can"></i></button>
        `;
            ul.appendChild(li);

        });
        document.querySelectorAll(".task-checkbox").forEach((checkbox) => {
            checkbox.addEventListener("change", (event) => {
                const index = event.target.dataset.index;
                this.tasks[index].completed = event.target.checked;
                this.saveTasks();
                this.renderTasks(filter);
            });
            checkbox.style.accentColor = "white";
        });
        // Delete 
        document.querySelectorAll(".delete").forEach((button) => {
            button.addEventListener("click", (event) => {
                const index = event.target.dataset.index;
                this.tasks.splice(index, 1);
                this.saveTasks();
                this.renderTasks(filter);
            });
            button.style.backgroundColor = "red";
            button.style.border = "none";
        });
        // Edit
        document.querySelectorAll(".edit").forEach((button, index) => {
            button.addEventListener("click", (event) => {
                text.value = (this.tasks[index].text);
                this.tasks.splice(index, 1);
                // console.log(this.tasks);
                this.saveTasks();
                this.renderTasks(filter);
            });
            button.style.backgroundColor = "blue";
            button.style.border = "none";
        });
    }
}
const todoList = new TodoList();
document.querySelector(".add").addEventListener("click", () => {
    const input = document.querySelector(".text");
    const text = input.value;
    if (text) {
        todoList.addTask(text);
        input.value = "";
        todoList.renderTasks();
    }
});
allbtn.addEventListener("click", () => {
    allbtn.style.backgroundColor = "gray";
    Completedbtn.style.backgroundColor = "";
    pendingbtn.style.backgroundColor = "";
    todoList.renderTasks("all");
});
Completedbtn.addEventListener("click", () => {
    Completedbtn.style.backgroundColor = "gray";
    allbtn.style.backgroundColor = "";
    pendingbtn.style.backgroundColor = "";
    todoList.renderTasks("completed");
});
pendingbtn.addEventListener("click", () => {
    pendingbtn.style.backgroundColor = "gray";
    Completedbtn.style.backgroundColor = "";
    allbtn.style.backgroundColor = "";
    todoList.renderTasks("pending");
});
todoList.renderTasks();

