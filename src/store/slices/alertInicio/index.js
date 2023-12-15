import { createSlice } from "@reduxjs/toolkit";


export const alertaSlice=createSlice({
    name:'alerta',
    initialState:{
        alerta:''
    },
    reducers:{
        setAlerta:(state,action)=>{
            state.alerta=action.payload
        }
    }
});

export default alertaSlice.reducer;

export const {setAlerta}=alertaSlice.actions