import { configureStore } from "@reduxjs/toolkit";

import { mealAPI } from "../services/mealAPI.js";

export const store = configureStore({
  reducer: { [mealAPI.reducerPath]: mealAPI.reducer },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(mealAPI.middleware);
  },
});
