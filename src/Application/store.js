import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Application/counterSlice";
import todoSlice from "../Application/todoSlice";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		todo: todoSlice,
	},
});
