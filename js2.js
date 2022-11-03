const fetch = require('axios')
const cheerio = require('cherio');
const { text } = require('express');

;(async () =>{


    const url = 'https://www.ozon.ru/category/kompyutery-i-komplektuyushchie-15690/';

    const result = await axios.get(url)
    console.log(res.data)
})