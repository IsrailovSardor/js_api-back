import "../styles/style.scss";
import { getLogin } from "./User/login";
import { transitionPage } from "./Transition/transitionPage";
import { modeLogin } from "./Transition/modeSign";
import { entryPage, logOut } from "./User/logout";
import { getUserLocal } from "./User/usersName";
import { getSignIn } from "./User/register";
import { getBooks } from './Book/getRequests'
modeLogin()
transitionPage()
logOut()
getLogin()
getSignIn()
entryPage()

const userName = JSON.parse(localStorage.getItem('userdata'))?.data.firstName
if (userName) {
    getUserLocal()
}
export const token = JSON.parse(localStorage.getItem("userdata"))?.token
if (token) {
    getBooks()
}