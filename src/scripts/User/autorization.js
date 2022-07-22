const book__page = document.querySelector('.book__page')
const login_gape = document.querySelector('.login__page')
const loader = document.querySelector('.loader')
const warningError = document.querySelector(".warning-sign");

async function autorization(user) {
  loader.style.display = 'flex'
  let response = await fetch("http://localhost:1717/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(user),
  });
  let result = await response.json();
  loader.style.display = 'none'
  
  if (typeof result === "string") {
    warningError.textContent = result + "*";
    warningError.style.color = 'red'
  } else {
    localStorage.setItem("userdata", JSON.stringify(result));
    login_gape.classList.add('anim_active')
    book__page.style.display = "block"
  }
}

export default autorization;