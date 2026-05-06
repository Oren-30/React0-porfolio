import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import ProjectDetail from "./ProjectDetail";

function App() {
  const [projects, setProjects] = useState([]);

  function addProject(project) {
    setProjects([...projects, { ...project, id: Date.now() }]);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home projects={projects} addProject={addProject} />} />
        <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;