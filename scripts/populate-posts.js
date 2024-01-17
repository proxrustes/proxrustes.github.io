const Posts = {
  ENG: [
    { title: "name1", description: "description1", subtitle: "", imageURL: "" },
    { title: "name2", description: "description2", subtitle: "", imageURL: "" },
    { title: "name3", description: "description3", subtitle: "", imageURL: "" },
  ],
  ESP: [
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
  ],
};

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

  const posts = Posts[language] || []; 

  posts.forEach((post) => {
    const Html = createPostHtml(post);
    Container.insertAdjacentHTML("beforeend", Html);
  });
}

window.addEventListener("languageChanged", (event) => {
  populatePosts(event.detail);
});
