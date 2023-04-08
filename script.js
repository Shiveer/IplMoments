const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');




const teamSelect = document.getElementById("team-select");
const images = document.querySelectorAll("#gallery img");

teamSelect.addEventListener("change", function() {
  const selectedTeam = teamSelect.value;

  images.forEach(function(img) {
    if (img.getAttribute("data-team") === selectedTeam || selectedTeam === "All") {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
});
