import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteOutline } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";


function Task({ task, onEdit, onDelete }) {
    return (
        <tr>
            <td>{task.task}</td>
            <td>{task.priority}</td>
            <td>{task.due_date.slice(0,10)}</td>

            <td><MdDeleteOutline size="1.5em" onClick={() => onDelete(task._id)} /></td>
            <td><VscEdit size="1.4em" onClick={() => onEdit(task)} /></td>
        </tr>
    );
}

export default Task;