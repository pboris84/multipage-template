var myApp = angular.module('myApp', ['ngRoute'])


/*  Explination of the code 'whittlebosh'
myApp.config(function($routeProvider) { //expected variable for ngRoute

.when('/', { // Landing page
  templateUrl: 'templates/landing.html', // HTML fragment
  controller: 'LandingController', // Which controller 
})

.when('/about/', { // About page
  templateUrl: 'templates/about.html', // HTML fragment
  controller: 'AboutController', // Which controller 
})
})
*/

// this is code whittlebosh
//Config route provider
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/landing.html',
      controller: 'LandingController',
    })
   .when('/content/', {
    templateUrl: 'templates/content.html',
    controller: 'ContentController',
  })
   .when('/about/', {
    templateUrl: 'templates/about.html',
    controller: 'AboutController',
  })
})
//end code whittlebosh


//the controllers, each page gets its own controller, 
// These are determined by configuration, Reference values in HTML fragments
// Landing page controller
.controller('LandingController', function($scope){
  $scope.number = 2000
})

// About page controller
.controller('AboutController', function($scope){
  $scope.about = "Here's some information about this page."
})

// Content controller
.controller('ContentController', function($scope){
  $scope.url = "http://conference.unavsa.org/wp-content/uploads/2015/06/SEA-pic.jpg"
})




















