const projects = document.querySelectorAll(".ProjectsList");
let filter = document.querySelector("#Filter select");

console.log(filter);
for (let i = 0; i < projects.length; i++) {
  if (i == filter.value) {
    projects[i].style.display = "initial";
  } else {
    projects[i].style.display = "none";
  }
}
filter.addEventListener("change", function () {
  for (let i = 0; i < projects.length; i++) {
    if (i == filter.value) {
      projects[i].style.display = "initial";
    } else {
      projects[i].style.display = "none";
    }
  }
});
