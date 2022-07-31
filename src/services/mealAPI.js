import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealAPI = createApi({
  reducerPath: "mealAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api",
  }),

  endpoints: (builder) => ({
    categories: builder.query({
      query: () => "/json/v1/1/categories.php",
    }),
    mealByCategory: builder.query({
      query: (ctg) => `/json/v1/1/filter.php?c=${ctg}`,
    }),
  }),
});

export const { useCategoriesQuery, useMealByCategoryQuery } = mealAPI;
