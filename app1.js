(function () {
'use strict';

angular.module('BindingApp' , [])
.controller('BindingController' , BindingController );

BindingController.$inject = ['$scope'];

function BindingController($scope) {

  $scope.FirstName = "Abdelhay";
  // $scope.FullName = "";

  $scope.showNumberOfWatchers = function () {
    console.log("Log # of watchers :", $scope.$$watchersCount);
  };


  $scope.setFullName = function () {
    $scope.FullName = $scope.FirstName + " " + " El Amiri";
  };

  $scope.logFirstName = function () {
    console.log("First Name :",$scope.FirstName);
  };

  $scope.LogFullName = function () {
    console.log("Full name :", $scope.FullName);
  };


}



})();
