// Controllers for the Task Collection

import 'dotenv/config';
import express from 'express';
import * as tasks from './tasks-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/tasks', (req,res) => { 
    tasks.createTask(
        req.body.task, 
        req.body.priority, 
        req.body.due_date
        )
        .then(task => {
            console.log(`"${task.task}" was added to the collection.`);
            res.status(201).json(task);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Error creating task. Please check your input and try again.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/tasks', (req, res) => {
    tasks.retrieveTasks()
        .then(tasks => { 
            if (tasks !== null) {
                console.log(`All tasks were retrieved from the collection.`);
                res.json(tasks);
            } else {
                res.status(404).json({ Error: 'No tasks found. Start adding tasks to the collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Error retrieving tasks. Please try again later.' });
        });
});


// RETRIEVE by ID controller
app.get('/tasks/:_id', (req, res) => {
    tasks.retrieveTaskByID(req.params._id)
    .then(task => { 
        if (task !== null) {
            console.log(`"${task.task}" was retrieved, based on its ID.`);
            res.json(task);
        } else {
            res.status(404).json({ Error: 'No task found by its ID. Start adding tasks to the collection.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Error retrieving task by its ID. Please try again later.' });
    });

});


// UPDATE controller ************************************
app.put('/tasks/:_id', (req, res) => {
    tasks.updateTask(
        req.params._id, 
        req.body.task, 
        req.body.priority, 
        req.body.due_date
    )
    .then(task => {
        console.log(`"${task.task}" was updated.`);
        res.json(task);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Error updating tasks. Please try again later.' });
    });
});


// DELETE Controller ******************************
app.delete('/tasks/:_id', (req, res) => {
    tasks.deleteTaskById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} task was deleted.`);
                res.status(200).send({ Success: 'Task deleted successfully' });
            } else {
                res.status(404).json({ Error: 'Task not found. Unable to delete.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Error deleting task. Please try again later.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});