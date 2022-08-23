// your code here
document.addEventListener("DOMContentLoaded", () => {

  let list = document.querySelectorAll('#list');
  console.log(list);

  let input = document.querySelector('#new-task-description')
  let formTask = document.querySelector('#create-task-form');

  console.log(formTask);
  formTask.addEventListener('submit', function(e) {
      e.preventDefault();

      let list = document.querySelector('#tasks')
      let listContent = document.createElement('li')
      listContent.innerText = input.value
  // console.log(listContent)
      let deleteButton = document.createElement('button')
      deleteButton.innerText = 'x'

      list.appendChild(listContent);
      listContent.appendChild(deleteButton);
      formTask.reset()
  //handler
  //delete/remove
      deleteButton.addEventListener('click', function(e) {

          listContent.remove();
      })
      //resets the form input
      formTask.reset()
  })

  })

