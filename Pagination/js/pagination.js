import { JSONPlaceholderAPI } from './jsonplaceholder-api.js';

const jsonplaceholderInstance = new JSONPlaceholderAPI();

console.log(jsonplaceholderInstance);

jsonplaceholderInstance.fetchPosts().then(console.log).catch(console.warn);
