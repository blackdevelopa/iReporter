const modal = document.querySelector('#modal');
const modalOverlay = document.querySelector('#modal-overlay');
const closeBtn = document.querySelector('#closebtn');
const openBtn = document.querySelector('#openbtn');

openBtn.addEventListener('click', () => {
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
});

closeBtn.addEventListener('click', () => {
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
});

closeModal = () => {
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
}