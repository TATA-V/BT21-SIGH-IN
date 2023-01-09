const get = (target) => document.querySelector(target);

const $userName = get("#username");
const $failMessage = get(".failure-message");
const $succMessage = get(".success-message");

const $pwd = get("#password");
const $pwdRetype = get("#password-retype");
const $misMessage = get(".mismatch-message");

$userName.onkeyup = function () {
  if (isMoreThan4Length($userName.value)) {
    // 길이가 4이상일 때
    $succMessage.classList.remove("hide");
    $failMessage.classList.add("hide");
  } else if (!isMoreThan4Length($userName.value)) {
    // 길이가 4미만일 때
    $succMessage.classList.add("hide");
    $failMessage.classList.remove("hide");
  }
};

function isMoreThan4Length(value) {
  return value.length >= 4;
}

$pwdRetype.onkeyup = function () {
  if (isMatch($pwd.value, $pwdRetype.value)) {
    $misMessage.classList.add("hide");
  } else {
    $misMessage.classList.remove("hide");
  }
};

function isMatch(password1, password2) {
  return password1 === password2;
}
