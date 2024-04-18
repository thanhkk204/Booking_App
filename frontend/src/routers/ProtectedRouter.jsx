import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../context/AuthContextProvider'

export default function ProtectedRouter({children, allowedRoles}) {
    const {token, role} = useContext(authContext)

    const isAllowed = allowedRoles.includes(role)

    return isAllowed && token ? children : <Navigate to="/login" replace={true}/>
}
