
    

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDate = document.getElementById('taskDate').value;

    if (taskName && taskDate) {
      const taskList = document.getElementById('taskList');
      const newTask = document.createElement('li');
      newTask.className = 'task';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      const taskDetails = document.createElement('div');
      taskDetails.textContent = `${taskName} - ${taskDate}`;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
      });

      taskList.appendChild(newTask);

      
      newTask.appendChild(taskDetails);
      newTask.appendChild(deleteButton);


      document.getElementById('taskName').value = '';
      document.getElementById('taskDate').value = '';
    } 
    else {
      alert('Please enter task details.');
    }
  }