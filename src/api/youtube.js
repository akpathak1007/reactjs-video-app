import axios from 'axios';
const KEY = 'AIzaSyCIijaYZFPVGfo4gvS0CUYgl4b5HRJOCpA';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: 'snippet',
        key: KEY,
        maxResult: 5
    }
});