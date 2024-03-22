const formSubmit = document.getElementById('submit');

formSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  let inputEmail = document.getElementById('email').value;
  let inputPassword = document.getElementById('password').value;
  let inputReportPassword = document.getElementById('report-password').value;
  if (inputPassword == inputReportPassword) {
    alert('Thank you.');
  } else {
    document.getElementById('password').style.borderColor = 'red';
    document.getElementById('report-password').style.borderColor = 'red';
  }
});
