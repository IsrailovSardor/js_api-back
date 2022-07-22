import { getUpdateBook } from "./getRequests";

function putPreviousData(bookInform){
  const editPageInputs = document.querySelectorAll(".edit_input");
  editPageInputs.forEach(element=>{
    element.value = bookInform[element.name];
  })
}

function getBookData() {
  const creatBookInputs = document.querySelectorAll(".edit_input")
  let bookData = {};
  creatBookInputs.forEach((element) => {
      bookData[element.name] =
        element.type === "number"
          ? +element.value
          : element.name === "genres"
          ? element.value.split(" ")
          : element.value;
    });
    return bookData;
  }
  getBookData()

export function editBook(bookInform) {
  
  const editBookBtn = document.querySelector(".save");
  putPreviousData(bookInform);
  editBookBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    const newBookData = getBookData();
    getUpdateBook(bookInform.id, newBookData);
    location.reload()
  })
}