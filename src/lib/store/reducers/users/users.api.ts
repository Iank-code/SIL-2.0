import {
  BaseQueryFn,
  EndpointBuilder,
  EndpointDefinitions,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
// import {}
import { getTokens } from "../../helpers";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/users`,
    headers: {
      accept: "application/json",
    },
    prepareHeaders: (headers: Headers): Headers => {
      const { access } = getTokens();

      if (typeof access === "string")
        headers.set("Authorization", `Bearer ${access}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => ({
        url: `/`,
      }),
      transformResponse(response: any) {
        return response.data;
      },
      //   transformErrorResponse(response): SystemErrorResponse {
      //     return response.data as SystemErrorResponse;
      //   },
    }),
  }),
});
