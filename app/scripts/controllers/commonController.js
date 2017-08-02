'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	    $stateProvider
	        .state('home.index', {
	            url: '/index',
	            templateUrl: 'views/index.html',
	            controller:"home_indexController"
	        })
	        .state('home.center', {
	            url: '/center',
	            templateUrl: 'views/memCenter.html'
//	            controller:"homeCenterController"
	        })
	        .state('home.gongao',{
	        	url: '/gongao',
	            templateUrl: 'views/gongao.html',
	            controller:"homeGongaoController"
	        })
	}])
	.controller('commonController',['$scope',function($scope){
		
	}])
	

