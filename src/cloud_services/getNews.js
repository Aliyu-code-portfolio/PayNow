import { API_KEY } from './api';
import moment from 'moment';

var date = moment().format('YYYY-MM-DD');
export async function getNews(local) {
    
    if (local) {
        const url = `https://newsapi.org/v2/everything?q=financial&sortBy=popularity&apiKey=${API_KEY}`;
        let result = await fetch(url).then((response) => response.json()).catch((e) => console.log(e));
        return result.articles;
    }
    else {
        const url = `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${API_KEY}`;
        let result = await fetch(url).then((response) => response.json()).catch((e) => console.log(e));
        return result.articles;
    }

}
// export async function searchNews(key, date) {

//     const url = `https://newsapi.org/v2/everything?q=${key}&from=${date}&sortBy=popularity&apiKey=${API_KEY}`;
//     let result = await fetch(url).then((response) => response.json()).catch((e) => console.log(e));
//     return result.articles;

// }