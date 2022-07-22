const validateEmail = (email) => {
  return String(email);
};

function Match() {
    console.log(document.getElementById("name"))
  if (document.getElementById("name").value != "") {
    if (
      document
        .getElementById("email")
        .value.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      if (document.getElementById("subject").value != "") {
        if (document.getElementById("content").value != "") {
            alert("The message want sent successfully!");
        } else {
          alert("Please enter a valid content");
        }
      } else {
        alert("Please enter a valid subject");
      }
    } else {
      alert("Please enter a valid email address");
    }
  } else {
    alert("Please enter a valid name");
  }
}
