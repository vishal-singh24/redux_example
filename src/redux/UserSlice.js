import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        data: []
    },
    reducers: {
        addUser(state, action) {
            state.data.push(action.payload);
        },
        editUser(state,action){
            let temp=state.data;
            temp.map((item,index)=>{
                if(index==action.payload.index)
                {
                    item.userName=action.payload.userName;
                    item.userEmail=action.payload.userEmail;
                    item.userMobile=action.payload.userMobile;
                    item.userAddress=action.payload.userAddress;
                }
            });
            state.data=temp;

        },
        deleteUser(state,action){
            let temp=state.data;
            let final =temp.filter((item,index)=>{
                return index!=action.payload
            });
            state.data=final;
        }
    }
});

export const { addUser,editUser,deleteUser } = UserSlice.actions
export default UserSlice.reducer