const TO_DO =[{title: 'abcd'}, {title: 'dfgdhjfg'}];

// HTML
const addBtnHTML = document.querySelector('#addBtn');
const inputHTML = document.querySelector('#input');
const allTodosHTML = document.querySelector('#all-todos');
const listHTML = document.querySelector('#list');

addBtnHTML.addEventListener('click', addTodo);

function addTodo() {
  // console.log(e);
  const title = inputHTML.value;
  // console.log({title})

  // if(title) {
  //   TO_DO.push({title: title})
  //   console.log(TO_DO);
  // }

  if(!title) return;
  
  TO_DO.push({title: title})
  // console.log(TO_DO);
  displayToDos();

}

function displayToDos() {
  let allDos = '';
  // TO_DO.map((todo, index) => {
  //   console.log(todo);
  //   allDos += `
  //   <div class="list">
  //         <button onchange="isChecked(event, this)" id="checkbox"><input type="checkbox"></button>
  //         <div id="title">
  //           <p id="todo-list">${todo.title}</p>
  //         </div>
  //         <div id="edit-delete">
  //           <button id="edit"><i id="edit-icon" class="far fa-edit"></i></button>
  //           <button onClick="deleteTodo(${index})" id="delete"><i id="delete-icon" class="far fa-trash-alt"></i></button>
  //         </div>
  //       </div>
  //   `
  // })  

  for(let i = 0; i < TO_DO.length; i++ ){
    allDos += `
    <div class="list">
      <button onchange="isChecked(event, this)" id="checkbox"><input type="checkbox"></button>
      <div id="title">
        <p id="todo-list">${TO_DO[i].title}</p>
      </div>
      <div id="edit-delete">  
        <button onClick="editTodo(${i})" id="edit"><i id="edit-icon" class="far fa-edit"></i></button>
        <button onClick="deleteTodo(${i})" id="delete"><i id="delete-icon" class="far fa-trash-alt"></i></button>
      </div>
    </div>`;
  }  
  allTodosHTML.innerHTML = allDos

}
displayToDos()

//event is always called whenever we addlistener
//this gives us specific div where  event has occured
//event.target -- gives particular element where elemnt has occured
//self is same as event.target

function isChecked(event, self) {
  // console.log(52,event);
  // console.log(53,event.target);
  // console.log(54,self);
      
  // console.log(56,self.parentElement);
  // console.log(57,self.parentElement.childNodes);
  // console.log(58,self.parentElement.childNodes[3]);
  // console.log(self.parentElement.childNodes[3].childNodes);
  // console.log(self.parentElement.childNodes[3].childNodes[0]);
  self.parentElement.childNodes[3].style.color = 'red';
  self.parentElement.childNodes[3].style.textDecoration = 'line-through';
}

function deleteTodo(index){
  TO_DO.splice(index,1); //1 is the number of element we want to delete
  displayToDos();
};

function editTodo(index){
  const tt = TO_DO[index].title;
  // console.log(tt);
  inputHTML.value = tt;
  deleteTodo(index);

}











