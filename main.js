const registerPlaceholder = document.querySelector(".register-placeholder");
const registerInput = document.querySelector("#emailAddress");

registerInput.onfocus = () => {
  LiftPlaceholder();
};

registerInput.onblur = () => {
  if (registerInput.value == "") {
    ResetPlaceholder();
  }
};

registerPlaceholder.onclick = () => {
  LiftPlaceholder();
  registerInput.focus();
};

const LiftPlaceholder = () => {
  registerPlaceholder.style.top = "-10px";
  registerPlaceholder.style.fontSize = "15px";
};

const ResetPlaceholder = () => {
  registerPlaceholder.style.top = "8px";
  registerPlaceholder.style.fontSize = "17px";
};
