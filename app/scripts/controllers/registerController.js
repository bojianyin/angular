'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
	//注册【控制器】
	.controller("registerController",['$scope','$rootScope',function($scope,$rootScope){
		$rootScope.update_msg="注册";
		
		//注册
		$scope.register_use=false;;
		$scope.reg_new=function(){
			//验证部分
			if(!$.trim($scope.phone)){
				alt();
				$scope.watch="请输入手机号...";
				return false;
			}else if(!$.trim($scope.code)){
				alt();
				$scope.watch="请输入手机验证码...";
				return false;
			}else if(!$.trim($scope.logpass)){
				alt();
				$scope.watch="请输入登录密码...";
				return false;
			}else if(!$.trim($scope.qurenlogpass)){
				alt();
				$scope.watch="请再次输入登录密码...";
				return false;
			}else{
				$scope.register_use=true;
			}
		}
		$scope.reg_finsh=function(){
			$scope.register_use=false;
		}
		function alt(){
			$(".zhezhao").show();
			$(".zhezhao .common_myalert").animate({
				'opacity':1,'zIndex':"14"
			},300);
		}
	}])