import { sendNewBook } from "./getRequests";

function getBookData() {
  const creatBookInputs = document.querySelectorAll(".input__value");
  let bookData = {};

  creatBookInputs.forEach((element) => {
    if (!element.value) {
      element.classList.add('error')
    }
    element.addEventListener('input', () => {
      element.classList.remove('error')
    })
    bookData[element.name] =
      element.type === "number"
        ? +element.value
        : element.name === "genres"
          ? element.value.split(" ")
          : element.value;
  });
  return bookData;
}
const checkInput = (input) => {
  const regex = /^[A-Za-zА-Яа-я0-9]+$/;  

  if (!input.value.match(regex)) {
    return false
  } else {
    return true
  }
}

function addNewBooks() {
  const creatBookForm = document.querySelector(".block__inputs");
  const inputs = document.querySelectorAll(".input__value");

  creatBookForm.addEventListener("submit", (e) => {
    const values = Array.from(inputs).map((element) => {
      return checkInput(element)
    })

    const bookdata = getBookData();
    if (!values.includes(false)) {
      sendNewBook(bookdata)
    } else {
      e.preventDefault()
    }
  });
}

export default addNewBooks;