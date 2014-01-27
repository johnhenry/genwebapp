'use strict';
var factories = angular.module('app.factories',
[
'ngResource',
]
);
factories.factory(
'sampleFactory',//Factory name
[
'$resource',
function(){
    return {
        factoryMethod: function(){
            return;
        }
    }
}
]
)