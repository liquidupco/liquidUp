function register() {
  axios
    .post('http://localhost:1337/auth/local/register', {
      username: document.forms["registration"]["username"].value,
      email: document.forms["registration"]["email"].value,
      password: document.forms["registration"]["password"].value
    })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      setCookie("username", response.data.user, 1);
      setCookie("token", response.data.jwt, 1);
      alert('Compte connecté, user token:' + response.data.jwt);
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
      alert('création de compte raté');
    });


}

function login() {
  axios
    .post('http://localhost:1337/auth/local', {
      identifier: document.forms["registration"]["username"].value,
      password: document.forms["registration"]["password"].value
    })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      setCookie("username", response.data.user, 1);
      setCookie("token", response.data.jwt, 1);
      alert('Compte connecté, user token:' + response.data.jwt);
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
      alert('Connexion de compte raté');
    });
}

function getressources(ressourcesURL){
  var token = getCookie("token");
  axios
    .get(ressourcesURL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      // Handle success.
      console.log('Data: ', response.data);
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
      alert('Connectez vous');
    });
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
