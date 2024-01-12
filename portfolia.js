const apiKey = process.env.NOTION_API_KEY

require('dotenv').config()

const {Client} = require('@notionhq/client')
const notion = new Client ({auth:apiKey})



