const Posts = {
  ENG: [
    {
      title: "ReactDay Berlin",
      description: "description1",
      subtitle: "volunteer",
      imageURL: "",
    },
    {
      title: "TestJS Summit Berlin",
      description: "description3",
      subtitle: "volunteer",
      imageURL: "",
    },
    {
      title: "Vector DB & LLM Hackathon",
      description: "",
      subtitle: "participant",
      imageURL: "images/hacathon.jpg",
    },
    {
      title: "PyCon 2023",
      description: "",
      subtitle: "attendee",
      imageURL: "",
    },
  
  ],
  ESP: [
    {
      title: "ReactDay Berlin",
      description: "description1",
      subtitle: "volunteer",
      imageURL: "",
    },
    {
      title: "TestJS Summit Berlin",
      description: "description3",
      subtitle: "volunteer",
      imageURL: "",
    },
    {
      title: "PyCon 2023",
      description: "",
      subtitle: "attendee",
      imageURL: "",
    },
  ],
};

function createPostHtml(post) {
  return `
        <div class="post">
        <img src="${post.imageURL}" width="300" height="200">
        <div class="post-info">
          <h2>${post.title}</h2>
          <h4>${post.subtitle}</h4>
            <p>${post.description}</p>
        </div>
          
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
