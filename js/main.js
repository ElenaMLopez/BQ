'use strict';

let sendButton = document.getElementById('sendInfoBtn');
let closeModalButton = document.getElementById('closeModalBtn');
let sendModal = document.getElementById('sendModal');
let nameInput = document.getElementById('nameInput');
let mailInput = document.getElementById('mailInput');

function showModal() {
  console.log('cucu');
  if (nameInput.value !== '' && mailInput.value!== '') {
    sendModal.classList.toggle('hidden');
  }else {
    window.alert('You must to fill the form. Thanks!');
  }
}

sendButton.addEventListener('click',showModal);
closeModalButton.addEventListener('click',showModal);
