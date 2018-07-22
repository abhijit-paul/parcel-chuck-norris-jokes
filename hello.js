module.exports = {
    hello: 'Hello there',
    getChuckNorrisJoke: ()=> {
        return new Promise((resolve, reject)=> {
            fetch('https://api.chucknorris.io/jokes/random')
                .then(res => res.json())
                .then(jsonData => {
                    resolve(jsonData.value);
                });
        });
    },
    getChuckNorrisJokeAsyncAwait: async() => {
        return await fetch('https://api.chucknorris.io/jokes/random')
            .then(res => res.json())
            .then(jsonData => jsonData.value);
    }
}