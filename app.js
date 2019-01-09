function onReady() {
  let toDoId = 0
  let toDos = []
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: toDoId
    });
    newToDoText.value = '';

    toDoId++;
    renderTheUI();
  }

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener('click', function(event){
        deleteToDo(newLi, toDo.id);
      });

      newLi.textContent = toDo.title;
      newLi.appendChild(deleteBtn);
      toDoList.appendChild(newLi);

    });
  }

  function deleteToDo(element, index) {
    element.parentElement.removeChild(element);

    toDos = toDos.filter((todo) => {
      return todo.id != index;
    })
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
