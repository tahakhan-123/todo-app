var list = document.getElementById("li");

function addItem(){
    var todoItem = document.getElementById("todo")
    var li = document.createElement("li");
    var liText = document.createTextNode(todoItem.value);
    li.appendChild(liText);
    list.appendChild(li);

    var edit = document.createElement("button");
    edit.setAttribute("class","btn3");
    edit.setAttribute("onclick","editItem(this)");
    var editText = document.createTextNode("Edit Item");
    edit.appendChild(editText);
    li.appendChild(edit);

    var del = document.createElement("button");
    del.setAttribute("class","btn4");
    del.setAttribute("onclick","deleteItem(this)");
    var delText = document.createTextNode("Delete Item");
    del.appendChild(delText);
    li.appendChild(del);
    todoItem.value = "";
    console.log(li);
}

function deleteItem(a){
    a.parentNode.remove();
}

function delItems(){
    li.innerHTML = "";
}

function editItem(b){
    var c = b.parentNode.firstChild.nodeValue;
    var edit = prompt("Enter value", c);
    b.parentNode.firstChild.nodeValue = edit;
}