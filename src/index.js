import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <Skill skill="Javascript" emoji="💪" color="blue" />
      <Skill skill="React" emoji="👶" color="yellow" />
      <Skill skill="HTML & CSS" emoji="💪" color="red" />
      <Skill skill="Typescript" emoji="👶" color="green" />
      <Skill skill="GitHub" emoji="💪" color="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
