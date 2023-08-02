function openRole(roleId) {
    let sections = document.getElementsByClassName('role-section');
  
    for(let i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
  
    document.getElementById(roleId).style.display = "block";
  }
  