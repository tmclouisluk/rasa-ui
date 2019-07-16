angular.module("app").controller("NavBarController", NavBarController);

function NavBarController(
  $scope,
  $rootScope,
  adalAuthenticationService,
  appConfig,
  $window
) {
  $scope.toggleAside = function() {
    $window.open('/cs');
  };

  $scope.toggleSidebar = function() {
    if (angular.element("body").hasClass("sidebar-fixed")) {
      angular
        .element("body")
        .removeClass("sidebar-fixed")
        .addClass("sidebar-hidden");
    } else {
      angular
        .element("body")
        .addClass("sidebar-fixed")
        .removeClass("sidebar-hidden");
    }
  };

  $scope.logout = function() {
    if (appConfig.adalauthentication) {
      adalAuthenticationService.logOut();
    }
    $rootScope.$broadcast("INVALID_JWT_TOKEN");
  };
}
