import { getUpdateBook } from "./getRequests";

function onClickFavorites() {
  const favoriteBtns = document.querySelectorAll(".favorite");
  favoriteBtns.forEach((element) => {
    const favoriteId = element.id.substring(1)
    
    element.addEventListener("click", () => {
      debugger
      const favorite = {
        isFavorite: element.checked,
      };
      getUpdateBook(favoriteId, favorite);
      console.log(getUpdateBook);
    });
  });
}

export default onClickFavorites;