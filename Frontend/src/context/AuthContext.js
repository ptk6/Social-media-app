import {  createContext, useReducer} from "react"
import AuthReducer from "./AuthReducer";
const INITIAL_STATE={
    user:{
        _id:"64eb84111dcaadcd1d7cac59",
        username:"Bansita",
        email:"Bansi@gmail.com",
        profilePicture:"Person/1.jpeg",
        coverPicture:"",
        isAdmin:"false",
        followers:[],
        following:[],
        },
    isFetching:false,
    error:false,
};
export const AuthContext=createContext(INITIAL_STATE);

export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE);
    return(
        <AuthContext.Provider value={{
            user:state.user , 
            isFetching:state.isFetching, 
            error:state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    )
}