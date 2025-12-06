const ding = new Audio("ding.done.mp3");
const del = new Audio("ding.delete.mp3");
const add = new Audio("ding.add.mp3");

let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
const list = document.getElementById("list");
const input = document.getElementById("taskInput");
const form = document.getElementById("addForm");

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  list.innerHTML = "";
  tasks.forEach(function(t, i) {
    list.innerHTML +=
      '<li class="' + (t.done ? 'done' : '') + '">' +
        '<label>' +
          '<input type="checkbox" ' + (t.done ? "checked" : "") + ' data-i="' + i + '">' +
          t.text +
        '</label>' +
        '<button data-del="' + i + '">✕</button>' +
      '</li>';
  });
}

list.addEventListener("click", function(e) {
  if (e.target.getAttribute("data-del")) {
    del.currentTime = 0;
    del.play();
    tasks.splice(e.target.getAttribute("data-del"), 1);
  } else if (e.target.getAttribute("data-i")) {
    var i = e.target.getAttribute("data-i");
    tasks[i].done = !tasks[i].done;
    if (tasks[i].done) {
      ding.currentTime = 0;
      ding.play();
      setTimeout(function() {
        tasks.splice(i, 1);
        save();
        render();
      }, 300);
    }
  }
  save();
  render();
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (!input.value.trim()) return;
  tasks.push({ text: input.value, done: false });
  add.currentTime = 0;
  add.play();
  input.value = "";
  save();
  render();
});

render();
