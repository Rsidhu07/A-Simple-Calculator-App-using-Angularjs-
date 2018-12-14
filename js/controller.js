app.controller("myctrl",function($scope){

    $scope.fnum= 0;
    $scope.snum= 0;

    $scope.result = 0;
/*
    $scope.result = function() {
        if ($scope.operator == '+') {
            return $scope.fnum + $scope.snum;
        }
        if ($scope.operator == '-') {
            return $scope.fnum - $scope.snum;
        }
        if ($scope.operator == '*') {
            return $scope.fnum * $scope.snum;
        }
        if ($scope.operator == '/') {
            return $scope.fnum / $scope.snum;
        }
    };
    */

    $scope.result = ()=>{

        switch ($scope.operator) {
            case '+': return $scope.fnum + $scope.snum;
               
            case '-': return $scope.fnum - $scope.snum;
        
                  
            case '*': return $scope.fnum * $scope.snum;
                    
            case '/': return $scope.fnum / $scope.snum;
                
        
            }
        };
           
})