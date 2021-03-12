import api from './apiConfig'
import jwtDecode from 'jwt-decode'

export const allUsers = async () => {
  try {
    const response = await api.get("/users")
    return response.data
  } catch (error) {
    throw error 
  }
}

export const signUp = async credentials => {
  try {
    const resp = await api.post('/users/sign-up', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signIn = async credentials => {
  try {
    const resp = await api.post('/users/sign-in', credentials)
    localStorage.setItem('token', resp.data.token)
    const user = jwtDecode(resp.data.token)
    return user
  } catch (error) {
    throw error
  }
}

export const signOut = async user => {
    try {
        localStorage.clear()
        return true
    } catch (error) {
        throw error
    }
}

export const changePassword = async (passwords, user) => {
    try {
        const resp = await api.post('/users/change-password')
        return resp.data
    } catch (error) {
        throw error
    }
}

export const verifyUser = async () => {
    const token = localStorage.getItem('token')
    if (token) {
        const res = await api.get('/users/verify')
        return res.data
    }
    return false
}