import { getCategories } from "./Categories/categories.js";
import login from "./Login/login.js";
import { placeOrder, getOrders} from "./Orders/orders.js";
import { getProductsByCategory, getProducts } from "./Products/products.js";
import { createUser } from "./Users/users.js";
const email = 'email@gmail.com'
const password = '12345678Mm'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmllbEBnbWFpbC5jb20iLCJuYW1lIjoiRGFuaWVsIEJlemVycmEiLCJpYXQiOjE3MDk3MzU0MDJ9.gdHr13mVUnFY7hf6VKG7rzZblggkyCqn2dI3tMx6o-g"

const orders = [
    {"indexProduct": 5, "productQuantity": 2},
    {"indexProduct": 5, "productQuantity": 3},
    {"indexProduct": 5, "productQuantity": 3},
    {"indexProduct": 6, "productQuantity": 2}
]

const user = {
    name: "Yasmin",
    email: "carloto@gmail.com",
    password: "yasmin0Y"
}

// getCategories().then(response => console.log(response))
// getProducts().then(response => console.log(response))
// getProductsByCategory('acessorioss').then(response => console.log(response))
// placeOrder(orders, token).then(response => console.log(response))
// getOrders(token).then(response => console.log(response))
createUser(user.name, user.email, user.password).then(data => console.log(data))