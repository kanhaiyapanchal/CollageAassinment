function intiate() {

    var save = document.getElementById('save');
    var retrive = document.getElementById('retrive');
    var del = document.getElementById('delete');
    var review = document.getElementById('review');

    save.addEventListener('click', saveData);
    retrive.addEventListener("click", retriveData);
    del.addEventListener("click", deleteData);
    review.addEventListener("click", reviewData);


}
var data = document.getElementById('formdata');

function saveData() {
    var mob = document.getElementById('mob').value;
    var key = document.getElementById('key').value;
    sessionStorage[key] = mob;
    console.log("done");

}

function retriveData() {
    var key = document.getElementById('key').value;
    var value = sessionStorage[key];
    data.innerHTML = '<div>' + key + ':' + value + '</div>';

}
function deleteData() {
    if (confirm("Delete? ")) {
        var key = document.getElementById('key').value;
        sessionStorage.removeItem(key);
        data.innerHTML = '<div> Deleted success</div>';
    }
}
function reviewData() {
    for(var i=0;i<=sessionStorage.length;i++){
        var key=sessionStorage.key(i);
        var num=sessionStorage[key];
        data.innerHTML+='<div>'+key+': '+num+"</div>";
    }

}

addEventListener("load", intiate);

