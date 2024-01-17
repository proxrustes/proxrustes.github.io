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

function populatePosts() {
  const postContainer = document.getElementById("miscellaneous-container");

  Posts.forEach((post) => {
    const postHtml = createPost(post);
    console.log(postHtml);
    postContainer.insertAdjacentHTML("beforeend", postHtml);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  populatePosts();
  initTabs();
});
