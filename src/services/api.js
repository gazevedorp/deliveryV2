import React from 'react'
import useSWR from 'swr'

export const baseUrl = "http://apidelivery.mbnarp.com.br"

export const getProducts = () => {

const url = baseUrl + "/produtos"

const fetcher = url => fetch(url, 
    {
        headers: {
            'Content-Type': 'application/json',
            //Authorization: `Bearer ${token}`,
        },
    }
    ).then(res => res.json())

const { data, error } = useSWR(url, fetcher)

console.log(data)

if (data) return data;
}
