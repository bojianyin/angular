'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
	.controller("home_indexController",["$scope","$timeout",function($scope,$timeout){
		var arr=['55555555555555','44444444444','3333333333'];
   		$scope.gongaoInfo=arr[0];
   		var i=0;
   		function autoChange(){
   			$timeout(function(){
       			i++;
       			i=i>=arr.length?0:i;
       			$scope.gongaoInfo=arr[i];
       			autoChange();
       		},3000)
   		}
   		autoChange();
	}])
