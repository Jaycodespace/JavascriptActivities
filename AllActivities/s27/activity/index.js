// Get references to the input fields and preview elements
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const fullNamePreview = document.getElementById('fullNamePreview');
const emailPreview = document.getElementById('emailPreview');
const mobilePreview = document.getElementById('mobilePreview');
const messagePreview = document.getElementById('messagePreview');
const mobileError = document.getElementById('mobileError');


function isValidMobile(number) {
  if (number.length !== 11) {
    return false;  
  }
  if (number.charAt(0) !== '0') {
    return false;  
  }
  for (let i = 0; i < number.length; i++) {
    let char = number.charAt(i);
    if (char < '0' || char > '9') {
      return false;  
    }
  }
  return true; 
}


function updatePreview() {
  const first = firstName.value.trim();
  const last = lastName.value.trim();
  const mail = email.value.trim();
  const phone = mobile.value.trim();


  fullNamePreview.textContent = `${first} ${last}`;
  emailPreview.textContent = mail;
  mobilePreview.textContent = phone;

  if (phone && !isValidMobile(phone)) {
    mobileError.textContent = 'Invalid mobile number!';
  } else {
    mobileError.textContent = ''; 
  }


  if (first || last || isValidMobile(phone)) {
    messagePreview.textContent = `Hello, I am ${first} ${last}, you can contact me on this number ${phone}`;
  } else {
    messagePreview.textContent = '';  
  }
}


[firstName, lastName, email, mobile].forEach(input => {
  input.addEventListener('input', updatePreview);
});
