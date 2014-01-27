'use strict';
var animations = angular.module('app.animations',[]);
animations.animation(
'.my-slide-animation',
[
"GSAPService",
function(GSAPService) {
    return {
        enter : function(element, done) {
            var position = angular.element(element).css("position");
            var z = angular.element(element).css("z-index");
            GSAPService.TweenMax.fromTo(element, 1,
                            {top:"600px", opacity:0,"z-index":100, position:"absolute"},
                            {top:"0px", opacity:1,onComplete: function(){
                                angular.element(element).css({position: undefined, "z-index": z});
                            }
                        }
            )
        },
        leave : function(element, done) {
            var position = angular.element(element).css("position");
            var z = angular.element(element).css("z-index");
            GSAPService.TweenMax.fromTo(element, 1,
                            {top:"0px", opacity:2,"z-index":101, position:"absolute"},
                            {top:"-600px",opacity:0,onComplete: function(){
                                angular.element(element).css({position: undefined, "z-index": z});
                            }
                        }
            )
        }
}}
]
);