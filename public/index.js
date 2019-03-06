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
      alert('Compte connecté, user token:' + response.data.jwt);
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
      alert('Connexion de compte raté');
    });
}
