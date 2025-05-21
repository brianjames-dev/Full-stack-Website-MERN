import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddTaskPageTable = () => {

    const [task, setTask]       = useState('');
    const [priority, setPriority]         = useState('');
    const [due_date, setDueDate] = useState('');
    
    const redirect = useNavigate();

    const addTask = async () => {
        const newTask = { task, priority, due_date };
        const response = await fetch('/tasks', {
            method: 'post',
            body: JSON.stringify(newTask),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`You successfully added a task!`);
        } else {
            alert(`You failed at adding a task = ${response.status}`);
        }
        redirect("/tasks");
    };


    return (
        <>
        <article>
            <h2>Add a task</h2>
            <p>Add a new task that must be completed soon.</p>
            
            <table id="tasks">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Priority</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="task">Task name</label>
                        <input
                            type="text"
                            placeholder="Name of the task"
                            value={task}
                            onChange={e => setTask(e.target.value)} 
                            id="task" />
                    </td>

                    <td><label for="priority">Priority </label>
                        <input
                            type="number"
                            value={priority}
                            placeholder="Priority of the task"
                            onChange={e => setPriority(e.target.value)} 
                            id="priority" />
                    </td>

                    <td><label for="due_date">Due Date</label>
                        <input
                            type="text"
                            placeholder="Due Date of the task"
                            value={due_date}
                            onChange={e => setDueDate(e.target.value)} 
                            id="due_date" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addTask}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddTaskPageTable;