import fs from 'fs'
import util from 'util'
import path from "path"
import { fileURLToPath } from "url"

const readNoticeFile = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const readFile = util.promisify(fs.readFile)
    try {
        let notice = await readFile(path.join(__dirname, '../data/notice.json'))
        return JSON.parse(notice.toString())
    } catch (error) {
        console.log(error)
    }
}

export default readNoticeFile
