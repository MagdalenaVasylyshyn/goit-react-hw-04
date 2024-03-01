import axios from "axios";

const MY_ACCESS_KEY = 'TO0OP6-0abufBnLhBHbHG0H6mvq_kbtEf-jMSc1OMGE';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${MY_ACCESS_KEY}`;

export async function getPhotos(query, page = 1, perPage = 12) {
    const { data } = await axios.get('search/photos', {
        params: {
            query,
            page,
            per_page: perPage,
        },
    });

    return data;
}