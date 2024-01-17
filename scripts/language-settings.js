//language settings

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
  document
    .getElementById("lang-eng")
    .addEventListener("click", () => setLanguage("ENG"));
  document
    .getElementById("lang-esp")
    .addEventListener("click", () => setLanguage("ESP"));
}

// loading
document.addEventListener("DOMContentLoaded", function () {
  attachLanguageChangeListeners();
  window.dispatchEvent(
    new CustomEvent("languageChanged", { detail: getStoredLanguage() })
  );
});
