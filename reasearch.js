function ShowHide(k) {
  var x = document.getElementById("Abstract" + k);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("show_button" + k);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("hide_button" + k);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 