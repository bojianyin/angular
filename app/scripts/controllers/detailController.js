'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
	//公告详情【控制器】
	.controller("detailController",['$scope','$rootScope',function($scope,$rootScope){
		$rootScope.update_msg="公告详情";
	}])