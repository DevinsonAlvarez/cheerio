import * as cheerio from 'cheerio';
import axios from 'axios';

const url = 'https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3';

const isoCodes = async () => {
    try {
        const data = (await axios.get(url)).data;
        const $ = cheerio.load(data);

        const list = $('.plainlist ul li');

        let result = [];

        list.each((i, el) => {
            const json = { id: null, name: "", code: "" };

            json.id = i;
            json.name = $(el).find('a').text();
            json.code = $(el).find('span').text();

            result.push(json);
        });

        return result;
    } catch (error) {
        console.error(error);;
    }
};

export default isoCodes;
