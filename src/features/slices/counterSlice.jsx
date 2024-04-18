import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  users: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },

    resetCount: () => {
      return initialState;
    },
    increamentAmount: (state, action) => {
      state.count += action.payload;
    },

    decrementAmount: (state, action) => {
      const number = state.count - action.payload;
      state.count = number < 0 ? 0 : number;
    },

    // addUser: (state, action) => {
    //   state.users.push(action.payload);
    // },
    addUser: (state, action) => {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    },
  },
});

export const {
  increament,
  decrement,
  resetCount,
  increamentAmount,
  decrementAmount,
} = counterSlice.actions;
export default counterSlice.reducer;
