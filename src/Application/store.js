import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Application/counterSlice";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
	},
});
