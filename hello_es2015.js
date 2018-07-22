import axios from 'axios';

export const jokes_es2015 = {
    getChuckNorrisJokeAsyncAwait: async() => {
        return await fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(jsonData => jsonData.value);
    },
    getChuckNorrisJokeAsyncAwaitAxios: async() => {
        return await axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => res.data.value);
    }
}