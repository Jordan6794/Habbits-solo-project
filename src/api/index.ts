import axios from 'axios'
import { Habit } from '../components/Table/habits.model'

const API = axios.create({baseURL: 'https://habits-project-backend.herokuapp.com'})
// baseUrl: 'https://habits-project-backend.herokuapp.com'
// baseUrl: 'http://localhost:5000'

API.interceptors.request.use((req) => {
    if(localStorage.getItem('User')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('User')).token}`
    }

    return req
})

export const fetchHabits = (collection: string) => API.get('/posts', {params: {collection}})
export const postHabit = (habit: Habit, collection: string) => API.post('/posts', {habit, collection})
export const updateHabit = (habit: Habit, collection: string) => API.patch(`${'/posts'}/${habit._id}`, {habit, collection})
export const deleteHabit = (id: string, collection: string) => API.delete(`${'/posts'}/${id}`, {params: {collection}})

export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)