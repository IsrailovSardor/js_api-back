import { getBooks, getUpdateBook } from "./getRequests";
import renderBooks from "./renderBooks";

function onClickFavorites() {
  const favoriteBtns = document.querySelectorAll(".favorite");
  const books__items = document.querySelector(".book__items");
  favoriteBtns.forEach((element) => {
    const favoriteId = element.id.substring(1)
    element.addEventListener("click", () => {
      const favorite = {
        isFavorite: element.checked,
      };
      getUpdateBook(favoriteId, favorite);
      books__items.innerHTML = ''
      getBooks()
    });
  });
}


export default onClickFavorites;