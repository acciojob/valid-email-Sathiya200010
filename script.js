function validEmail(str) {
  //your JS code here.
	let pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return pattern.test(email);

}

// Do not change the code below.
const str = prompt('Enter an email address.");
alert(validEmail(str));
