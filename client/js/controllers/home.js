angular.module('app')
.controller('HomeCtrl', function($scope, User, Group) {
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
});
