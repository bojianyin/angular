'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
	//修改密码【控制器】
	.controller('updatePwdController',['$scope','$state','$rootScope',function($scope,$state,$rootScope){
		$rootScope.update_msg="修改密码";
		//密码下一步验证跳转
		$scope.next=function(){
			//验证是否为空
			if(!$.trim($scope.code)){
				alt();
				$scope.watch="请输入手机验证码...";
				return false;
			}else{
				$state.go('form.qurenUpdatePwd');
			}
		}
		function alt(){
			$(".zhezhao").show();
			$(".zhezhao .common_myalert").animate({
				'opacity':1,'zIndex':"14"
			},300);
		}
	}])
