/**
 * angular-toggle-switch
 * @version v0.1 - 2018-04-21
 * @author Pavan Kumar Mantha (manthapavankumar@gmail.com)
 * @link https://github.com/pavanjava/AngularToggleSwitch.git
 * @license Apache License 2.0(http://www.apache.org/licenses/LICENSE-2.0.html)
 **/

(function () {
    'use strict';
    angular.module('toggleSwitch',[]).directive('ngRoundSwitch',function () {

        return {
            restrict: 'AE',
            transclude: 'true',
            scope:{
                toggleSwitch: '='
            },
            template: '<label class="switch">\n' +
            '  <input type="checkbox" ng-model="toggleSwitch">\n' +
            '  <span class="slider round"></span>\n' +
            '</label>',
            link: function(scope, element, attr, ctrl){

            }
        };
    }).directive('ngFlatSwitch',function () {

        return {
            restrict: 'AE',
            transclude: 'true',
            scope:{
                toggleSwitch: '='
            },
            template: '<label class="switch">\n' +
            '  <input type="checkbox" ng-model="toggleSwitch">\n' +
            '  <span class="slider"></span>\n' +
            '</label>',
            link: function(scope, element, attr, ctrl){

            }
        };
    });
})();