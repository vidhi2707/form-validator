if (username.value === "") {
  showError(username, "Username is required");
} else {
  showSuccess(username);
}
if (email.value === "") {
  showError(email, "E-mail is required");
} else if (!isValidEmail(email.value)) {
  showError(email, "E-mail is not valid");
} else {
  showSuccess(email);
}
if (password.value === "") {
  showError(password, "Password is required");
} else {
  showSuccess(password);
}
if (password2.value === "") {
  showError(password2, "Confirmation is required");
} else {
  showSuccess(password2);
}
