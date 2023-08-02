function openRole(roleId) {
    let sections = document.getElementsByClassName('role-section');
  
    for(let i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
  
    document.getElementById(roleId).style.display = "block";
  }
  
  function toggleProjectDetails(detailsId) {
    let details = document.getElementById(detailsId);
  
    if (details.style.display === "none") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }
  