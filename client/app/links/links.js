angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links : []
  };

  $scope.getLinks = function () {
    Links.getLinks()
    .then(function (results) {
      $scope.data.links = results;
    })
    .catch(function (err) {
      console.error('error:', err);
    });
  };

  $scope.getLinks();
});
