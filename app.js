var app =angular.module("MyApp", ['ui.router', 'satellizer']);
 

  app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  
    $authProvider.loginUrl = 'Login/clases/autentificador.php';
    $authProvider.signupUrl = 'Login/clases/autentificador.php';
    $authProvider.tokenName = "tokenFest2016";
    $authProvider.tokenPrefix = 'ABM_Persona';
    $authProvider.authHeader = 'Data';
  

    // $authProvider.loginUrl = 'autentificador.php';
    // $authProvider.signupUrl = 'autentificador.php';
    // $authProvider.tokenName = 'tokenFest2016';
    // $authProvider.tokenPrefix = 'CGPAdinsa';
    // $authProvider.authHeader = 'Data';


  });


  app.controller('LoginController', function($scope, $http, $auth,$state) {


    $scope.Entrar=function(){

      console.log($scope.email);

      $auth.login({email: $scope.email, clave: $scope.clave})
      .then(function(){

        alert("Joya");
        console.info("datos auth en menu" , $auth.isAuthenticated(), $auth.getPayload());


        
      }, function(){

        alert("fjuira");
      })
    }


  });

  
