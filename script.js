function Login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;

    if (email == "Emmanuel@gmail.com" && password=="Emman123") {
        window.location.assign("task.html");
        alert("Login Successfully ");
    }
    else {
        alert("Invalid Information ");
        return;

    }
}

    function addItem() {
        var a = document.getElementById("list");
        var candidate = document.getElementById("candidate");
        var li = document.createElement("li");
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        a.appendChild(li);
    }

    
    function removeItem() {

        
        var a = document.getElementById("list");
        var candidate = document.getElementById("candidate");
        var item = document.getElementById(candidate.value);
        a.removeChild(item);
    }
