document.querySelector('#check').addEventListener('click', check);


function check(){

  const day = document.getElementById('day').value.toUpperCase();

  if (day === 'TUESDAY' || day === 'Thursday'){
    document.getElementById('placeToSee').innerText = 'It is a class day.'
  }

  else if (day === 'SATURDAY' || day === 'SUNDAY'){
    document.getElementById('placeToSee').innerText = 'It is the weekend.'
  }

  else {
    document.getElementById('placeToSee').innerText = 'It is a boring day.'
  }

}
