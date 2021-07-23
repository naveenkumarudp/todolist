const items = ['Javascript','HTML','CSS','Tailwind CSS','Bootstrap','Angular','React','NextJs','TypeScript']

 

const todoContainer = document.getElementById('todoContainer');

 

//Create Todo for all element in Todolist

function showAllTodo(){

  //Create Fragment

const todoFragment =  document.createDocumentFragment();

 

  items.forEach(function(optionText){

    todoFragment.appendChild(createTodoCard(optionText));

  })

 

  todoContainer.appendChild(todoFragment);

}

 

//Create todo span

function createTodoCard(todoText) {

//Todo card

  const todoCard = document.createElement('span');

  todoCard.classList.add('todoList');

 

  //Todo Text

  const todoTextContainer = document.createElement('span');

  todoTextContainer.textContent = todoText;

  todoTextContainer.classList.add('text');

  todoCard.appendChild(todoTextContainer);

 

  //Delete button

  const deleteButton = document.createElement('button');

  deleteButton.textContent = 'Done';

  deleteButton.classList.add('deleteButton');

  deleteButton.addEventListener('click', onClickDelete);

  todoCard.appendChild(deleteButton);

 

  return todoCard;

}

 

//Create todoList

function onClickDelete(event) { 

  event.target.parentNode.remove();

}

 

showAllTodo();
