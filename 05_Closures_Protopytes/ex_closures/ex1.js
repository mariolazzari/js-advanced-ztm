function callMeMaybe() {
  //  const call = "Call me";

  setTimeout(() => {
    console.log(callMe);
  }, 2000);

  const callMe = "Call me"; // still works!
}

callMeMaybe();
