

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {

    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSucess: (state,action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logoutSucess: (state,action)=>{
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});
 

export const {loginSucess, logoutSuccess} = authSlice.actions;
export default authSlice.reducer;