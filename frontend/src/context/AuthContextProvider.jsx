import { createContext, useReducer } from "react";

const initialState = {
    user: null,
    token: null,
    role: null,
}
const authReducer = (state, action)=>{
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                token: null,
                role: null,
            }
            break;
        case "LOGIN_SUCCESS":

            return {
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role,
            }
            break;
        case "LOGOUT":
            return {
                user: null,
                token: null,
                role: null,
            }
            break;
    
        default:
            return state
    }
}
export const authContext = createContext({})

const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(authReducer, initialState)
    return <authContext.Provider value={{user: state.user, token: state.token, role:state.role, dispatch}}>
        {children}
    </authContext.Provider>
}
export default AuthContextProvider