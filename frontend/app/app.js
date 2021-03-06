var app = angular.module("schoolsApp", [
    'ngRoute',
    'SchoolsApp.directives',
    'SchoolsApp.geoDecoder',
    'SchoolsApp.services',
    'SchoolsApp.controllers',
    'SchoolsApp.detailCtrl',
    'SchoolsApp.searchDirectives',
    'SchoolsApp.navDirectives'
]);

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $routeProvider
        .when('/', {
            controller: 'schoolsMapCtrl',
            templateUrl: 'app/templates/map.html'
            })
        .when('/location/:latitude/:longitude/', {
            controller: 'schoolsMapCtrl',
            templateUrl: 'app/templates/map.html'
            })
        .when('/schools/:school/', {
            controller: 'detailCtrl',
            templateUrl: 'app/templates/details.html'
            })
        .when('/about', {
            templateUrl: 'app/templates/about.html'
            })
        .when('/navigating', {
            templateUrl: 'app/templates/navigating.html'
            })
        .when('/schools', {
            templateUrl: 'app/templates/navigating.html'
            })
        .when('search', {

        })
}]);
