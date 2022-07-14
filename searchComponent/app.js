const searchInput = document.querySelector("#search-input");
const results = document.querySelector(".results");
const productNames = document.querySelectorAll(".name");

searchInput.addEventListener("keyup", (e) => {
  //console.log(e.target.value);
  const searchQuery = searchInput.value.trim().toLowerCase();
  productNames.forEach((name) => {
    if (!name.textContent.toLowerCase().includes(searchQuery)) {
      name.classList.add("filtered");
    }
    if (name.textContent.toLowerCase().includes(searchQuery)) {
      name.classList.remove("filtered");
    }
  });
});

//console.log(productNames.forEach((name) => console.log(name.textContent)));
