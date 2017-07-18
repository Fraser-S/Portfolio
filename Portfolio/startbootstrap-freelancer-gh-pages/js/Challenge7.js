var created = false;

function createParagraph(text){
    if(created == false) {
        if (text == "") {
            text = "This paragraph was created through javascript";
        }
        var para = document.createElement("p");
        para.setAttribute("id", "addedText");//sets id of the paragraph
        var node = document.createTextNode(text);
        para.appendChild(node);

        var element = document.getElementById("toAdd");
        element.appendChild(para);

        created = true;
    }
}

function editParagraph(paragraphText){
    if(created == true) {
        document.getElementById("addedText").innerHTML = paragraphText;
    }
}

function deleteParagraph(){
    if(created == true) {
        var parent = document.getElementById("toAdd");
        var child = document.getElementById("addedText");
        parent.removeChild(child);

        created = false;
    }
}