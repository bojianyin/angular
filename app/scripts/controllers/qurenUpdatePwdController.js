'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
	//确认修改密码【控制器】
	.controller('qurenUpdatePwdController',['$scope','$state','$rootScope',function($scope,$state,$rootScope){
		$rootScope.update_msg="修改密码";
		//完成框提示	
		$scope.isShow=false;
		$scope.check=function(){
			if(!$.trim($scope.oldpwd)){
				alt();
				$scope.watch="请输入旧密码...";
				return false;
			}else if(!$.trim($scope.newpwd)){
				alt();
				$scope.watch="请输入新密码...";
				return false;
			}else if(!$.trim($scope.renpwd)){
				alt();
				$scope.watch="请再次输入密码...";
				return false;
			}else{
				$scope.isShow=true;
			}
		}
		$scope.finsh=function(){
			$scope.isShow=false;
		}
		function alt(){
			$(".zhezhao").show();
			$(".zhezhao .common_myalert").animate({
				'opacity':1,'zIndex':"14"
			},300);
		}
	}])
