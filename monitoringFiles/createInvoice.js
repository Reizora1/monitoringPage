// createInvoice.js
function createInvoice() {
    const amount = document.getElementById('amount').value;
    const mobileNo = document.getElementById('mobileNo').value;
    const eWalletSelected = document.getElementById('selectedEwallet');
    const selectedValue = eWalletSelected.value;
    if(selectedValue != ""){
        const data = { amount, mobileNo, selectedValue };
        fetch('https://apsc-monitoring-webpage.onrender.com/create-invoice', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            console.log('Invoice created successfully:', result);
            alert('Redirecting to checkout url.');
            console.log(result.invoice_url);
            window.location.href = result.invoice_url;
        })
        .catch(error => {
            console.error('Error creating invoice:', error);
            alert('Error creating invoice. Please try again.');
        });
    }
    else{
        alert('Please select an eWallet for the payment.');
    }
}
