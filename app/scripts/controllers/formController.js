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
	    	//修改密码
	        .state('form.updatePwd', {
	            url: '/updatePwd',
	            templateUrl: 'views/updatePwd.html',
	            controller:"updatePwdController"
	        })
	        //确认修改密码
	        .state('form.qurenUpdatePwd', {
	            url: '/qurenUpdatePwd',
	            templateUrl: 'views/updatePwdTrue.html',
	            controller:"qurenUpdatePwdController"
	        })
	        //更换手机号
	        .state('form.upPhone', {
	            url: '/upPhone',
	            templateUrl: 'views/upPhone.html',
	            controller:'formUpPhoneController'
	        })
	        //重置密码
	        .state('form.resetPwd', {
	            url: '/resetPwd',
	            templateUrl: 'views/resetPwd.html',
	            controller:"resetPwdController"
	        })
	        //注册
	        .state('form.register', {
	            url: '/register',
	            templateUrl: 'views/register.html',
	            controller:"registerController"
	        })
	        //公告详情
	        .state('form.detail', {
	            url: '/detail',
	            templateUrl: 'views/detail.html',
	            controller:"detailController"
	        })
	}])
	.controller('formController',['$scope','$state',function($scope,$state){
		//form 【总控制器】
	}])
	//表单提示切换 animate 类
	.animation('.hide-animation', function () {
		return {
			 beforeAddClass : function(element, className, done) {
				  if (className === 'ng-hide') {
					  element.animate({
					   opacity: 0
					  },250, done);
					  } else {
					  done();
				  }
			 },
			 removeClass : function(element, className, done) {
				  if (className === 'ng-hide') {
					  element.css('opacity',0);
						  element.animate({
						   opacity: 1
						  }, 250, done);
				   } else {
					  	done();
				  }
			 }
		};
	});

