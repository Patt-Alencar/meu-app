import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "intermediate",
    color: "#2662ea",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60dafb",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#efd8aa",
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#e84f33",
  },
  {
    skill: "Java",
    level: "beginner",
    color: "#5e8758",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <Data />
      <SkillsList />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./foto.red.jpg" alt="foto Patricia" />;
}

function Data() {
  return (
    <div className="data">
      <h1>Patrícia de Alencar</h1>
      <p>
        Front-end developer. I really love to code and I'm looking forward to
        getting a chance in the area. When I'm not studying I like reading e
        going to the beach.
      </p>
    </div>
  );
}
function SkillsList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
