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

// Handle incoming post req from paymentPage
app.post('/create-invoice', async (req, res) => {
    const apiKey = 'xnd_development_pBpucoqdlThPhCFsJixhcQh0SCVIBnTAS8JNiDPKtJaWbZSEKd78AYwqiPcKs';
    const amount = req.body.amount;
    const mobileNo = req.body.mobileNo;
    const eWallet = req.body.selectedValue;
    console.log(eWallet);

    const payload = {
        "external_id": "123TEST",
        "amount": amount,
        "description": "Invoice Demo #123",
        "invoice_duration": 300,
        "currency": "PHP",
        "payment_methods": [eWallet],
        "customer": {
            "mobile_number": mobileNo
        },
    };
    try {
        const response = await fetch('https://api.xendit.co/v2/invoices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + Buffer.from(apiKey + ':').toString('base64'),
            },
            body: JSON.stringify(payload),
        });
        const result = await response.json();
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error('Error creating invoice:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

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
