document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    loadTasks();

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            return; 
        }

        addTask(taskText);
        taskInput.value = ''; 
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click(); 
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.classList.add('task-text');
        span.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
            saveTasks(); 
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        saveTasks(); 
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push(li.querySelector('.task-text').textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(taskText => {
            addTask(taskText);
        });
    }
});
