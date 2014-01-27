'use strict'
var directives = angular.module('app.directives', []);
directives.directive(
'sampleTransclusion',
[
function () {
    return {
        template: "Italicized: <i ng-transclude></i>, Bold: <b ng-transclude></b>, Underlined: <u ng-transclude></u>.",
        templateUrl: "",
        restrict:"AECD",
        compile:false,
        transclude:true,
        scope:{
            "twoWayBinding" : "=",
            "topDownBinding" : "@",
            "bottomUpBinding" : "&"
        },
        link : function(scope, element, attributes){
            element.css("cursor", "pointer");
            element.click(function(){alert(attributes.secretMessage || "No secred message attribute. :(")});
        }
    }
}
]
);
//https://gist.github.com/enjalot/1203641
directives.directive(
'sampleSvg',
[
'SnapService',
function (SnapService) {
    return {
        templateUrl: 'templates/directives/croc.svg',
        link:function(scope, element){
            var pivots = [
                [44, 147],
                [92, 126]
            ];
            var timer;
            var open = function(target) {
                clearTimeout(timer);
                if(!target) return;
                target.select("#upper-head").animate({
                    transform: "r" + [0, pivots[0]]
                }, 700, SnapService.mina.elastic);
                
                target.select("#upper-jaw").animate({
                    transform: "r" + [0, pivots[1]]
                }, 700, SnapService.mina.elastic);
                target.select("#symbol").animate({
                    transform: "t0,0r0"
                }, 500, SnapService.mina.elastic);
            }
            var close = function(target) {
                clearTimeout(timer);
                target.select("#upper-head").animate({
                    transform: "r" + [8, pivots[0]]
                }, 500, SnapService.mina.backin);
                target.select("#upper-jaw").animate({
                    transform: "r" + [37, pivots[1]]
                }, 500, SnapService.mina.backin);
                timer = setTimeout(function () {
                    target.select("#symbol").animate({
                        transform: "t-70,40r40"
                    }, 100);
                }, 400);
            }
            jQuery(function(){
                element.children(0).css("cursor", "pointer");
                var croc = SnapService.Snap(element.children(0).get(0)).hover(
                    function() {
                        open(croc);
                    },
                    function () {
                        timer = setTimeout(function(){
                            close(croc);
                        }, 200);
                    }
                );
                timer = setTimeout(
                function(){
                    close(croc);
                }, 50);
            })
        }
    };
}
]
);
directives.directive(
'sampleChart',
[
'd3Service',
function (d3Service) {
    var link = function(scope, element, attributes){
    var data = scope.$eval(attributes.sampleChart) || [];
    var color = d3Service.scale.category10();
    var w = Number(attributes.height) || 200;
    var h = Number(attributes.width) || 200;
    var r = Math.min(w, h)/2;
    var vis = d3.select(element[0])
        .append("svg:svg")              //create the SVG element inside the <body>
        .data([data])                   //associate our data with the document
        .attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
        .attr("height", h)
        .append("svg:g")                //make a group to hold our pie chart
        .attr("transform", "translate(" + r + "," + r + ")");
    var arc = d3.svg.arc()
        .outerRadius(r * 0.9)
        .innerRadius(r * 0.5);
    var pie = d3.layout.pie().value(function(d) { return d.value; });
    var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
    arcs.append("svg:path").attr("fill", function(d, i) { return color(i); } ).attr("d", arc);
    arcs.append("svg:text").attr("transform", function(d) {
                d.innerRadius = 0;
                d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";
            }).attr("text-anchor", "middle").text(function(d, i) { return data[i].label; }); 
        };
    return {
        link: link,
        restrict : "AE"
    };
}
]
);

















