angular.module('myApp', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
				url: '/home',
				templateUrl: 'temp/home.html'
		})
		$stateProvider.state('login', {
				url: '/login',
				templateUrl: 'temp/login.html'
		})
		$stateProvider.state('zhuce', {
				url: '/zhuce',
				templateUrl: 'temp/zhuce.html'
		})
		$stateProvider.state('angular', {
				url: '/angular',
				templateUrl: 'temp/angular.html'
		})
		$stateProvider.state('css', {
				url: '/css',
				templateUrl: 'temp/css.html'
		})
		$stateProvider.state('html5', {
				url: '/html5',
				templateUrl: 'temp/html5.html'
		})
		$stateProvider.state('vue', {
				url: '/vue',
				templateUrl: 'temp/vue.html'
		})
		$stateProvider.state('javascript', {
				url: '/javascript',
				templateUrl: 'temp/javascript.html'
		})
		$stateProvider.state('react', {
				url: '/react',
				templateUrl: 'temp/react.html'
		})
		$stateProvider.state('xprofile', {
				url: '/xprofile',
				templateUrl: 'temp/xprofile.html'
		})
		$stateProvider.state('node', {
				url: '/node',
				templateUrl: 'temp/node.html'
		})
		$stateProvider.state('profile', {
				url: '/profile',
				templateUrl: 'temp/profile.html'
		})
		$stateProvider.state('other', {
				url: '/other',
				templateUrl: 'temp/other.html'
		})
		$stateProvider.state('jquery', {
				url: '/jquery',
				templateUrl: 'temp/jquery.html'
		})
		$stateProvider.state('a1', {
				url: '/a1',
				templateUrl: 'temp/a1.html'
		})
		$stateProvider.state('a2', {
				url: '/a2',
				templateUrl: 'temp/a2.html'
		})
		$stateProvider.state('a3', {
				url: '/a3',
				templateUrl: 'temp/a3.html'
		})
		$stateProvider.state('a4', {
				url: '/a4',
				templateUrl: 'temp/a4.html'
		})
		$stateProvider.state('a5', {
				url: '/a5',
				templateUrl: 'temp/a5.html'
		})
		$urlRouterProvider.otherwise('/home')
	}])
	.controller('head',['$scope',function($scope){
}])