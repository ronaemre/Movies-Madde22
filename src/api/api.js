import axios from "axios";


export const getMovies = async (setMovies, search) => {
    const response = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=f415f620`).then((resp) => {
        setMovies(resp.data.Search)

    }
    )
    return response.status == 200 ? true : false;

}
