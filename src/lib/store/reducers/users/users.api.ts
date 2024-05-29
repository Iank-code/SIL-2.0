// import {
//   BaseQueryFn,
//   EndpointBuilder,
//   EndpointDefinitions,
//   createApi,
//   fetchBaseQuery,
// } from "@reduxjs/toolkit/query/react";
// // import {}
// import { getTokens } from "../../helpers";
// import { user } from "../../../../../types";

// export const usersApi = createApi({
//   reducerPath: "usersApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/users`,
//     headers: {
//       accept: "application/json",
//     },
//     prepareHeaders: (headers: Headers): Headers => {
//       const { access } = getTokens();

//       if (typeof access === "string")
//         headers.set("Authorization", `Bearer ${access}`);

//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getUsers: builder.query<user[], void>({
//       query: () => ({
//         url: `/`,
//       }),
//       transformResponse(response: any) {
//         return response.data;
//       },
//       transformErrorResponse(response): any {
//         return response.data as any;
//       },
//     }),
//   }),
// });

// export const { useGetUsersQuery } = usersApi;

// import {
//   BaseQueryFn,
//   EndpointBuilder,
//   EndpointDefinitions,
//   createApi,
//   fetchBaseQuery,
// } from "@reduxjs/toolkit/query/react";
// import { getTokens } from "../../helpers";
// import { user, album } from "../../../../../types"; // Ensure 'album' type is defined

// export const usersApi = createApi({
//   reducerPath: "usersApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
//     prepareHeaders: (headers: Headers): Headers => {
//       const { access } = getTokens();

//       if (typeof access === "string") {
//         headers.set("Authorization", `Bearer ${access}`);
//       }

//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getUsers: builder.query<user[], void>({
//       query: () => ({
//         url: `/users`,
//       }),
//       transformResponse(response: any) {
//         return response.data;
//       },
//       transformErrorResponse(response): any {
//         return response.data as any;
//       },
//     }),
//     getAlbumsByUserId: builder.query<album[], number>({
//       query: (userId) => ({
//         url: `/albums`,
//         params: { userId },
//       }),
//       transformResponse(response: any) {
//         return response.data;
//       },
//       transformErrorResponse(response): any {
//         return response.data as any;
//       },
//     }),
//   }),
// });

// export const { useGetUsersQuery, useGetAlbumsByUserIdQuery } = usersApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { user } from "../../../../../types"; // Ensure the 'user' type is defined

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<user[], void>({
      query: () => "/users",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
