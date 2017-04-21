
	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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
		$stateProvider.state('home.a1', {
				url: '/a1',
				views:{
					content:{
						templateUrl: 'temp/a1.html'
					}
				}
		})
		$stateProvider.state('home.a2', {
				url: '/a2',
				views:{
					content:{
						templateUrl: 'temp/a2.html'
					}
				}
		})
		$stateProvider.state('home.a3', {
				url: '/a3',
				views:{
					content:{
						templateUrl: 'temp/a3.html'
					}
				}
		})
		$stateProvider.state('home.a4', {
				url: '/a4',
				views:{
					content:{
						templateUrl: 'temp/a4.html'
					}
				}
		})
		$stateProvider.state('home.a5', {
				url: '/a5',
				views:{
					content:{
						templateUrl: 'temp/a5.html'
					}
				}
		})
		$stateProvider.state('home.angular', {
				url: '/angular',
				views:{
					content:{
						templateUrl: 'temp/angular.html'
					}
				}
		})
		$stateProvider.state('home.css', {
				url: '/css',
				views:{
					content:{
						templateUrl: 'temp/css.html'
					}
				}
		})
		$stateProvider.state('home.html5', {
				url: '/html5',
				views:{
					content:{
						templateUrl: 'temp/html5.html'
					}
				}
		})
		$stateProvider.state('home.javascript', {
				url: '/javascript',
				views:{
					content:{
						templateUrl: 'temp/javascript.html'
					}
				}
		})
		$stateProvider.state('home.jquery', {
				url: '/jquery',
				views:{
					content:{
						templateUrl: 'temp/jquery.html'
					}
				}
		})
		$stateProvider.state('home.node', {
				url: '/node',
				views:{
					content:{
						templateUrl: 'temp/node.html'
					}
				}
		})
		$stateProvider.state('home.other', {
				url: '/other',
				views:{
					content:{
						templateUrl: 'temp/other.html'
					}
				}
		})
		$stateProvider.state('home.profile', {
				url: '/profile',
				views:{
					content:{
						templateUrl: 'temp/profile.html'
					}
				}
		})
		$stateProvider.state('home.react', {
				url: '/react',
				views:{
					content:{
						templateUrl: 'temp/react.html'
					}
				}
		})
		$stateProvider.state('home.vue', {
				url: '/vue',
				views:{
					content:{
						templateUrl: 'temp/vue.html'
					}
				}
		})
		$stateProvider.state('home.xprofile', {
				url: '/xprofile',
				views:{
					content:{
						templateUrl: 'temp/xprofile.html'
					}
				}
		})
		$urlRouterProvider.otherwise('/zhuce')
	}])