//language settings
const languages = [
  { name: "English", code: "ENG", class: "lang-eng" },
  { name: "Ukrainian", code: "UKR", class: "lang-ukr" }
];

function setLanguage(language) {
  localStorage.setItem("selectedLanguage", language);
  window.dispatchEvent(
    new CustomEvent("languageChanged", { detail: language })
  );
}

function getStoredLanguage() {
  return localStorage.getItem("selectedLanguage") || "ENG";
}

function attachLanguageChangeListeners() {
  const languagesDiv = document.querySelector(".languages");

  languages.forEach((language) => {
    const languageLink = document.createElement("a");
    languageLink.id = language.class;
    languageLink.textContent = language.code;
    languageLink.addEventListener("click", () => {
      setLanguage(language.code);

      languagesDiv.querySelectorAll("a").forEach((link) => {
        link.classList.remove("selected");
      });

      languageLink.classList.add("selected");
    });

    languagesDiv.appendChild(languageLink);
    if (language !== languages[languages.length - 1]) {
      const separator = document.createTextNode(" / ");
      languagesDiv.appendChild(separator);
    }
  });
}

// loading
document.addEventListener("DOMContentLoaded", function () {
  attachLanguageChangeListeners();
  const selectedLanguageCode = getStoredLanguage();

  const selectedLanguageClass = languages.find(
    (language) => language.code === selectedLanguageCode
  )?.class;

  if (selectedLanguageClass) {
    document.getElementById(selectedLanguageClass)?.classList.add("selected");
  }

  window.dispatchEvent(
    new CustomEvent("languageChanged", { detail: selectedLanguageCode })
  );
});
