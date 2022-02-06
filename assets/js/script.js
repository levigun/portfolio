// created variables for the DOM element
var username = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var message = document.getElementById('message');
var sendBtnEl = document.getElementById('send');


// created a function to save the user information to local storage
function saveUserContact() {
    var usercontact = {
        username: username.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }
    localStorage.setItem("userContact", JSON.stringify(usercontact));
}

// created a function to clear the area 
function clearArea () {
    username.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
}
console.log(sendBtnEl);

// created a click event listener for the send button to save data to local storage
sendBtnEl.addEventListener("click", function (event) {
    debugger
    event.preventDefault();
    saveUserContact();
    clearArea();
});