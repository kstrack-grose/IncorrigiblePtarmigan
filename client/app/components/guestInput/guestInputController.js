angular.module('guestInput', [])
.controller('guestInputCtrl', function ($scope, guestInputFactory){
	$scope.guests = [];
	$scope.message = 'hello';
	$scope.guestName = "";
	$scope.friendName = "";

	$scope.addGuest = function(){

		var guest = {
			"guestName": $scope.guestName,
			"friendName": $scope.friendName,
			"diningTableId": null,
			"constraints": []
		};
		$scope.guests.push(guest);

		if($scope.friendName){
			var newGuest = {
				"guestName": $scope.friendName,
				"friendName": $scope.guestName,
				"diningTableId": null,
				"constraints": []
			};
			$scope.guests.push(guest);
		}
	};

	$scope.done = function(){
    // call a function in our factory with guest arr as input 
    return guestInputFactory.addAllGuests($scope.guests);
	};

});