function intiate() {

    var submit = document.getElementById('submit');
    submit.addEventListener('click', saveData);
}

function saveData() {
    var name=document.getElementById('name');
    localStorage['name'] = name;
    var data = document.getElementById('main');
    window.location.href="resume.html";

    // var key = document.getElementById('key').value;
}

addEventListener("load", intiate);
