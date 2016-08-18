angular.module('app')
.controller('HomeCtrl', function($scope, User, Group, Category) {
  $scope.groups = Group.find({
    filter: {
      include: ['members']
    }
  });
  $scope.users = User.find({
    filter: {
      include: ['group']
    }
  });
  $scope.categories = Category.find({
    filter: {
      include: ['parent']
    }
  });
});
