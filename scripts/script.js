function openRole(roleId) {
    let sections = document.getElementsByClassName('role-section');
  
    for(let i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
  
    document.getElementById(roleId).style.display = "block";
  }
  
  function toggleProjectDetails(detailsId) {
    let modal = document.getElementById(detailsId);
    modal.style.display = "block";
  
    let span = modal.getElementsByClassName("close")[0];
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  
  
  