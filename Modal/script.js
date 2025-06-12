const openModal = document.getElementById("openModal")
const modal = document.getElementById("myModal")
const closeModal = document.getElementById("closeModal")

openModal.addEventListener("click", function(){
    modal.classList.add("show")
})

closeModal.addEventListener("click", function(){
    modal.classList.remove("show")
})
modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
});
