var list = document.getElementsByClassName('list');
var lists =  document.getElementsByClassName('lists')
var input = document.getElementById('text');
var add = document.getElementById('add');
    function addTasks(){
        if (input.value === ""){
            alert("Input feild is empty")
        }
        else{
        let li= document.createElement('li')
        let button = document.createElement('button')
        button.innerText = 'X'
        button.className = 'delete' 
        button.onclick = deleteNode
        // console.log(button)
        li.innerText = input.value + ' '
        li.appendChild(button)
        li.className = 'li'
        // " <button class='delete'> Delete</button>"
        document.getElementById('lists').appendChild(li)
        // localStorage.setItem('tasks',li)
        // console.log(localStorage);
        input.value = ''
        }
    }
    function deleteNode(e) {
        
        e.target.parentNode.remove()
    }

    // for (let i = 0; i < 99; i++) {
    //     document.getElementsByClassName('delete')[i].addEventListener('click',deleteNode())

    // }
    // pessit in localstorage
   input.addEventListener('keydown',(e)=>{
        if (e.code === 'Enter') {
            addTasks()
        }
    })