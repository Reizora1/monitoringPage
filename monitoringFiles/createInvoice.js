// createInvoice.js
async function createInvoice() {
    const apiKey = 'xnd_development_pBpucoqdlThPhCFsJixhcQh0SCVIBnTAS8JNiDPKtJaWbZSEKd78AYwqiPcKs';
    const amount = document.getElementById('amount').value;
    const mobileNo = document.getElementById('mobileNo').value;
    const eWalletSelected = document.getElementById('selectedEwallet');
    const eWallet = eWalletSelected.value;
    
    if(amount == ""){
        alert('Please input amount for the payment.');
    }
    else if(amount < 10){
        alert('Please input the minimum amount required for the transaction.');
    }
    else if(eWallet == ""){
        alert('Please select an eWallet for the payment.');
    }
    else{
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
                    'Authorization': 'Basic ' + window.btoa(apiKey + ':').toString('base64'),
                },
                body: JSON.stringify(payload),
            });
            const result = await response.json();

            console.log('Invoice created successfully:', result);
            let alertText = `Redirecting to checkout url.\nTransaction ID: ${result.id}`;
            alert(alertText);
            window.location.href = result.invoice_url;

        } catch (error) {
            console.error('Error creating invoice:', error);
        }
    }
}
