function initTabs() {
  const tabs = document.querySelectorAll(".menu li");
  const containers = document.querySelectorAll(".content-container");
  const cards = document.querySelectorAll(".card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      tabs.forEach((t) => t.classList.remove("selected"));
      this.classList.add("selected");
      hideAllContainers(containers);
      showTargetContainer(this.getAttribute("data-target"));
      initModal()
    });
  });

  cards.forEach((card) => {
    card.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("data-target");
      tabs.forEach((t) => t.classList.remove("selected"));
      document.querySelector(`.menu li[data-target="${targetId}"]`).classList.add("selected");
      hideAllContainers(containers);
      showTargetContainer(targetId);
    });
  });

  const defaultTab = document.getElementById("about-tab");
  if (defaultTab) {
    defaultTab.classList.add("selected");
    showTargetContainer(defaultTab.getAttribute("data-target"));
  }
}

function hideAllContainers(containers) {
  containers.forEach((container) => {
    container.style.display = "none";
  });
}

function showTargetContainer(targetId) {
  const targetContainer = document.getElementById(targetId);
  if (targetContainer) {
    targetContainer.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initTabs();
});
