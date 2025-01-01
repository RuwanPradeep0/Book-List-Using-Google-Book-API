import axios from 'axios';

const apiKey = process.env.GOOGLE_API_KEY;


const fetchBooks = async (query , setBooks) => { 
    try {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
          q: query || "fiction", 
          key: apiKey,
        },
      });
      console.log(response.data.items)
      setBooks(response.data.items)
     
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

export default fetchBooks;