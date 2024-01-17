//language settings
const languages = [
  { name: "English", code: "ENG", class: "lang-eng" },
  { name: "Spanish", code: "ESP", class: "lang-esp" },
  { name: "German", code: "DE", class: "lang-de" },
  { name: "Ukrainian", code: "UKR", class: "lang-ukr" },
  { name: "Russian", code: "RUS", class: "lang-ru" },
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
    const selectedLanguageClass = getStoredLanguage();
    document.getElementById(selectedLanguageClass)?.classList.add("selected");
    window.dispatchEvent(
      new CustomEvent("languageChanged", { detail: selectedLanguageClass })
    );
  });