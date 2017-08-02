'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
	.directive('centerCard',['$state',function($state){
	    return {
	        restrict : 'ECMA',
	        replace : true,
	        templateUrl: 'views/home_centerCard.html',
	        link:function(scope,element,attr){
				var start=0,end=0;
				var result;
				var arr=new Array();
				var isEnd=true;     //布尔值变量
				
				//类名存储
				for(var i=0;i<$(element).find(".car").length;i++){
					arr.push($(element).find(".car").eq(i).attr("class"));
				}
				
				function touchStart(){
					$(element).find(".car").bind("touchstart",function(e){
						e.preventDefault();
						start=e.originalEvent.touches[0].pageX;
						$(this).css("transition","0s")
					})
				}
				
				function touchMove(){
					
					$(element).find(".car").bind("touchmove",function(e){
						if(!isEnd) return ;
						e.preventDefault();
						end=e.originalEvent.touches[0].pageX;
						result=(end-start);
						if((end-start)>0){
							var num=Math.abs(end-start)*0.3;
							$(this).css({
								"transformOrigin":"right bottom"
								,"transform":"rotate("+num+"deg)"
								,"opacity":(1-(((Math.abs(start-end))/2)/100))
							})
						}else{
							var num=Math.abs(end-start)*0.3;
							$(this).css({
								"transformOrigin":"left bottom"
								,"transform":"rotate(-"+num+"deg)"
								,"opacity":(1-(((Math.abs(start-end))/2)/100))
							})
						}
						return false;
					})
				}
				
				function touchEnd(){
					$(element).find(".car").bind("touchend",function(e){
						if(!result){
							switch($(e.currentTarget).find(".jianjie p").text()){
								case '更换手机号Change Phone Number':
									$state.go('form.upPhone');
									break;
								case '修改密码Modify Password':
									$state.go('form.updatePwd');
									break;
								case '退出Sing Out':
									$state.go('login');
									break;
							}
						}
						$(this).css("transition",".5s")
						if(!(result>130||result<-130)){
							$(this).css({
								"transform":"rotate(0deg)"
							})
						}else{
							if(result>0){
								$(this).css({
									"transformOrigin":"right bottom"
									,"transform":"rotate("+110+"deg)"
								})
								move($(this));
							}else{
								$(this).css({
									"transformOrigin":"left bottom"
									,"transform":"rotate(-"+110+"deg)"
								})
								move($(this));
							}
							isEnd=false;
						}
						result=undefined;
						bindStatus();
					})
				}
				
				//运动完毕后的操作
				function move(obj){
					obj.bind("webkitTransitionEnd",function(){
						resetCss(obj);
						$(".card").append(obj.remove());
						sortClassName();
						isEnd=true;
					})
				}
				
				//重置类名
				function sortClassName(){
					$(element).find(".car").each(function(index,e){
						$(e).attr("class",arr[index]);
					})
				}
				
				//重置css样式
				function resetCss(obj){
					obj.css({
						"transformOrigin":"center"
						,"transform":"rotate(0deg)"
						,"transition":"0s"
						,"opacity":"0"
					})
				}
				
				//重新绑定状态
				function bindStatus(){
					$(element).find(".car").css("transition",".5s")
					$(element).find(".car").unbind("touchstart");
					$(element).find(".car").unbind("touchmove");
					$(element).find(".car").unbind("touchend");
					touchStart();
					touchMove();
					touchEnd();
				}
				
				//默认运行的函数
				touchStart();
				touchMove();
				touchEnd();
				sortClassName();
			}
	    };
	}]);
