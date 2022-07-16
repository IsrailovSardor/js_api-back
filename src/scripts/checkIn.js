import { renderBackRequest } from "./autorization.js";

const book__page = document.querySelector('.book__page')
const login_gape = document.querySelector('.login__page')
async function checkIn(user) {
  let response = await fetch("http://localhost:1717/login", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(user),
  });
  let result = await response.json();
  if (typeof result === "string") {
    renderBackRequest(result);
  } else {
    localStorage.setItem("userdata",JSON.stringify(result));
    login_gape.classList.add('anim_active')
    book__page.style.display="block"
  }
}

export default checkIn;