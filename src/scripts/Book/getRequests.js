import renderBooks from "./renderBooks";
import {onClickCart} from './deleteBook'
import addNewBooks from './addBook'
import { renderMoreInform } from "./renderIdBook";

export const getToken =  () => {
  return JSON.parse(localStorage.getItem("userdata"))?.token
} 

export async function getBooks() {
  let response = await fetch("http://localhost:1717/books", {
      method: "GET",
      headers: { "X-Auth": getToken() },
  });
  let result = await response.json();
  renderBooks(result)
  onClickCart(getToken())
  addNewBooks()
}

export async function deleteBook(id) {
  let response = await fetch(`http://localhost:1717/books/delete/${id}`, {
    method: "DELETE",
    headers: { "X-Auth": getToken()},
  });
  let result = await response.json();
}

export async function sendNewBook(bookData) {
  let response = await fetch(`http://localhost:1717/books/create`, {
    method: "POST",
    headers: {
      "X-Auth": getToken(),
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(bookData),
  });
  let result = await response.json();
}

export async function getUpdateBook(id, bookData) {
    let response = await fetch(`http://localhost:1717/books/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(bookData),
      headers: {
        "X-Auth": getToken(),
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    let result = await response.json();
  }
  
  export async function getMoreInform(id) {
    const token = JSON.parse(localStorage.getItem("userdata")).token
    let response = await fetch(`http://localhost:1717/books/${id}`, {
      method: "GET",
      headers: { "X-Auth":token },
    }).then(result=>{return result.json()})
    renderMoreInform(response)
  }
  