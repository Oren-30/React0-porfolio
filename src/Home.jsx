import { Link } from "react-router-dom";
import { useState } from "react";

function Home({ projects, addProject }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addProject({ title });
    setTitle("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Projects</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add</button>
      </form>

      <hr />

      {/* PROJECT LIST */}
      {projects.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <Link to={`/project/${p.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;