import axios from 'axios';

// Server side url
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);