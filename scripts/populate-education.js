const Education = {
  ENG: [
    {
      title: "BA in Computer Systems Engineering and Robotics",
      time: "September 2021 - July 2025",
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
      time: "May 2022",
      where: "BINARY STUDIO",
    },
    { title: "Advanced SQL", time: "April 2022", where: "ITVDN" },
  ],
  ESP: [
    {
      title: "Licenciatura en Ingeniería de Sistemas de Computación y Robótica",
      time: "Septiembre de 2021 - Julio de 2025",
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
      time: "Mayo de 2022",
      where: "BINARY STUDIO",
    },
    { title: "SQL Avanzado", time: "ABRIL de 2022", where: "ITVDN" },
  ],
  DE: [
    {
      title: "Bachelor in Computer Systems Engineering und Robotik",
      time: "September 2021 - Juli 2025",
      where:
        "Nationale Technische Universität der Ukraine 'Kiewer Polytechnisches Institut'",
    },
    {
      title: "Administración y Dirección de Empresas",
      time: "April 2022 - April 2023",
      where: "Hochschule fur Wirtschaft und Recht Berlin",
    },
    {
      title: "Webanwendungen mit JavaScript",
      time: "Mai 2022",
      where: "BINARY STUDIO",
    },
    { title: "Fortgeschrittenes SQL", time: "April 2022", where: "ITVDN" },
  ],
  UKR: [
    {
      title: "Програмне забезпечення робототехнічних систем",
      time: "Вересень 2021 - Червень 2025",
      where:
        "Національний технічний університет України 'Київський політехнічний інститут імені Ігоря Сікорського'",
    },
    {
      title: "Бізнес-адміністрування та управління",
      time: "Квітень 2022 - Квітень 2023",
      where: "Hochschule fur Wirtschaft und Recht Berlin",
    },
    {
      title: "Веб-розробка з JavaScript",
      time: "Травень 2022",
      where: "BINARY STUDIO",
    },
    { title: "Продвинутий SQL", time: "Квітень 2022", where: "ITVDN" },
  ],
  RUS: [
    {
      title: "Програмное обеспечение роботутехнических систем",
      time: "Сентябрь 2021 - Июль 2025",
      where:
        "Национальный технический университет Украины «Киевский политехнический институт имени Игоря Сикорского»",
    },
    {
      title: "Бизнес-администрирование и управление",
      time: "Апрель 2022 - Апрель2023",
      where: "Hochschule fur Wirtschaft und Recht Berlin",
    },
    {
      title: "Веб-разработка на JavaScript",
      time: "Май 2022",
      where: "BINARY STUDIO",
    },
    { title: "Продвинутый SQL", time: "Апрель 2022", where: "ITVDN" },
  ],
};

function createEducationHtml(edu) {
  return `
        <div class="education">
        <p>${edu.time}</p>
        <div class="education-container">
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
