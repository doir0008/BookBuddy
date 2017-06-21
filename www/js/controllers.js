angular.module('starter.controllers', ['ngSanitize'])
    .controller('BooksCtrl', ['$scope', '$ionicLoading', '$timeout', 'Books', function($scope, $ionicLoading, $timeout, Books) {
        $scope.page = 1;
        $scope.bookSearch = function(value) {
            $ionicLoading.show({});
            Books.search(value)
                .then(function(response) {
                    $timeout(function() {
                        $ionicLoading.hide();
                    }, 2000);
                    $scope.searchResults = response.data.GoodreadsResponse.search.results.work;
                }, function (error) {
                    console.log("Error in Books.search: " + error);
                })
        }
        $scope.refresh = function(value) {
            Books.search(value)
                .then(function(response) {
                    $scope.searchResults = response.data.GoodreadsResponse.search.results.work;
                }, function(error) {
                    console.log("Error in scope.refresh: " + error);
                })
            $scope.$broadcast('scroll.refreshComplete');
        }
        $scope.onSwipeLeft = function() {
            $scope.page++;
            $ionicLoading.show({});
            Books.search(this.value, $scope.page)
                .then(function(response) {
                    $timeout(function() {
                        $ionicLoading.hide();
                    }, 2000);
                    $scope.searchResults = response.data.GoodreadsResponse.search.results.work;
                }, function(error) {
                    console.log("Error in Books.search: " + error);
                })  
        }
        $scope.onSwipeRight = function() {
            if ($scope.page == 1) {
                return;
            }
            $scope.page--;
            $ionicLoading.show({});
            Books.search(this.value, $scope.page)
                .then(function(response) {
                    $timeout(function() {
                        $ionicLoading.hide();
                    }, 2000);
                    $scope.searchResults = response.data.GoodreadsResponse.search.results.work;
                }, function(error) {
                    console.log("Error in Books.search: " + error);
                })
        }
    }])

    .controller('BooksDetailCtrl', function($scope, $stateParams, Book) {
        $scope.itemId = $stateParams.itemId;
        $scope.init = function(search) {
            Book.book($scope.itemId)
                .then(function(response) {
                    $scope.items = response.data.GoodreadsResponse.book;
                    $scope.author = response.data.GoodreadsResponse.book.authors.author;
                }, function(error) {
                    console.log("Error in scope.init: " + error);
                })
        }
    })

    .controller('EventsCtrl', function($scope, $stateParams, $ionicLoading, $timeout, Events) {
        $ionicLoading.show({});
        $scope.itemId = $stateParams.itemId;
        $scope.init = function() {
            Events.event($scope.itemId)
                .then(function(response) {
                    $timeout(function() {
                        $ionicLoading.hide();
                    }, 2000);
                    $scope.events = response.data.GoodreadsResponse.events.event;
            }, function(error) {
                console.log("Error in scope.init: " + error);
            })
        }
    });