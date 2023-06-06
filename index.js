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
        // var 
        button.innerText = 'delete'
        button.className = 'delete' 
        button.onclick = deleteNode
        console.log(button)
        li.innerText = input.value + ' '
        li.appendChild(button)
        // " <button class='delete'> Delete</button>"
        document.getElementById('lists').appendChild(li)
        }
    }
    function deleteNode(e) {
        
        e.target.parentNode.remove()
    }
    // for (let i = 0; i <  99; i++) {
    //     // const element = array[i];
    //     document.getElementsByClassName('delete')[i].addEventListener('click',(e)=>{
    //         e.target.parentNode.remove()
    //     })
    // 
    // }
    // function delete(e) {
    //     e.target.parentNode.remove
    // }
    for (let i = 0; i < 99; i++) {
        document.getElementsByClassName('delete')[i].addEventListener('click',deleteNode())

    }

    // pessit in localstorage