const Work = {
  ENG: [
    {
      title: "Catenion GmbH",
      time: "December 2022 - Current time",
      tasks: [
        "Designed and built interactive and responsive webpages with Next.JS",
        "Configured a database on SQLite using Prisma, and implemented scalable API endpoints to access it",
        "Created a Chrome Extension to interact with page elements using TypeScrip and MUI",
        "Performed unit testing with Jest",
      ],
    },
    {
      title: "Pet projects",
      time: "September 2022 - December 2022",
      tasks: [
        "Built a website with a simulated login page and a home page with interactive feed using Typescript, React, and Next.js",
        "Built a currency converter and a password validator on Angular + TS",
        "Introduced a section for showing weather in you current location using public API",
        "Used TailwindCSS to build pleasant UI",
        "Prototyped UI in Figma",
        "Deployed the websites to Docker",
      ],
    },
    {
      title: "Course Work",
      time: "March 2022",
      tasks: [
        "Worked on frontend with HTML/CSS and Bootstrap framework",
        "Realized registration and login based of sessions",
        "Built backend on a ASP.NET platform",
        "Implemented API controllers",
        "Created and managed a database using Entity Framework Core",
        "Deployed both the database and the website on Azure",
      ],
    },
    {
      title: "Drama School",
      time: "August 2020 - September 2021",
      tasks: [
        "Ensured correctness of API requests in JS",
        "Used HTML/CSS and Bootstrap to update pages and layouts",
      ],
    },
  ],
};
function createWorkHtml(workItem) {
  const tasksHtml = workItem.tasks.map((task) => `<li>${task}</li>`).join("");
  return `
        <div class="work-item">
            <h2>${workItem.title}</h2>
            <p><strong>Time:</strong> ${workItem.time}</p>
            <ul>${tasksHtml}</ul>
        </div>
    `;
}

function populateExp(language) {
  const Container = document.getElementById("experience-container");
  Container.innerHTML = "";

  const work = Work[language] || [];
  work.forEach((work) => {
    const Html = createWorkHtml(work);
    Container.insertAdjacentHTML("beforeend", Html);
  });
}
window.addEventListener("languageChanged", (event) => {
  populateExp(event.detail);
});
