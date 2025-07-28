const input = document.querySelector("#input-box");
const button = document.querySelector("#btn-add");
const date = document.querySelector("#todo-date");
const list = document.querySelector(".todo-container");

let arr = [];

function displayItems() {
  list.innerHTML = "";

  arr.forEach((v, i) => {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-item";

    todoDiv.innerHTML = `
                       <div>
                          <span class="todo-text">${v.li}</span>
                          <span class="todo-date">${v.dt}</span>    
                       </div>
                       <button onclick="deleteTodo(${i})">Delete</button>
                        `;
    list.appendChild(todoDiv);
  });
}

button.addEventListener("click", () => {
  let li = input.value.trim();
  let dt = date.value;

  if (li === "" || dt === "") {
    alert("Please enter both todo text and date.");
    return;
  }
  arr.push({ li, dt });
  input.value = "";
  date.value = "";
  // console.log(arr)

  displayItems();
});

function deleteTodo(index) {
  arr.splice(index, 1);
  displayItems();
}
