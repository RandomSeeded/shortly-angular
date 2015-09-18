angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links : []
  };

  $scope.getLinks = function() {
    console.log('links obj',Links);
    Links.getLinks()
    .then(function(results) {
      console.log('results',results);
      $scope.data.links = results;
    })
    .catch(function(err) {
      console.error('error:',err);
    });
  };

  $scope.getLinks();
});
