require('dotenv').config()

const apiKey = process.env.NOTION_API_KEY
const databaseID = process.env.NOTION_DATABASE_ID

const {Client} = require('@notionhq/client')
const notion = new Client ({auth:apiKey})


async function main() {
    const response = await notion.databases.query({ database_id: databaseID });
    console.log(response.results);
}

main ();
