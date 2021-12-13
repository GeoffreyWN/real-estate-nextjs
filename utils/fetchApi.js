// import axios from 'axios'

// export const baseUrl = process.env.NEXT_PUBLIC_BASEURL

// export const fetchApi = async (url) => {
//     const { data } = await axios.get(url, {
//         headers: {
//             'x-rapidapi-host': 'bayut.p.rapidapi.com',
//             'x-rapidapi-key': '30f82e3c0bmsh9633a566c885d62p1edaecjsn78093054b47e',
//         }
//     })

//     return data
// }

import axios from "axios";

export const baseUrl = process.env.BASEURL //'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,//'bayut.p.rapidapi.com',
            'x-rapidapi-key': process.env.X_RAPIDAPI_KEY //'30f82e3c0bmsh9633a566c885d62p1edaecjsn78093054b47e'
        }

        // headers: {
        //     'x-rapidapi-host': 'bayut.p.rapidapi.com',
        //     'x-rapidapi-key': '30f82e3c0bmsh9633a566c885d62p1edaecjsn78093054b47e',
        // }
    });

    return data;
}