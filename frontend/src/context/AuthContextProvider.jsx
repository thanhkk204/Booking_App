import { createContext, useEffect, useReducer } from "react";

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    role: localStorage.getItem('role') ? localStorage.getItem('role') : null,
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

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user))
        localStorage.setItem('token', state.token)
        localStorage.setItem('role', state.role)
    }, [state])
    return <authContext.Provider value={{user: state.user, token: state.token, role:state.role, dispatch}}>
        {children}
    </authContext.Provider>
}
export default AuthContextProvider