const baseUrl = process.env.TMDB_BASE_URL
const key = process.env.TMDB_KEY

const getURL = (endpoint, parms) => {
    const qs = new URLSearchParams(parms)

    return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };