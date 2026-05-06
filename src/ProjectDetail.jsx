import { useParams, Link } from "react-router-dom";

function ProjectDetail({ projects }) {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div style={{ padding: "20px" }}>
        <p>Project not found</p>
        <Link to="/">Back</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{project.title}</h1>
      <Link to="/">Back</Link>
    </div>
  );
}

export default ProjectDetail;