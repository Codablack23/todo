{/* <div class="todo-item">
<input type="checkbox" class="todo-checkbox">
<p class="todo">Hello world</p>
</div> */}

let allTodos = []
const addTodoForm = document.querySelector(".add-todo-form")
const todoList = document.querySelector(".todo-list")
const clearAll = document.querySelector(".clear-all")
const activeBtn = document.querySelector("#active")
const allBtn = document.querySelector("#all")
const completedBtn = document.querySelector("#completed")


function createTodoElement(todo,completed,id){
    //create elements
    const div = document.createElement('div')
    const input = document.createElement("input")
    const p = document.createElement('p')

   //add classes and attributes to elememts
   div.classList.add("todo-item")
   input.type = "checkbox"
   input.checked = completed
   input.classList.add("todo-checkbox")
   p.classList.add("todo")

   //add children and text nodes to elements
   const pTextnode = document.createTextNode(todo)
   input.addEventListener("click",()=>completeTodo(id))
   p.appendChild(pTextnode)
   div.appendChild(input)
   div.appendChild(p)

   return div
}

function injectTodos(todos){
   if(todos.length > 0){
    const container = document.createElement('div')
    todos.forEach(todo=>{
       const todoComponent = createTodoElement(todo.name,todo.completed,todo.id)
       container.appendChild(todoComponent)
    })
    todoList.replaceChildren(container)
   }
   else{
    const p = document.createElement("p")
    p.classList.add("empty")
    const pTextNode = document.createTextNode("No Task Added")
    p.appendChild(pTextNode)

    todoList.replaceChildren(p)
   }
}

function showActive(){
    const activeTodos = allTodos.filter(todo=>!todo.completed)
    injectTodos(activeTodos)
}
function showCompleted(){
    const activeTodos = allTodos.filter(todo=>todo.completed)
    injectTodos(activeTodos)
}
function completeTodo(id){
  allTodos = allTodos.map(todo=>{
    return todo.id == id?{
        ...todo,
        completed:true,
    }:todo
  })
  injectTodos(allTodos)
}

addTodoForm.addEventListener('submit',function(e){
  e.preventDefault()
  const todoName = addTodoForm.querySelector("input")
  console.log(todoName)
  
  allTodos.push({
    id:injectTodos.length + 1,
    name:todoName.value,
    completed:false
  })
  injectTodos(allTodos)   
})
clearAll.addEventListener('click',function(){
    allTodos = []
    injectTodos(allTodos)
})
activeBtn.addEventListener("click",showActive)
allBtn.addEventListener('click',()=>injectTodos(allTodos))
completedBtn.addEventListener("click",showCompleted)


window.addEventListener("load",()=>injectTodos(allTodos))



