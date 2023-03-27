import axios from 'axios'
import * as cheerio from 'cheerio'
import fs from 'fs'
import path from 'path'

const scrapeResults = []

const getNotice = async () => {
    try {
        const { data } = await axios.get('https://ioesolutions.esign.com.np/notices')
        const $ = cheerio.load(data)
        const notices = $('.table').find('.text-dark')
        notices.each((i, e) => {
            const heading = $(e).text().split('\n')[1]
            const date = $(e).text().split('\n')[3]
            const link = $(e).attr('href')

            scrapeResults.push({ heading, date, link })
        })
        fs.writeFile('./data/notice.json', JSON.stringify(scrapeResults, null, 2), (error) => {
            if (error) console.log(error)
        })
    } catch (error) {
        console.log(error)
    }
}

export default getNotice