import onClickFavorites from "./addFavorites";
import { editBook } from "./editBooks";

export function renderMoreInform(bookInform) {
  const favorite = document.querySelector('.favorite_icon')
  favorite.innerHTML =
    ` <input type="checkbox" class="favorite" ${bookInform.isFavorite ? "checked" : ""} 
      id="f${bookInform.id}"></input>
      <label for="f${bookInform.id}" class="favorite-label">
      </label> `
  for (let key in bookInform) {
    if (key !== "id" && key !== "isFavorite") {
      document.querySelector(`.${key}`).textContent = bookInform[key];
    }
  }
  onClickFavorites()
  editBook(bookInform)
}
