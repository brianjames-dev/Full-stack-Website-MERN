import React from 'react';
import Task from './Task';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function TaskList({ tasks, onDelete, onEdit }) {
    return (
        <table id="tasks">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, i) => 
                    <Task 
                        task={task} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TaskList;
