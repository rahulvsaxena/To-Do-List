var table=document.getElementById("table");
var inputText=document.getElementById("inputText");
var addBtn=document.getElementById("addBtn");

addBtn.addEventListener("click",function(){
    var newItem = document.createElement("tr");
    
    //item
    var itemTd = document.createElement("td");
    var newItemText=document.createTextNode(inputText.value);
    itemTd.appendChild(newItemText);
    newItem.appendChild(itemTd);
    
    //editBtn
    var editBtnTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.innerHTML="Edit";
    editBtn.id="edit";
    editBtn.addEventListener("click",function(){
        var replacedItemText=document.createTextNode(inputText.value);
        itemTd.replaceChild(replacedItemText,newItemText);
    })
    editBtnTd.appendChild(editBtn);
    newItem.appendChild(editBtnTd);
    
    //removeBtn
    var removeBtnTd = document.createElement("td");
    var removeBtn = document.createElement("button");
    removeBtn.id="del";
    removeBtn.addEventListener("click",function(){
        table.removeChild(newItem);
    });
    removeBtn.innerHTML="Remove";
    removeBtnTd.appendChild(removeBtn);
    newItem.appendChild(removeBtnTd);

    //append to table
    table.appendChild(newItem);

    inputText.value="";
});
