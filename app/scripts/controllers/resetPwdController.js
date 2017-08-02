'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
	//重置密码【控制器】
	.controller('resetPwdController',['$scope','$state','$rootScope',function($scope,$state,$rootScope){
		$rootScope.update_msg="重置新密码";
		
		//重置新密码
		$scope.reset_pwd=false;
		$scope.resetPwd=function(){
			//验证部分
			if(!$.trim($scope.reset_phone)){
				alt();
				$scope.watch="请输入手机号...";
				return false;
			}else if(!$.trim($scope.reset_code)){
				alt();
				$scope.watch="请输入手机验证码...";
				return false;
			}else if(!$.trim($scope.reset_pwds)){
				alt();
				$scope.watch="请输入新密码...";
				return false;
			}else if(!$.trim($scope.reset_rpwd)){
				alt();
				$scope.watch="请再次输入密码...";
				return false;
			}else{
				$scope.reset_pwd=true;
			}
		}
		function alt(){
			$(".zhezhao").show();
			$(".zhezhao .common_myalert").animate({
				'opacity':1,'zIndex':"14"
			},300);
		}
		$scope.reset_finsh=function(){
			$scope.reset_pwd=false;
		}
	}])
