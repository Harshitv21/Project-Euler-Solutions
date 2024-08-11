import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

async function scrapePage(url) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const baseUrlProblem = "https://projecteuler.net/";

    const markdownRows = [];

    const contentTable = $('#content > #problems_table_page > #problems_table > tbody');

    contentTable.find('tr').each((_, row) => {
        const ths = $(row).find('th');
        if (ths.length === 0) {
            const tds = $(row).find('td');

            const no = tds.eq(0).text();
            const title = tds.eq(1).text();
            const link = baseUrlProblem + (tds.eq(1).find('a').attr('href'));
            // console.log(no, " ", title, " ", link);

            const rowExpression = `| ${no} | ${title} |  | [link](${link}) |`;
            markdownRows.push(rowExpression);
        }
    });

    return markdownRows.join('\n');
}

async function main() {
    let currPageIndex = 1;
    let targetPageIndex = 2; // I want only 100 problems for now that's why only 2 pages
    // const baseUrl = `https://projecteuler.net/archives;page=${currPageIndex}`;

    let markdownContent = "| no | Problem name | status | Project Euler link |\n";
    markdownContent += "| -- | ------------ | ------ | ------------------ |\n";

    for (let i = currPageIndex; i <= targetPageIndex; i++) {
        const scrappedData = await scrapePage(`https://projecteuler.net/archives;page=${i}`);
        markdownContent += scrappedData + "\n";
    }

    fs.writeFileSync('OUTPUT.md', markdownContent);
    console.log('Markdown file has been generated.');
}

main().catch(console.error);