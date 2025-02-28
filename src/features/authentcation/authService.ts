import { store } from "@/app/store"

export const authService = {

async login(){

    //api call   const user

    store.dispatch(loginSucess());

  
}

async logout(){

//logout logic
store.dispatch(logoutSuccess());



}




};