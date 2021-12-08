const searchBtn = document.querySelector(".btn-appear");

searchBtn.addEventListener("click", (event) =>{
    event.preventDefault();
  const searchBar = document.querySelector("#searchPanel");
  if (searchBar.classList.contains("d-none")) {
    searchBar.classList.remove("d-none");
  } else {
    searchBar.classList.add("d-none");

  }
});






/*searchBtn.addEventListener("click", () =>{
    let formBtn = document.querySelector(".searchPattern");
    if(formBtn.classList.contains("d-none")){
        formBtn.classList.remove("d-none");
        formBtn.style.display = "block";
    }else {
        formBtn.classList.add("d-none");
    }

});*/



