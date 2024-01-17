const Education = [
  {
    title: "BA in Computer Systems Engineering and Robotics",
    time: "September 2021 - JULY 2025",
    where:
      "National Technical University of Ukraine 'Kyiv Polytechnic Institute",
  },
  {
    title: "Business Administration and Management",
    time: "April 2022 - April 2023",
    where: "Berlin School of Economics and Law",
  },
  {
    title: "Web applications with JavaScript",
    time: "MAY 2022",
    where: "BINARY STUDIO",
  },
  { title: "Advanced SQL", time: "APRIL 2022", where: "ITVDN" },
];

function createEducationHtml(edu) {
  return `
        <div class="skill">
            <h2>${edu.title}</h2>
            <h3>${edu.where}</h3>
            <p>${edu.time}</p>
        </div>
    `;
}
function populateEdu() {
  const Container = document.getElementById("education-container");

  Education.forEach((work) => {
    const Html = createEducationHtml(work);
    Container.insertAdjacentHTML("beforeend", Html);
  });
}

document.addEventListener("DOMContentLoaded", function () {
    populateEdu();
  });
  