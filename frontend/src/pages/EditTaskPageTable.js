import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTaskPageTable = ({ taskToEdit }) => {
 
    const [task, setTask]       = useState(taskToEdit.task);
    const [priority, setPriority]         = useState(taskToEdit.priority);
    const [due_date, setDueDate] = useState(taskToEdit.due_date);
    
    const redirect = useNavigate();

    const editTask = async () => {
        const response = await fetch(`/tasks/${taskToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                task: task, 
                priority: priority, 
                due_date: due_date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`You successfully edited the task!`);
        } else {
            const errMessage = await response.json();
            alert(`You failed at editing the task ${response.status}. ${errMessage.Error}`);
        }
        redirect("/tasks");
    }

    return (
        <>
        <article>
            <h2>Edit a task</h2>
            <p>Edit either the name, priority, or due date of the task you selected.</p>
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

                    <td><label for="priority">Priority</label>
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
                            placeholder="Due date of the task"
                            value={due_date}
                            onChange={e => setDueDate(e.target.value)} 
                            id="due_date" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editTask}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditTaskPageTable;