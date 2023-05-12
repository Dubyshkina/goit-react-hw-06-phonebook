import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    contacts: JSON.parse(localStorage.getItem('contacts'))?? [],
}
 const contactsReducer = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
  addContact: (state, action) => {state.contacts.push(action.payload)},
  deleteContact: (state, action) => {state.contacts = state.contacts.filter(el => el.id !== action.payload)}
    },
})
 export default contactsReducer.reducer
 export const {addContact, deleteContact} = contactsReducer.actions;
 
