	angular.module("tunrApp")
	.controller("ManagerIndexController", ManagerIndexController)
	.controller("ManagerShowController", ManagerShowController)
	.controller("ManagerCreateController", ManagerCreateController);

// var managers = [
//   {
//       name: "Ricky Bobby",
//       email: "rbobby@gmail.com",
//       office_number: "516-877-0304",
//       cell_phone_number: "718-989-1231",
//       id: 0
//   },
//     {
//       name: "greg gregson",
//       email: "greg@gmail.com",
//       office_number: "516-877-54504",
//       cell_phone_number: "718-343-1231",
//       id: 1
//   }
//   ];

ManagerIndexController.$inject = ["$http"];
function ManagerIndexController($http) {
	var vm = this;
	vm.deleteManager = deleteManager;

	function getAllManagers() {
		$http.get('/api/managers')
			.then(function(response) {
				vm.allManagers = response.data;
			});		
	}

	function deleteManager(manager) {
		$http.delete('/api/managers/'+manager.id)
			.then(function(response) {
				var managerIndex = vm.allManagers.indexOf(manager);
				vm.allManagers.splice(managerIndex, 1);
			});
	}

	getAllManagers();
}

ManagerShowController.$inject = ['$http', '$routeParams'];

function ManagerShowController($http, $routeParams) {
	var vm = this;


	function getOneManager() {
		console.log($routeParams.id);
		// vm.oneManager = managers[$routeParams.id];
		$http.get('/api/managers/'+ $routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.oneManager = response.data;
			});			
	}

	
	getOneManager();
}
// ManagerShowController.$inject = ["$http", "$routeParams"];
// function ManagerShowController($http, $routeParams) {
// 	var vm = this;
	
// 	function getOneManager() {
// 		console.log($routeParams.id);
// 		$http.get('/api/managers/'+$routeParams.id)
// 			.then(function(response) {
// 				console.log(response);
// 				vm.oneManager = response.data;
// 			});			
// 	}

// 	getOneManager();
