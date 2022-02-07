import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID CuqTeLUlTNJ8egDJPmnoaD7DrWQ2VhxgJ7QYnwzVIy8',
  },
});
