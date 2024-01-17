function initTabs() {
  const tabs = document.querySelectorAll(".menu a");
  const containers = document.querySelectorAll(".content-container");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      hideAllContainers(containers);
      showTargetContainer(this.getAttribute("data-target"));
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

document.addEventListener("DOMContentLoaded", function () {
  initTabs();
});
