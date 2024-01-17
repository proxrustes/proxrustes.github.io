const Education = {
  ENG: [
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
  ],
  ESP: [
    {
      title: "Licenciatura en Ingeniería de Sistemas de Computación y Robótica",
      time: "Septiembre de 2021 - JULIO de 2025",
      where:
        "Universidad Técnica Nacional de Ucrania 'Instituto Politécnico de Kiev'",
    },
    {
      title: "Administración y Dirección de Empresas",
      time: "Abril de 2022 - Abril de 2023",
      where: "Escuela de Economía y Derecho de Berlín",
    },
    {
      title: "Aplicaciones web con JavaScript",
      time: "MAYO de 2022",
      where: "BINARY STUDIO",
    },
    { title: "SQL Avanzado", time: "ABRIL de 2022", where: "ITVDN" },
  ],
};

function createEducationHtml(edu) {
  return `
        <div class="skill">
        <p>${edu.time}</p>
        <div class="skill-container">
        <h2>${edu.title}</h2>
        <h5>${edu.where}</h5>
        </div>
        </div>
    `;
}
function populateEdu(language) {
  const Container = document.getElementById("education-container");

  Container.innerHTML = "";
  const education = Education[language] || [];

  education.forEach((work) => {
    const Html = createEducationHtml(work);
    Container.insertAdjacentHTML("beforeend", Html);
  });
}
window.addEventListener("languageChanged", (event) => {
  populateEdu(event.detail);
});
