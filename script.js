// Counter
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 5;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
})



// Subscribe to our newsletter
document.addEventListener('DOMContentLoaded', function() {
    var subscriptionForm = document.querySelector('.subscription');
    var emailInput = subscriptionForm.querySelector('input[type="text"]');
    var subscribeButton = subscriptionForm.querySelector('button');
  
    subscribeButton.addEventListener('click', function(event) {
      event.preventDefault(); // 
  
      var email = emailInput.value;
      if (isValidEmail(email)) {
        // valid email, show thank you message
        showThankYouMessage();
        // clear input
        emailInput.value = '';
      } else {
        // not a valid email
        alert('Please enter a valid email address.');
        emailInput.value = '';
      }
    });
  
    // check if email is valid
    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
  
    // thankyou message
    function showThankYouMessage() {
      var thankYouMessage = document.createElement('p');
      thankYouMessage.textContent = 'Thank you for subscribing!';
      subscriptionForm.appendChild(thankYouMessage);
    }
  });

