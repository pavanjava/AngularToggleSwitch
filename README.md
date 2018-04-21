# AngularToggleSwitch
Toggle Switch as Angular 1.x Directive/Module

Include the toggleSwitch module in your index.html as below

```HTML
<script src="modules/toggleSwitch.js" type="text/javascript"></script>
```
Include the modeule as below into your application
```Javascript
var myapp = angular.module('MyApp',['toggleSwitch']);
```
to implement the logic in html please include as below 
```Javascript
<div ng-controller="TestBenchController">
    <ng-round-switch toggle-switch="toggleValue"></ng-round-switch>
    <ng-flat-switch toggle-switch="toggleValue"></ng-flat-switch>
</div>
```

operate the toggle switch from the controller as below. 
```Javascript
myapp.controller('TestBenchController',['$scope',function ($scope) {

	$scope.toggleValue = true; // toggle to ON state
	$scope.toggleValue = false; // toggle to OFF state
    
}]);
```
