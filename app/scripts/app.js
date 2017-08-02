'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
    .module('angularApp', ['ui.router','ngAnimate'])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('home', {
	            url: '/home',
	            templateUrl: 'views/common.html',
	            controller:"commonController"
	        })
	        .state('form', {
	            url: '/form',
	            templateUrl: 'views/form.html',
	            controller:"formController"
	        })
	        .state('login',{
	        	url:"/login"
	        	,templateUrl:"views/login.html"
	        	,controller:"useLoginController"
	        })
	    $urlRouterProvider.otherwise('/login');
	}])
	.directive('myAlert',[function(){
	    return {
	        restrict : 'ECMA',
	        replace : true,
	       	scope:{tips:'@save'},
	        template:'<div class="zhezhao"><div class="common_myalert"><h2>温馨提示</h2><span>{{tips}}</span><div class="nowall">我知道了</div></div></div>',
	        link:function(scope,element,attr){
	        	element.find(".nowall").click(function(){
	        		element.hide();
	        		element.find(".common_myalert").animate({
	        			'opacity':"0","zIndex":"-1"
	        		},300)
	        	})
	        }
		}
	}])
	.run(['$rootScope', '$window', '$location', '$log', function ($rootScope, $window, $location, $log) {
            var locationChangeStartOff = $rootScope.$on('$locationChangeStart', locationChangeStart);
//          var locationChangeSuccessOff = $rootScope.$on('$locationChangeSuccess', locationChangeSuccess);
//          var routeChangeStartOff = $rootScope.$on('$routeChangeStart', routeChangeStart);
            var isSecond = false;
            function locationChangeStart(event, newUrl, currentUrl) {
				console.log(event, newUrl, currentUrl)
            }  
        }]);
