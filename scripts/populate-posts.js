const Posts = {
  ENG: [
    {
      title: "ReactDay Berlin",
      description: "description1",
      subtitle: "volunteer",
      imageURL: "images/git-nation-badge.jpg",
    },
    {
      title: "TestJS Summit Berlin",
      description: "description3",
      subtitle: "volunteer",
      imageURL: "images/testjs-summit.jpg",
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
      imageURL: "images/pycon.jpg",
    },
  
  ],
  ESP:[
    {
      title: "ReactDay Berlin",
      description: "description1",
      subtitle: "volunteer",
      imageURL: "images/git-nation-badge.jpg",
    },
    {
      title: "TestJS Summit Berlin",
      description: "description3",
      subtitle: "volunteer",
      imageURL: "images/testjs-summit.jpg",
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
      imageURL: "images/pycon.jpg",
    },
  
  ],
  DE:[
    {
      title: "ReactDay Berlin",
      description: "description1",
      subtitle: "volunteer",
      imageURL: "images/git-nation-badge.jpg",
    },
    {
      title: "TestJS Summit Berlin",
      description: "description3",
      subtitle: "volunteer",
      imageURL: "images/testjs-summit.jpg",
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
      imageURL: "images/pycon.jpg",
    },
  
  ],
  UKR:[
    {
      title: "ReactDay Berlin",
      description: "description1",
      subtitle: "volunteer",
      imageURL: "images/git-nation-badge.jpg",
    },
    {
      title: "TestJS Summit Berlin",
      description: "description3",
      subtitle: "volunteer",
      imageURL: "images/testjs-summit.jpg",
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
      imageURL: "images/pycon.jpg",
    },
  
  ],
  RUS:[
    {
      title: "ReactDay Berlin",
      description: "description1",
      subtitle: "volunteer",
      imageURL: "images/git-nation-badge.jpg",
    },
    {
      title: "TestJS Summit Berlin",
      description: "description3",
      subtitle: "volunteer",
      imageURL: "images/testjs-summit.jpg",
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
      imageURL: "images/pycon.jpg",
    },
  
  ],
};

function createPostHtml(post) {
  return `
        <div class="post">
        <img src="${post.imageURL}" width="300" height="180">
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
