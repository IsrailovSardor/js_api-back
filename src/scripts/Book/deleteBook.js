import { deleteBook } from "./getRequests";

export function onClickCart(token) {
  const modal__delete = document.querySelector('.modal__delete');
  const btnsDelete = document.querySelectorAll(".trash");
  const btnDelete = document.querySelector('.da');
  const btnClose = document.querySelector('.net');

  btnsDelete.forEach((element) => {
    element.addEventListener("click", () => {
      modal__delete.style.display = "flex"
      btnDelete.addEventListener('click', () => {
        const id = element.classList[1]
        deleteBook(id, token);
        location.reload()
      })
      btnClose.addEventListener('click', () => {
        modal__delete.style.display = "none"
      })
    });
  });
}