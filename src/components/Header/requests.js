const API_KEY = '3b5bbac067d03d40203cd8a012699123';

export default {
    fetchTranding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchWestern: `discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation: `discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTv: `discover/movie?api_key=${API_KEY}&with_genres=10770`,
}

