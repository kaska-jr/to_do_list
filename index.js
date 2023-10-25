const addBtn = document.querySelector(".add-btn")
const inputWrapper = document.querySelector(".input_box")
const inputBox = document.querySelector("#input")
const taskContainer = document.querySelector(".task_container")





addBtn.addEventListener("click", (e)=>{

        let inputValue = inputBox.value;
        if(inputValue === ""){
            return
        }else{
            taskContainer.innerHTML += `<div class="task_wrapper w-[95%] bg-blue-500 m-auto p-5 mb-4 rounded-[50px] text-white flex items-center justify-between">
            <div>
              <input type="checkbox" name="task" id="task" class="cursor-pointer">
            <span class="ml-2">${inputValue}</span></div>
            <div class="cursor-pointer delBtn"><i class="fa-regular fa-trash-can"></i></div>
        </div>`;
        }
       

    let tasks = document.querySelectorAll('.delBtn');
    let checkboxs = document.querySelectorAll("input[type=checkbox]");

    checkboxs.forEach((checkbox)=>{
        checkbox.addEventListener("click", (e)=> {
            if(e.target.checked){
               e.target.nextElementSibling.classList.add("line-through")
            }else{
                e.target.nextElementSibling.classList.remove("line-through")
            }
        })
    })
     
    tasks.forEach((task)=>{
        task.addEventListener("click", (e)=>{
            e.target.parentElement.parentElement.remove()
        })
    });
     inputBox.value = "";
  })

  
