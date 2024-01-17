const PostsENG = [
  { title: "name1", description: "description1", subtitle: "", imageURL: "" },
  { title: "name2", description: "description2", subtitle: "", imageURL: "" },
  { title: "name3", description: "description3", subtitle: "", imageURL: "" },
];
const PostsESP = [
  {
    title: "name1ENS",
    description: "description1",
    subtitle: "",
    imageURL: "",
  },
  {
    title: "name1ENS",
    description: "description2",
    subtitle: "",
    imageURL: "",
  },
  {
    title: "name1ENS",
    description: "description3",
    subtitle: "",
    imageURL: "",
  },
];

function createPostHtml(post) {
  return `
        <div class="post">
            <h1>${post.title}</h1>
            <p>${post.description}</p>
        </div>
    `;
}

function populatePosts(language) {
  const Container = document.getElementById("miscellaneous-container");
  Container.innerHTML = "";

  let posts = language === "ESP" ? PostsESP : PostsENG;

  posts.forEach((post) => {
    const Html = createPostHtml(post);
    Container.insertAdjacentHTML("beforeend", Html);
  });
}

window.addEventListener("languageChanged", (event) => {
  populatePosts(event.detail);
});

document.addEventListener("DOMContentLoaded", () => {
  populatePosts(getStoredLanguage());
});
