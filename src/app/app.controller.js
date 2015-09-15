(function() {
    angular.module('app.main').controller('AppCtrl', ['$scope', 'config', 'views', AppCtrl]);

    function AppCtrl($scope, config, views) {
        $scope.appName = config.appTitle;
        $scope.menu = views;
        $scope.addTask = addTask;
        $scope.categories = {
            work: [{
                task: "Fill timesheet",
                desc: "Blah Blah Blah",
                isDone: false
            },{
                task: "Sign New NDA document",
                desc: "Wellington Project",
                isDone: false
            },{
                task: "Validate Investment declarations",
                desc: "Calculate your investment & update in KBG",
                isDone: false
            }],
            personal: [{
                task: "Book Movie tickets",
                desc: "Book 10 tickets",
                isDone: true
            }],
            shopping: [{
                task: "Buy Mobile phone",
                 desc: "iPhone 6 from flipkart ;) ",
                isDone: false
            }],
            finance: [{
                task: "Pay Credit Card Bill",
                 desc: "Blah Blah Blah",
                isDone: false
            }]
        };
        ////////////////
        function addTask(array){
        	var cateoryKeys = Object.keys( $scope.categories);
        	var categoryName = array[0].toLowerCase();
        	var taskName = array[1];
        	var taskDesc = array[2];
        	if(cateoryKeys.indexOf(categoryName)<0){
        		//create a new category in category list
        		$scope.categories[categoryName]=[];
        	}
        	// add to an array
        	$scope.categories[categoryName].push({
        		task:taskName,
        		desc:taskDesc,
        		isDone:false
        	});
        }
    }
})();