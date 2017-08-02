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
    .module('angularApp')
    .controller("useLoginController",['$scope','$state',function($scope,$state){
    	//用户登录控制器
    	$scope.isShow=false;
    	$scope.user_login=function(){
    		if(!$.trim($scope.phone)){
    			alt();
				$scope.watch="请输入手机号...";
				return false;
    		}else if(!$.trim($scope.pwd)){
    			alt();
				$scope.watch="请输入登录密码...";
				return false;
    		}else{
    			$scope.isShow=true;
    		}
    	}
    	$scope.loginsuccess=function(){
    		$state.go('home.index');
    	}
    	function alt(){
			$(".zhezhao").show();
			$(".zhezhao .common_myalert").animate({
				'opacity':1,'zIndex':"14"
			},300);
		}
    }])
