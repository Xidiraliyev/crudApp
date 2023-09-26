import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../pages/Data";
import { toast } from "react-toastify";




const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("users")) || userList;
  };
const userSlice = createSlice({
    name: 'users',
    initialState: getCartFromLocalStorage(),
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
            localStorage.setItem("users", JSON.stringify(state))
            toast.success('Add new user')
        },
        updateUser: (state, action) => {
            const {id, email, name} = action.payload
            const uu = state.find(user => user.id == id)
            if(uu) {
                uu.name = name
                uu.email = email
            }
            localStorage.setItem("users", JSON.stringify(state))
            toast.update('Update user')
        },
        deleteUser: (state, action) => {
            const {id} = action.payload
            const uu = state.find(user => user.id == id)
            if(uu) {
                return state.filter(f => f.id !== id)
            }
            localStorage.setItem("users", JSON.stringify(state))
            toast.info('Delete user')
        }
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer