import { configureStore } from "@reduxjs/toolkit";
import categories from "./categories";
import login from "./login";
import cart from "./cart";
const store = configureStore({
    reducer: {
        category: categories,
        login: login,
        cart: cart
    }
})
export default store;