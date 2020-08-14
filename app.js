var list = document.getElementById("list");

// list.style.margin = "18px 0";
// list.style.border = "none"

function addTodo() {
    var todo = {
        ToDoItem: ToDoitem.value,  
        
        }
          
        
        
           firebase.database().ref('todoApp').push(todo);




    var ToDoItem = document.getElementById("ToDoitem");
    var li = document.createElement('li');
    li.style.listStyle = "none";
    li.style.margin = "10px 0";
    li.style.left = "4px"
    li.style.border = " none"
    
    li.style.position = "relative"
    li.style.width = "200px"
    
    var liText= document.createTextNode(ToDoitem.value);
    li.appendChild(liText);

    var delBtn = document.createElement('button')

    delBtn.setAttribute("class",  " fa fa-trash-o");
    delBtn.setAttribute("onclick", "DeletBtn(this)");
    li.appendChild(delBtn);
    delBtn.style.fontSize = "22px";
    delBtn.style.left = "220px"
    delBtn.style.position = "absolute"
    delBtn.style.border = "none"
    delBtn.style.lineHeight = "20px"
  

   




    var editBtn = document.createElement('button');
    var editText = document.createTextNode("");
    editBtn.setAttribute("class",  "fa fa-edit");
    editBtn.setAttribute("onclick", "editBtn(this)");
    editBtn.appendChild(editText);
  li.appendChild(editBtn);
    editBtn.style.fontSize = "22px"
    editBtn.style.left = "180px";
    editBtn.style.position = "absolute";
    editBtn.style.border = "none";
    // editBtn.style.lineHeight = "20px";

   

    
    list.appendChild(li);
    ToDoitem.value= "";
    // console.log(li)


    firebase.database().ref('todo').set(addTodo)
}



function DeletBtn(e) {
    e.parentNode.remove()
   
    
}
function delete_all() {
    list.innerHTML = "";
    firebase.database().ref('todoApp').remove();
    
}
function editBtn(l){
    var val = prompt("Enter your upDate" , l.parentNode.firstChild.nodeVaule);

    
    l.parentNode.firstChild.nodeVaule = val;
}