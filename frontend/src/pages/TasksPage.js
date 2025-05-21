import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TaskList from '../components/TaskList';
import { Link } from 'react-router-dom';
import { BsCalendar2Plus } from 'react-icons/bs';

function TasksPage({ setTask }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [tasks, setTasks] = useState([]);
    

    // RETRIEVE the entire list of tasks
    const loadTasks = async () => {
        const response = await fetch('/tasks');
        const tasks = await response.json();
        setTasks(tasks);
    } 
    

    // UPDATE a single task
    const onEditTask = async task => {
        setTask(task);
        redirect("/update");
    }


    // DELETE a single task  
    const onDeleteTask = async _id => {
        const response = await fetch(`/tasks/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/tasks');
            const tasks = await getResponse.json();
            setTasks(tasks);
        } else {
            console.error(`Your task failed to delete = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the tasks
    useEffect(() => {
        loadTasks();
        
    }, []);

    // DISPLAY the tasks
    return (
        <>
            <h2><Link to="/create"> <BsCalendar2Plus color="var(--slate)"/></Link>  List of Tasks</h2>
            <p>Click the <strong>calendar icon</strong> above to add a new task to the list. Use the <strong>icons</strong> on each row to edit or delete the tasks.</p>
            
            <TaskList 
                tasks={tasks} 
                onEdit={onEditTask} 
                onDelete={onDeleteTask} 
            />
        </>
    );
}

export default TasksPage;