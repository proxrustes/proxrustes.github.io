const Skills = [
  { title: "JavaScript", iconURL: "iconURL" },
  { title: "TypeScript", iconURL: "iconURL" },
  { title: "HTML", iconURL: "iconURL" },
  { title: "CSS", iconURL: "iconURL" },
  { title: "React", iconURL: "iconURL" },
  { title: "NextJS", iconURL: "iconURL" },
  { title: "Tailwind", iconURL: "iconURL" },
  { title: "MUI", iconURL: "iconURL" },
  { title: "MSSQL", iconURL: "iconURL" },
  { title: "SQLite", iconURL: "iconURL" },
  { title: "MySQL", iconURL: "iconURL" },
  { title: "Boorstrap", iconURL: "iconURL" },
  { title: "Figma", iconURL: "iconURL" },
];

function createSkillHtml(skill) {
  return `
        <div class="skill">
            <h1>${skill.title}</h1>
            <p>${skill.iconURL}</p>
        </div>
    `;
}
function populateSkills() {
  const Container = document.getElementById("skills-container");

  Skills.forEach((work) => {
    const Html = createSkillHtml(work);
    Container.insertAdjacentHTML("beforeend", Html);
  });
}


document.addEventListener("DOMContentLoaded", function () {
    populateSkills();
  });
  