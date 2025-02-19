function togglePaymentDetails(e) {
    // get a reference to the form. We can access all the named form inputs through the form element.
    const theForm = document.querySelector("#checkoutForm");
    // we will also need the creditCardContainer and paypalUsernameContainer
    const creditCardContainer = document.querySelector("#creditCardNumberContainer");
    const paypalContainer = document.querySelector("#paypalUsernameContainer");
  
    // Hide payment containers by adding the '.hide' class to each of them
  
    // Disable required for payment fields...if we hide a required field the browser will throw an error when we try to submit!

    // element.required=false
    // element.classList.add("hide")
  
    // Show the container based on the selected payment method, and add the required attribute back.
    let value = e.target.value;
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");
    theForm.creditCardNumber.required = false;
    theForm.paypalUsername.required = false;
    
    if (value == "creditCard") {
        creditCardContainer.classList.remove("hide");
        theForm.creditCardNumber.required = true;
    } else if (value == "paypal") {
        paypalContainer.classList.remove("hide");
        theForm.paypalUsername.required = true;
    }
}

// attach a change event handler to the paymentMethod input
// attach a submit event handler to the form
document.querySelector("#paymentMethod").addEventListener("change", togglePaymentDetails);