angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {

  };

  $scope.addLink = function (url) {
    Links.addLink(url)
      .then(function (result) {
        console.log('ADDLINK RESULT', result);
        $scope.link = result;
      })
      .catch(function (err) {
        console.log('ADDLINK ERR', err);
      });
  };
});
