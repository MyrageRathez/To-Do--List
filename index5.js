 const addBtn = document.querySelector("#plus-btn")
 const input = document.querySelector("#input")
 const taskContainer = document.querySelector("#task-container")
 const errorMessage = document.getElementById("error-message") 


 addBtn.addEventListener("click", function(){

  let task = document.createElement("div")
  task.classList.add("task") 

  let li = document.createElement("li")
  li.innerText = `${input.value}`
  task.appendChild(li)

  let checkButton = document.createElement("button")
  checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`
  checkButton.classList.add("checkTask")
  task.appendChild(checkButton)

  let deleteButton = document.createElement("button")
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
  deleteButton.classList.add("deleteTask")
  task.appendChild(deleteButton)

  if(input.value === "") {
    errorMessage.style.color = "red"
    errorMessage.innerText = "Please enter a task"
  }else{
    errorMessage.innerText = ""
    taskContainer.appendChild(task) 
  }
    input.value = ""
    
    checkButton.addEventListener("click",function(){
      checkButton.parentElement.style.textDecoration  = "line-through"
    })
    deleteButton.addEventListener("click",function(e){
        let target  = e.target
        target.parentElement.parentElement.remove();
    })
   
 })