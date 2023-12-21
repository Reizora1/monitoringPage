const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname), { 'extensions': ['css'], 'index': false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Monitoring page endpoints.
app.get('/', (req, res) => {
    const htmlPath = path.join(__dirname,'loginPage.html');
    const cssPath = path.join(__dirname, 'loginPageStyles.css');
    const jsPath = path.join(__dirname, 'loginScript.js');
    
    if (fileExists(htmlPath) && fileExists(cssPath) && fileExists(jsPath)) {
        const cssContent = fs.readFileSync(cssPath, 'utf8');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        const jsContent = fs.readFileSync(jsPath, 'utf8');
        res.send(`
            ${htmlContent}
        `);
    } else {
        res.status(404).send('404 Not Found');
    }
});

app.get('/loginPage', (req, res) => {
    const htmlPath = path.join(__dirname,'loginPage.html');
    const cssPath = path.join(__dirname, 'loginPageStyles.css');
    const jsPath = path.join(__dirname, 'loginScript.js');
    
    if (fileExists(htmlPath) && fileExists(cssPath) && fileExists(jsPath)) {
        const cssContent = fs.readFileSync(cssPath, 'utf8');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        const jsContent = fs.readFileSync(jsPath, 'utf8');
        res.send(`
            ${htmlContent}
        `);
    } else {
        res.status(404).send('404 Not Found');
    }
});

app.get('/mainPage', (req, res) => {
    const htmlPath = path.join(__dirname,'mainPage.html');
    const cssPath = path.join(__dirname, 'mainPageStyles.css');
    const jsPath = path.join(__dirname, 'mainPageScript.js');
    
    if (fileExists(htmlPath) && fileExists(cssPath) && fileExists(jsPath)) {
        const cssContent = fs.readFileSync(cssPath, 'utf8');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        const jsContent = fs.readFileSync(jsPath, 'utf8');
        res.send(`
            ${htmlContent}
        `);
    } else {
        res.status(404).send('404 Not Found');
    }
});

app.get('/paymentPage', (req, res) => {
    const htmlPath = path.join(__dirname,'paymentPage.html');
    //const cssPath = path.join(__dirname, 'mainPageStyles.css');
    const jsPath = path.join(__dirname, 'createInvoice.js');
    
    if (fileExists(htmlPath) /*&& fileExists(cssPath)*/ && fileExists(jsPath)) {
        //const cssContent = fs.readFileSync(cssPath, 'utf8');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        const jsContent = fs.readFileSync(jsPath, 'utf8');
        res.send(`
            ${htmlContent}
        `);
    } else {
        res.status(404).send('404 Not Found');
    }
});

function fileExists(filePath) {
    try {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false;
    }
}
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
