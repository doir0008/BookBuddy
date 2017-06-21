angular.module('starter.services', [])
    .factory("Books", function BooksFactory($http) {
        var title = title;
        return {
            search: function(search, page) {
                return $http.get("https://www.goodreads.com/search/index.xml", {
                    params: {
                        "key": "IDfaJXV81i5YJ1F6AzY5Ag",
                        q: search.query,
                        page: page,
                        "search[field]": title
                    },
                    transformResponse: function(search) {
                        var x2js = new X2JS({});
                        var response = angular.bind(x2js, x2js.xml_str2json, search)();
                        return response;
                    }
                });
            }
        };
    })

    .factory("Book", function BookFactory($http) {
        return {
            book: function(itemId) {
                return $http.get("https://www.goodreads.com/book/show/" + itemId + ".xml", {
				    params: {
				        "key": "IDfaJXV81i5YJ1F6AzY5Ag",
				        "id": itemId
				    },
				    transformResponse: function(search) {
                        var x2js = new X2JS({});
                        var response = angular.bind(x2js, x2js.xml_str2json, search)();
                        return response;
				    }
				});
            }
        }
    })
         
    .factory("Events", function EventsFactory($http) {
        return {
            event: function(itemId) {
                return $http.get("https://www.goodreads.com/event/index.xml", {
                    params: {
                        "key": "IDfaJXV81i5YJ1F6AzY5Ag",
                        "search[country_code]": "CA"
                    },
                    transformResponse: function(value) {
                        var x2js = new X2JS({});
                        var response = angular.bind(x2js, x2js.xml_str2json, value)();
                        return response;
                    }
                });
            }
        }
    });