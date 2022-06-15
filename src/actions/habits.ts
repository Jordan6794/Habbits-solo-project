import * as api from '../api/index'
import { Habit } from '../components/Table/habits.model'

export const getHabits = async (): Promise<Habit[] | undefined> => {
    try {
        const {data} = await api.fetchHabits()
        return data
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message)
            throw new Error(error.message)
        } else {
            throw new Error('Unknown error')
        }
    }
    
}

export const postHabit = async (habit: Habit) => {
    try {
        const response = await api.postHabit(habit)
        return response
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message)
            throw new Error(error.message)
        } else {
            throw new Error('Unknown error')
        }   
    }
}

export const updateHabit = async (habit: Habit) => {
    try {
        const response = await api.updateHabit(habit)
        return response
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message)
            throw new Error(error.message)
        } else {
            throw new Error('Unknown error')
        }
    }
}

export const deleteHabit = async (id: string) => {
    try {
        const response = await api.deleteHabit(id)
        return response
    } catch (error) {
        if(error instanceof Error){
            console.log(error.message)
            throw new Error(error.message)
        } else {
            throw new Error('Unknown error')
        }
    }
}