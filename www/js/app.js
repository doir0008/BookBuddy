angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html'
          }
        }
      })

      .state('tab.books', {
          url: '/books',
          views: {
            'tab-books': {
              templateUrl: 'templates/tab-books.html',
              controller: 'BooksCtrl'
            }
          }
        })
        .state('tab.books-detail', {
          url: '/books/:itemId',
          views: {
            'tab-books': {
              templateUrl: 'templates/books-detail.html',
              controller: 'BooksDetailCtrl'
            }
          }
        })

      .state('tab.events', {
        url: '/events',
        views: {
          'tab-events': {
            templateUrl: 'templates/tab-events.html',
            controller: 'EventsCtrl'
          }
        }
      });

      $urlRouterProvider.otherwise('/tab/dash');
    });