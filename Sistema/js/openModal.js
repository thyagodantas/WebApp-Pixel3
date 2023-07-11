// Seleciona o botão de abrir o modal
const openModalBtns = document.querySelectorAll(".open-modal");

// Seleciona o modal e o botão de fechar
const modal = document.querySelector("#modal");
const closeModalBtn = document.querySelector("#close-modal");

// Abre o modal quando o botão de abrir é clicado
openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    setTimeout(() => {
      modal.style.opacity = "1";
      modal.querySelector(".modal-content").style.opacity = "1";
      modal.querySelector(".modal-content").style.transform = "translateY(0)";
    }, 50);
  });
});

// Fecha o modal quando o botão de fechar é clicado
closeModalBtn.addEventListener("click", () => {
  modal.style.opacity = "0";
  modal.querySelector(".modal-content").style.opacity = "0";
  modal.querySelector(".modal-content").style.transform = "translateY(-50px)";
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
});

// Fecha o modal quando o usuário clica fora da área do modal
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.opacity = "0";
    modal.querySelector(".modal-content").style.opacity = "0";
    modal.querySelector(".modal-content").style.transform = "translateY(-50px)";
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
});
