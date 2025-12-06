const dingSound = new Audio("ding.done.mp3");   
const deleteSound = new Audio("ding.delete.mp3"); 
const addSound = new Audio("ding.add.mp3");

function play(audio) {
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

const storageKey = "todo.tasks";

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function saveTasks(tasks) {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}

const list = document.getElementById("list");
const addForm = document.getElementById("addForm");
const taskInput = document.getElementById("taskInput");

function render() {
  const tasks = loadTasks();
  list.innerHTML = "";

  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.className = "task-item" + (t.done ? " done" : "");

    const left = document.createElement("div");
    left.className = "task-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = t.done;

    const text = document.createElement("div");
    text.className = "task-text";
    text.textContent = t.text;

    const del = document.createElement("button");
    del.className = "btn-delete";
    del.textContent = "✕";

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        dingSound.currentTime = 0;
        dingSound.play().catch(() => {});
        dingSound.onended = () => {
          const arr = loadTasks();
          arr.splice(i, 1);
          saveTasks(arr);
          render();
        };
      } else {
        const arr = loadTasks();
        arr[i].done = false;
        saveTasks(arr);
        render();
      }
    });

    del.addEventListener("click", () => {
      play(deleteSound);
      const arr = loadTasks();
      arr.splice(i, 1);
      saveTasks(arr);
      render();
    });

    left.appendChild(checkbox);
    left.appendChild(text);
    li.appendChild(left);
    li.appendChild(del);
    list.appendChild(li);
  });
}

addForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;
  const arr = loadTasks();
  arr.push({ text: text, done: false });
  saveTasks(arr);
  play(addSound);
  taskInput.value = "";
  render();
});

render();
