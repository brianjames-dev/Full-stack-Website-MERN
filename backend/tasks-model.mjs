// Models for the task Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: '500: Could not connect to our super sweet task completion server.' });
    } else  {
        console.log('Success: Connected to our super sweet task completion server!');
    }
});

// SCHEMA: Define the collection's schema.
const taskSchema = mongoose.Schema({
	task:    { type: String, required: true },
	priority:     { type: Number, required: true },
	due_date: { type: Date, required: true }
});

// Compile the model from the schema 
// by defining the collection name "tasks".
const tasks = mongoose.model('Tasks', taskSchema);


// CREATE model *****************************************
const createTask = async (task, priority, due_date) => {
    const create = new tasks({ 
        task: task, 
        priority: priority, 
        due_date: due_date 
    });
    return create.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveTasks = async () => {
    const query = tasks.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveTaskByID = async (_id) => {
    const query = tasks.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteTaskById = async (_id) => {
    const result = await tasks.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateTask = async (_id, task, priority, due_date) => {
    const result = await tasks.replaceOne({_id: _id }, {
        task: task,
        priority: priority,
        due_date: due_date
    });
    return { 
        _id: _id, 
        task: task,
        priority: priority,
        due_date: due_date 
    }
}

// EXPORT the variables for use in the controller file.
export { createTask, retrieveTasks, retrieveTaskByID, updateTask, deleteTaskById }