# How to generate a markdown progress table 👇

Steps -

1. Make sure you have `node` installed.
2. open the `script` folder and run `npm i`.
3. run `npm run generate` in the terminal to generate `OUTPUT.md`.
4. Output markdown file will be written in the `script` folder itself.

> Note: By default it will generate questions for upto 2 pages (per page 50 means, 100 questions)

To change no of questions, change this line in the `index.js` file:

```js
let targetPageIndex = 2; // I want only 100 problems for now that's why only 2 pages
// you can change it upto 18 refer this page for the exact no, https://projecteuler.net/archives
```

---
