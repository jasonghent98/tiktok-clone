import create from 'zustand'
import {persist} from 'zustand/middleware'
import axios from 'axios'

// authstore func returns an object with the following methods/props
const authStore = (set: any) => ({
    userProfile: null,
    addUser: (user: any) => set({userProfile: user})
});

const useAuthStore = create(
    persist(authStore, {name: 'auth'})
)

export default useAuthStore