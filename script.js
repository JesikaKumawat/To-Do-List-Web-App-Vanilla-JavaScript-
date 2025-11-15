const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task">${taskText}</span>
        <button class="deleteBtn">X</button>
    `;

    // Mark task as completed
    li.querySelector(".task").addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Delete task
    li.querySelector(".deleteBtn").addEventListener("click", function () {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";   // clear input field
});
