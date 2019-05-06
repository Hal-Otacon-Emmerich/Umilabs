let form = document.getElementById('form');

let input = form.getElementsByTagName('input');
let textarea = form.getElementsByTagName('textarea');
let statusMsg = document.getElementById('status');


form.addEventListener('submit', function(event) {
  event.preventDefault();

  for(let i = 0; i < input.length; i++) {
    if(input[i].value === '') {
      input[i].classList.add('error');
    } else {
      input[i].classList.remove('error');
    }
  }

  if(textarea.wish.value === '' || textarea.wish.value === undefined){
    textarea.wish.classList.add('error');
  }
  else {
    textarea.wish.classList.remove('error');
  }

  if(input.name.value !== '' && input.phone.value !== '' && input.email.value !== '' && textarea.wish.value !== '') {

    for(let i = 0; i < input.length; i++) {
      input[i].value = ''
    }

    textarea.wish.value = '';

    statusMsg.innerHTML = 'Форма отправлена!';
  } else {
      statusMsg.innerHTML = 'Ошибка! Проверте введенную информацию.';
  }

})
