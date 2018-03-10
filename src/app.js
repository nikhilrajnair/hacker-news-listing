var app = angular.module('myApp', ['filters']);
app.controller('myCtrl', function($scope, $http) {
    $http.get("http://starlord.hackerearth.com/hackernews")
        .then(function(response) {
            $scope.newsList = response.data;
            console.log(response.data);

            $scope.propertyName = 'created_at';
            $scope.reverse = true;
            // $scope.friends = friends;

            $scope.sortBy = function(propertyName) {
                $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            };
        });
});

angular.module('filters', []).
filter('shortURL', function() {
    return function(text) {

        var getLocation = function(href) {
            var l = document.createElement("a");
            l.href = href;
            return l;
        };

        var url = getLocation(text);

        return url.hostname

    };
});