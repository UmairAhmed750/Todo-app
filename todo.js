 const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = taskText;
      span.onclick = () => li.classList.toggle("completed");

      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.onclick = () => li.remove();

      li.appendChild(span);
      li.appendChild(delBtn);
      taskList.appendChild(li);

      taskInput.value = "";
      taskInput.focus();
    }

    // Optional: Press "Enter" to add task
    taskInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addTask();
      }
    });