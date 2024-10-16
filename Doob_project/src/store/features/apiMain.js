import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const mainApiSlice = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000",
    }),
    endpoints: (builder)=>({
        getMainData : builder.query({
            query: ()=> "/company/GetAll",
             transformResponse: (response) => {
                if(response.success){
                    return response.data;
                }else{
                    throw new Error(response.message);
                }
             },
        }),
        getServiceData : builder.query({
            query: ()=> "service/getall",
            transformResponse: (response)=>{
                return response;
            }
        }),
        getAcquireData: builder.query({
            query: ()=> "/acquire/getAll",
            transformResponse:(response)=>{
                return response;
            }
        })
    }),


})

export const {useGetMainDataQuery, useGetServiceDataQuery, useGetAcquireDataQuery} = mainApiSlice;

