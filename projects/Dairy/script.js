let input = document.getElementById('input');
let todoItem = input.innerText;
let list = document.querySelector('.items');
let p = document.querySelector('p').value;


function addTodo() {
   input.addEventListener('keypress', item());
  localStorage.setItem("todo", input.value);
  display();
//   let newItem = localStorage.getItem('todo');
  p.innerHTML = input.value;

}

function item(){
    return alert(input.value)
}

function display() {
    list.innerHTML = localStorage.getItem(todo);
}

input.addEventListener('keypress', () => {
    p = input.value;
})