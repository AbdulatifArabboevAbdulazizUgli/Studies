import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
function Avatar() {
  return <img className="avatar" src="react.jpg"></img>;
}
function Intro() {
  return (
    <>
      <h1>Jonas Schmedtmann</h1>
      <p>Full-stack web-developer and teacher at Udemy.</p>
    </>
  );
}

const Skill = ({ skillsList: { skill, level, color } }) => {
  if (level == "beginner")
    return (
      <li style={{ backgroundColor: color }} className="skill">
        {skill}👶
      </li>
    );
  if (level == "intermediate")
    return (
      <li style={{ backgroundColor: color }} className="skill">
        {skill}👍
      </li>
    );

  if (level == "advanced")
    return (
      <li style={{ backgroundColor: color }} className="skill">
        {skill}💪
      </li>
    );
};

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillsList={skill} key={skill.skill} />
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />

      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
