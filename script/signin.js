import { EMAIL_ERROR_MESSAGE, PASSWORD_ERROR_MESSAGE } from './constant.js';
import { getElementById } from './dom/domhelper.js';
import { checkAccessToken, postSignData } from './functions/apiUtils.js';
import { isEmptyString, isValidEmail, showError, hideError, showPassword, hidePassword } from './functions/sign.js';
import { goToFolderhtml } from './temporary.js';

// About Email Error
const emailInput = getElementById('email');
const emailErrorMessage = getElementById('emailErrorMessage');

// About Password Error
const passwordInput = getElementById('password');
const passwordErrorMessage = getElementById('passwordErrorMessage');

// About Button
const loginButton = getElementById('login-button');
const eyeButton = getElementById('eye-button');

checkAccessToken(goToFolderhtml);

const emailInputError = () => {
  const emailValue = emailInput.value.trim();
  if (isEmptyString(emailValue)) {
    showError(emailInput, emailErrorMessage, EMAIL_ERROR_MESSAGE.isEmpty);
    return false;
  }
  if (!isValidEmail(emailValue)) {
    showError(emailInput, emailErrorMessage, EMAIL_ERROR_MESSAGE.isNotRightFormat);
    return false;
  }
  hideError(emailInput, emailErrorMessage);
  return true;
};

const passwordInputError = () => {
  const passwordValue = passwordInput.value.trim();
  if (isEmptyString(passwordValue)) {
    showError(passwordInput, passwordErrorMessage, PASSWORD_ERROR_MESSAGE.isEmpty);
    return false;
  }
  hideError(passwordInput, passwordErrorMessage);
  return true;
};

const pressSignInButton = async event => {
  event.preventDefault();

  const isEmailValid = emailInputError();
  const isPasswordValid = passwordInputError();

  if (isEmailValid && isPasswordValid) {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const signInfo = { 'email': emailValue, 'password': passwordValue };
    try {
      await postSignData('/sign-in', signInfo);
    } catch (error) {
      console.error('Error occurred during sign-in:', error);
    }
  }
};

const pressEyeButton = () => {
  if (passwordInput.type === 'text') {
    showPassword(passwordInput, eyeButton);
    return;
  }
  hidePassword(passwordInput, eyeButton);
};

emailInput.addEventListener('focusout', emailInputError);
passwordInput.addEventListener('focusout', passwordInputError);
loginButton.addEventListener('click', pressSignInButton);
eyeButton.addEventListener('click', pressEyeButton);
