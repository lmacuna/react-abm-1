import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/users/index.js";
import alerta from"./slices/alertInicio/index.js"

export default configureStore({
    reducer:{
        user,
        alerta,
    }
});




