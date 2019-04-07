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
      identifier: document.forms["login"]["username"].value,
      password: document.forms["login"]["password"].value
    })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      setCookie("username", response.data.user, 1);
      setCookie("token", response.data.jwt, 1);
      var x = document.getElementById("avatar");
      x.style.display = "block";
      x = document.getElementById("connexion");
      x.style.display = "none";
      $("#exampleModal").modal('hide');
      //alert('Compte connecté, user token:' + response.data.jwt);
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
      alert('Connexion de compte raté');
    });
}

var app = angular.module('myApp', ['ngRoute']);
  app.controller('myCtrl', function($scope,$http,$routeParams, $location) {
    $scope.listeprojets = {};
    $scope.projet = {};

    $scope.oninit = function () {
      $http.get('http://localhost:1337/projets')
        .then(function(response) {
          $scope.listeprojets = [];
          $scope.listeprojets.push([response.data[0], response.data[1], response.data[2]]);
          $scope.listeprojets.push([response.data[3], response.data[4], response.data[5]]);
          $scope.listeprojets.push([response.data[6], response.data[7], response.data[8]]);
        });
    };
    $scope.initProjet = function () {
      var id = new URL(window.location.href).searchParams.get('id');
      console.log(id);
      $http.get('http://localhost:1337/projets/' + id)
        .then(function(response) {
          console.log(response.data);
          $scope.projet = response.data;
        });
    };
    var token = getCookie("token");
  /*axios
    .get('http://localhost:1337/projets', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data);
      $scope.projets = response.data
    });*/
});

/*function getprojet() {
  var token = getCookie("token");
  axios
    .get('http://localhost:1337/projets', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data);

    });
}*/

function verifConnexion() {
  if (getCookie("token") != "") {
    var x = document.getElementById("avatar");
    x.style.display = "block";
    x = document.getElementById("connexion");
    x.style.display = "none";
  }
  //getprojet();
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

/**

 onload="verifConnexion()"


 <a href="/dashboard.html" ><img id="avatar" src="img/avatar/icon_animal_camelo.svg" style="display: none;width: 32px;height: 32px;"></a>
 <button id="connexion" type="button" class="btn btn-primary" data-toggle="modal"  data-target="#exampleModal">
 Se connecter
 </button>


 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div class="modal-dialog" role="document">
 <div class="modal-content">
 <div class="modal-header">
 <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
 <span aria-hidden="true">&times;</span>
 </button>
 </div>
 <div class="modal-body">
 <form name="login" action="javascript:login()">
 <div class="form-group">
 <label for="exampleInputEmail1">Pseudo</label>
 <input type="text" name="username" class="form-control" id="log_mail" aria-describedby="emailHelp" placeholder="Pseudo">
 </div>
 <div class="form-group">
 <label for="exampleInputPassword1">Mot de passe</label>
 <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe...">
 </div>
 <button type="submit" class="btn btn-secondary btn-sm" style="background-color: #191919">Se connecter</button>
 </form>
 </div>
 <div class="modal-footer">
 <a class="btn btn-primary" href="/inscription.html" role="button">S'inscrire</a>
 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
 </div>
 </div>
 </div>
 </div>

 **/
