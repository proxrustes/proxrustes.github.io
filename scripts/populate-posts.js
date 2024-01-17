const Posts = [
  { title: "name1", description: "description1", subtitle: "", imageURL: "" },
  { title: "name2", description: "description2", subtitle: "", imageURL: "" },
  { title: "name3", description: "description3", subtitle: "", imageURL: "" },
];
function createPostHtml(post) {
  return `
        <div class="post">
            <h1>${post.title}</h1>
            <p>${post.description}</p>
        </div>
    `;
}
function populatePosts() {
  const Container = document.getElementById("miscellaneous-container");

  Posts.forEach((post) => {
    const Html = createPostHtml(post);
    Container.insertAdjacentHTML("beforeend", Html);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  populatePosts();
});
