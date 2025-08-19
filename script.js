function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;
  if(u === "Aditi" && p === "1614") {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("content").style.display = "block";
    showPage('home');
  } else {
    alert("❌ Wrong username or password!");
  }
}

function showPage(pageId) {
  let pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  document.getElementById(pageId).style.display = "block";
}

function logout() {
  document.getElementById("content").style.display = "none";
  document.getElementById("login-box").style.display = "block";
}
