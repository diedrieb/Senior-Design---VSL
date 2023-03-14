import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';



  export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '706a4b9283msh6068b09a96d6481p1eb483jsnf5b96697def5',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}