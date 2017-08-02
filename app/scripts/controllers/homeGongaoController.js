'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
	.controller("homeGongaoController",['$scope','$state',function($scope,$state){
		$scope.into_detail=function(){
			$state.go('form.detail');
		}
	}])
