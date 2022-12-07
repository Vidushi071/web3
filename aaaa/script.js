var input = document.getElementById("txt");

input.addEventListener("keypress", function (event) {
 
var inputVal = document.getElementById("txt").value;
var color = document.querySelector('input[name="fav_language"]:checked').value;
  if (event.key === "Enter") {
 
  document.getElementById("txt").value = "";
  document.getElementById("madd").style.display = "none";
    document.getElementById('rowadd').innerHTML = document.getElementById('rowadd').innerHTML +
     `<div class="col-lg-4" onclick="remove(this)"><div class="card bg-light"><div style = "background: ${color}; 
     height: 5px"></div><div class="card-body">${inputVal}</div></div></div>`
      document.getElementById(id).style.display = "none"
  }
});
var trash = false;

function myFunction(){
  document.getElementById("madd").style.display = "block";
}

function myTrash(){
  if(trash == false){
      trash = true;
  }else{
      trash = false;
  }
}
function remove(ele) {
var element = ele;
if(trash == true){
element.remove();
}
}
