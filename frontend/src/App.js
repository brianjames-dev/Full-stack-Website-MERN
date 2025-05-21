// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import TopicsPage from './pages/TopicsPage';

// If your schema requires SHORT data input, then use the TABLE design.
import EditTaskPageTable from './pages/EditTaskPageTable';
import AddTaskPageTable from './pages/AddTaskPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [task, setTaskToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Brian James <i><img src="./favicon-32x32.png" className="App-logo" alt="Brian James Portfolio Website" /></i> Portfolio</h1>
            <p>(MERN)</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tasks" element={<TasksPage setTask={setTaskToEdit}/>} />
                    <Route path="/topics" element={<TopicsPage />} />
                 
                    <Route path="/create" element={<AddTaskPageTable />} /> 
                    <Route path="/update" element={<EditTaskPageTable taskToEdit={task} />} />

                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Brian James</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;