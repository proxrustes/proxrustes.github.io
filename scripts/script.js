const Posts = [
  { title: "name1", description: "description1" },
  { title: "name2", description: "description2" },
  { title: "name3", description: "description3" },
];

document.addEventListener("DOMContentLoaded", function () {
  const postContainer = document.getElementById("post-container");

  Posts.forEach((post) => {
    const postHtml = `
          <div class="post">
              <h1>${post.title}</h1>
              <p>${post.description}</p>
          </div>
      `;

    postContainer.insertAdjacentHTML("beforeend", postHtml);
  });
});
