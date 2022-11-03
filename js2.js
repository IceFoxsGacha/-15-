const fetch = require('axios')
const cheerio = require('cherio');
const { text } = require('express');

const url = 'https://www.ozon.ru/category/kompyutery-i-komplektuyushchie-15690/';

async function start(){

    const result = await axios.get(url)

    const $ = await cheerio.load(result.data)
    $('.kt4').each((_,e) => {

    console.log(text)

    })

    // console.log(result)
}
start()