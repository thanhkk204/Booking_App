import React, { useEffect, useState } from 'react'
import { token } from '../config'

export default function userFetchData(url) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    useEffect(()=>{
         const fetchData = async ()=>{
            try {
                setLoading(true)
                const res = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const result = await res.json()
                if (!res.ok) {
                    throw new Error(result.message)
                }
                setLoading(false)
                setData(result.data)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
         }
         fetchData()
    }, [url])
  return {
    data,
    loading,
    error
  }
}
