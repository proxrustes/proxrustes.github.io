const Work = [
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
  { title: "name3", time: "description1", tasks: ["1", "1"] },
];

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

function populateExp() {
  const Container = document.getElementById("experience-container");

  Work.forEach((work) => {
    const Html = createWorkHtml(work);
    Container.insertAdjacentHTML("beforeend", Html);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  populateExp();
});
