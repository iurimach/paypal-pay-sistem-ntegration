// ეს კოდი მოდის ფეიფლის გადახდის ჩაშენბიდან მე ბევრი არფერი შემიცვლია აქ
paypal.Buttons({
    // Set up the transaction
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '0.01' //ეს დეფულტად მაქ ფასი მითითებული
                }
            }]
        });
    },
    // Finalize the transaction
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('ტრანზაქცია შესრულდა ' + details.payer.name.given_name);
            // Optionally, you can redirect to a success page
            // window.location.href = "success.html";
        });
    },
    // Handle errors
    onError: function(err) {
        console.error('An error occurred during the transaction', err);
        alert('An error occurred during the transaction. Please try again.');
    }
}).render('#paypal-button-container'); // Display the PayPal button in the div with id "paypal-button-container"
