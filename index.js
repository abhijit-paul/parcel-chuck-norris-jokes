import 'babel-polyfill';

import fs from 'fs';

console.log('Hello world');

const hello = require('./hello');

import {jokes_es2015} from './hello_es2015';

console.log(hello.hello);

const addJoke = (joke) => {
    const jokeNode = document.createTextNode(joke);
    const listJoke = document.createElement("li");
    listJoke.appendChild(jokeNode);
    document.querySelector('.chucknorris-jokes').appendChild(listJoke);
}

hello.getChuckNorrisJoke().then((joke)=> {
    addJoke(joke);
});

hello.getChuckNorrisJokeAsyncAwait().then((joke)=> {
    addJoke(joke);
});

jokes_es2015.getChuckNorrisJokeAsyncAwait().then((joke )=> addJoke(joke));

jokes_es2015.getChuckNorrisJokeAsyncAwaitAxios().then((joke) => addJoke(joke));

hello.getChuckNorrisJokeAsyncAwait().then(() => {
    const copyleft = fs.readFileSync(__dirname + '/copyleft.txt', 'utf8');
    const copyleftNode = document.createTextNode(copyleft);
    document.querySelector('.copyleft').appendChild(copyleftNode);
});
