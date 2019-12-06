var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var ul2 = document.getElementById('ul2');
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spanElement = document.createElement("span");
var clear = document.getElementById('clear');
var saveBtn = document.getElementById('save');




//Функция которая загружает todo-app, если список найден в локальном хранилище
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
  }
}




//Дата!!!!!
document.getElementById('input').addEventListener("keypress",function(keyPressed2){
  if(keyPressed2.which === 13){
    //Создание нового задания при нажатии на enter 
    var li = document.createElement("li");
        
    var newTodo2 = this.value;
    this.value = " " ;
    ul.appendChild(li).append( '15 секунд до выполнения!');    
    document.getElementById('ul2').appendChild(li).append(newTodo2);
    
    } 
    
});





//Обработчик каждого события при вводе, чтобы добавлять новое задание в список
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    //Создание нового задания при нажатии на enter 
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i"); 
     
        
    var newTodo = this.value;
    this.value = " " ;
        
    icon.classList.add('fas', 'fa-trash-alt'); 
    spanElement.append(icon);
    ul.appendChild(li).append( spanElement, newTodo);

    function sayHi() {
      alert('Приступить к выполнению: ' + newTodo + ' !!!');
    }
    
    setTimeout(sayHi, 15000);
   
    spanElement.addEventListener("click", () => {
    let elements = document.querySelectorAll('ul > li:last-child');
    for (let elem of elements) {
    elem.parentNode.removeChild(elem);
  }
});    
  }
});
















document.getElementById('clear').addEventListener("click", () => {
  let elements = document.querySelectorAll('ul > li:last-child');
  for (let elem of elements) {
    elem.parentNode.removeChild(elem);}
});






  


//Сохранение состояние todolist чтобы пользователь мог получить к данным доступ и позже
saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList', ul.innerHTML); 
});


loadTodo();  