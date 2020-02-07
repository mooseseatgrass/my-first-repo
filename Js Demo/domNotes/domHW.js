// document.getElementById("title").style.color="black";

// document.getElementById("title").innerHTML ="Bananas";

// var textnode = document.createTextNode("Water");
// Node.appendChild(textnode);
// document.getElementById("listOne")appendChild(node);

//chech out element.classList, above notes from class

document.getElementById("listItemOne").style.color = "green";
document.getElementById("myBtn").style.color = "red";
document.getElementById("title").style.color = "blue";

// Need to do step 2, change class name and text of a a child or sibling of 
// each of the above elements

document.getElementById("myBtn").addEventListener("click", function (){
    document.getElementById("listItemTwo").style.color = "yellow";
});

document.createElement('h2',"Second header");