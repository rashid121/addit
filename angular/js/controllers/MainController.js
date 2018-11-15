app.controller('MainController', ['$scope', function ($scope) {
    $scope.move = {
        icon: 'img/prog.jpg',
        title: 'MOVE',
        developer: 'MOVE, Inc.',
        price: 0.99
    };

    $scope.shutterbugg = {
        icon: 'img/sherlock.jpg',
        title: 'Shutterbugg',
        developer: 'Chico Dusty',
        price: 2.99
    };

    $scope.gameboard = {
        icon: 'img/shoe.jpg',
        title: 'Gameboard',
        developer: 'Armando P.',
        price: 1.99
    };
    $scope.forecast = {
        icon: 'img/foggy.jpg',
        title: 'Forecast',
        developer: 'Forecast',
        price: 1.99
    };

    $scope.apps = [{
            icon: 'img/foggy.jpg',
            title: 'MOVE',
            developer: 'MOVE,Inc.',
            price: 0.99
        },
        {
            icon: 'img/prog.jpg',
            title: 'Shutterbugg',
            developer: 'Chico Dusty',
            price: 2.99
        },
        {
            icon: 'img/sherlock.jpg',
            title: 'Gameboard',
            developer: 'Armando P.',
            price: 1.99
        },
        {
            icon: 'img/shoe.jpg',
            title: 'Forecast',
            developer: 'Forecast',
            price: 1.99
        }
    ];
}]);