function initTabs() {
  const tabs = document.querySelectorAll(".menu li");
  const containers = document.querySelectorAll(".content-container");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      tabs.forEach((t) => t.classList.remove("selected"));

      this.classList.add("selected");

      hideAllContainers(containers);
      showTargetContainer(this.getAttribute("data-target"));
      sidebar.style.display = "none";
    });
  });
}

function hideAllContainers(containers) {
  containers.forEach((container) => {
    container.style.display = "none";
  });
}

function showTargetContainer(targetId) {
  const targetContainer = document.getElementById(targetId);
  targetContainer.style.display = "block";
}

// loading
document.addEventListener("DOMContentLoaded", function () {
  initTabs();
});