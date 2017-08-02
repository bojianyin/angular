'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
	//更换手机号【控制器】
	.controller("formUpPhoneController",['$scope','$rootScope',function($scope,$rootScope){
		$rootScope.update_msg="更换手机号";
		
		//手机更换部分
		$scope.isShow_Phone=false;
		$scope.tree=function(){
			//验证部分
			if(!$.trim($scope.phone)){
				alt();
				$scope.watch="请输入手机号...";
				return false;
			}else if(!$.trim($scope.code)){
				alt();
				$scope.watch="请输入验证码...";
				return false;
			}else{
				$scope.isShow_Phone=true;
			}
		}
		$scope.phone_finsh=function(){
			$scope.isShow_Phone=false;
		}
		function alt(){
			$(".zhezhao").show();
			$(".zhezhao .common_myalert").animate({
				'opacity':1,'zIndex':"14"
			},300);
		}
	}])
