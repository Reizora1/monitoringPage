// createInvoice.js
async function createInvoice() {
    const apiKey = "getAPIKEYFROMXENDITIFYOUWANTTOTRYTHISAGAIN";
    const amount = document.getElementById('amount').value;
    //const mobileNo = document.getElementById('mobileNo').value;
    let customerEmail = document.getElementById('cEmail').value;
    const eWalletSelected = document.getElementById('selectedEwallet');
    const eWallet = eWalletSelected.value;

    if(customerEmail == ""){
        customerEmail = "admin@admin.com";
    }

    const payload = {
        //externalID is the unique identifier for each individual machines.
        "external_id": "mac01",
        "amount": amount,
        "description": "Invoice Demo #123",
        "invoice_duration": 300,
        "currency": "PHP",
        "payment_methods": [eWallet],
        "customer": {
            //"mobile_number": mobileNo,
            "email": customerEmail
        },
        "customer_notification_preference": {
            "invoice_created": [
                "email"
            ],
            "invoice_paid": [
                "email"
            ]
        },
    };
    
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
