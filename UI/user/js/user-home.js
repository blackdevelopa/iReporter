const modal = document.querySelector('#modal');
const modalOverlay = document.querySelector('#modal-overlay');
const closeBtn = document.querySelector('#closebtn');
const openBtn = document.querySelector('#openbtn');
const inputField = document.querySelectorAll('.cord');
const displayMessage = document.querySelector('.error');

openBtn.addEventListener('click', () => {
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
});

closeBtn.addEventListener('click', () => {
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
});

const validateInput = () => {
  displayMessage = "";
  const num = inputField.value;
    if(!Number(num)) {
      return displayMessage.innerHTML = `<p>Please enter numbers</p>`
    }
};