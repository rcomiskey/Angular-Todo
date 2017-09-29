angular.module('TodoDirective', [])
    .directive('todoTable', function() {
        return {
            restrict: "A",
            templateUrl: "templates/directives/todo-table.html"
        };
    });