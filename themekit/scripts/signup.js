console.log('connected');

function signup (e) {
    console.log('connected function');
    e.preventDefault();

    // COMPANY DATA
    var company_name = document.getElementById('company_name').value.trim();
    var company_email = document.getElementById('company_email').value.trim();
    var company_phone = document.getElementById('company_phone').value.trim();
    var company_tin = document.getElementById('company_tin').value.trim();
    var company_address_line_one = document.getElementById('company_address_line_one').value.trim();
    var company_address_line_two = document.getElementById('company_address_line_two').value.trim();
    var company_city = document.getElementById('company_city').value.trim();
    var company_state = document.getElementById('company_state').value.trim();
    var company_rc = document.getElementById('company_rc').value.trim();

    // REPRESENTATIVE DATA
    var rep_name = document.getElementById('rep_name').value.trim();
    var rep_nin = document.getElementById('rep_nin').value.trim();
    var rep_phone = document.getElementById('rep_phone').value.trim();
    var rep_position = document.getElementById('rep_position').value.trim();
    var rep_address_line_one = document.getElementById('rep_address_line_one').value.trim();
    var rep_address_line_two = document.getElementById('rep_address_line_two').value.trim();
    var rep_city = document.getElementById('rep_city').value.trim();
    var rep_state = document.getElementById('rep_state').value.trim();
    var rep_email = document.getElementById('rep_email').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirm_password = document.getElementById('confirm_password').value.trim();
    var check = document.getElementById('check').value;

    if(confirm_password != password) return('Passwords must match');
  
    console.log(company_name, company_email, company_phone, company_tin, company_address_line_one, company_address_line_two, company_city, company_state, company_rc, rep_name, rep_nin, rep_phone, rep_position, rep_address_line_one, rep_address_line_two, rep_city, rep_state, rep_email, password, security_q, security_ans, check);

    fetch('/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        company_name, company_email, company_phone, company_tin, company_address_line_one, company_address_line_two, company_city, company_state, company_rc, rep_name, rep_nin, rep_phone, rep_position, rep_address_line_one, rep_address_line_two, rep_city, rep_state, rep_email, password, security_q, security_ans, check
      })
    })
      .then(res => res.json())
      .then((data) => {
        let message = '';
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  document.getElementById('createUser').addEventListener('submit', signup);

  const fields = {
    "company_name":"",
    "company_email":"",
    "company_phone":"",
    "company_tin":"",
    "company_address_line_one":"",
    "company_address_line_two":"",
    "company_city":"",
    "company_state":"",
    "company_rc":"",
    "rep_name":"",
    "rep_nin":"",
    "rep_phone":"",
    "rep_position":"",
    "rep_address_line_one":"",
    "rep_address_line_two":"",
    "rep_city":"",
    "rep_state":"",
    "rep_email":"",
    "password":"",
    "security_q":"",
    "security_ans":"",
    "check":""
 }