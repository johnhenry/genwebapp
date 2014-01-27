'use strict';
var filters = angular.module('app.filters', []);
filters.filter(
'identityFilter',//Filter Name
[
function(){
    return function(input){
        return input;
    }
}
]
);

filters.filter(
'arrayToPropFilter',//Filter Name
[
function(){
    return function(input, key){
        return input.map(function(val){return val[key];});
    }
}
]
);

filters.filter(
'joinArrayFilter',//Filter Name
[
function(){
    return function(input, joiner){
        return input.join(joiner);
    }
}
]
);

filters.filter(
'hashFilter',
[
'hashService',
function(hashService){
    return function(input, algorithm){
        return hashService[algorithm || 'md5'](input).toString();
    }
}
]
);