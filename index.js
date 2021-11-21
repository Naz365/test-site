/*
const handleEmailCharlen = () => {
  let email = document.getElementById("inputEmail4").value;

};
*/
const handleNameCharlen = () => {
  let name = document.getElementById("Nameinput").value;
  if (name.length >= 20) {
    alert("Your Name must be within 20 characters");
  }
};

const handleSubmit = () => {
  let phoneNumber = document.getElementById("exampleInputNumber1").value;
  if (!phoneNumber.includes("+880")) {
    alert("Phone number must be started with +880");
  }
};
