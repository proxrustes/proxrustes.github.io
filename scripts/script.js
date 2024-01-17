const Posts = [
  { title: "name1", description: "description1", subtitle: "", imageURL: "" },
  { title: "name2", description: "description2", subtitle: "", imageURL: "" },
  { title: "name3", description: "description3", subtitle: "", imageURL: "" }
];
const Education = [
  { title: "name1", time: "description1", where: ""},
  { title: "name1", time: "description1", where: ""},
  { title: "name1", time: "description1", where: ""},
];
const Skills = [
  { title: "name1", iconURL: "iconURL" },
  { title: "name2", iconURL: "iconURL" },
  { title: "name3", iconURL: "iconURL" }
];
const Work = [
  { title: "name1", time: "description1", tasks: ["1", "1"] },
  { title: "name2", time: "description1", tasks: ["1", "1"] },
  { title: "name3", time: "description1", tasks: ["1", "1"] }
];

function createPost(post) {
  return `
      <div class="post">
          <h1>${post.title}</h1>
          <p>${post.description}</p>
      </div>
  `;
}
function createSkill(skill) {
  return `
      <div class="skill">
          <h1>${skill.title}</h1>
          <p>${skill.iconURL}</p>
      </div>
  `;
}

function createWorkExp(work) {
  return `
      <div class="work">
          <h1>${work.title}</h1>
          <p>${work.time}</p>
      </div>
  `;
}
function createEdu(edu) {
  return `
      <div class="skill">
          <h1>${edu.title}</h1>
          <p>${edu.time}</p>
      </div>
  `;
}

function initTabs() {
  const tabs = document.querySelectorAll(".menu a");
  const containers = document.querySelectorAll(".content-container");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      hideAllContainers(containers);
      showTargetContainer(this.getAttribute("data-target"));
    });
  });
}

function hideAllContainers(containers) {
  containers.forEach((container) => {
    container.style.display = "none";
  });
}

function showTargetContainer(targetId) {
  const targetContainer = document.getElementById(targetId);
  targetContainer.style.display = "block";
}
function populateEdu() {
  const Container = document.getElementById("education-container");

  Work.forEach((work) => {
    const Html = createEdu(work);
    Container.insertAdjacentHTML("beforeend", Html);
  });
}
function populateSkills() {
  const Container = document.getElementById("skills-container");

  Work.forEach((work) => {
    const Html = createSkill(work);
    Container.insertAdjacentHTML("beforeend", Html);
  });
}
function populateExp() {
  const Container = document.getElementById("experience-container");

  Work.forEach((work) => {
    const Html = createWorkExp(work);
    Container.insertAdjacentHTML("beforeend", Html);
  });
}
function populatePosts() {
  const Container = document.getElementById("miscellaneous-container");

  Posts.forEach((post) => {
    const Html =  createPost(post);
    Container.insertAdjacentHTML("beforeend", Html);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  populatePosts();
  populateEdu();
  populateExp();
  populateSkills();
  initTabs();
});
