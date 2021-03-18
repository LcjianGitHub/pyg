var app = angular.module("lcjian", ['pagination']);
        app.controller("brandController", function ($scope, $http) {
            $scope.findAll = function () {
                $http.get("../brand/findAll.do").success(function (response) {
                    $scope.list = response;
                });
            };
            //初始化分页参数
            $scope.paginationConf = {
                currentPage: 1,//当前页号
                totalItems: 10,//总记录数
                itemsPerPage: 10,//页大小
                perPageOptions: [10, 20, 30, 40, 50],//可选择的每页大小
                onChange: function () {//当上述的参数发生变化了后触发
                    $scope.reloadList();
                }
            };
            //加载表格数据
            $scope.reloadList = function () {
                /*$scope.findPage($scope.paginationConf.currentPage,
                    $scope.paginationConf.itemsPerPage);*/
                $scope.search($scope.paginationConf.currentPage,
                    $scope.paginationConf.itemsPerPage)
            };
            //分页查询
            $scope.findPage = function (page, rows) {
                $http.get("../brand/findPage.do?page=" + page + "&rows=" +
                    rows).success(function (response) {
                    //更新记录列表
                    $scope.list = response.rows;
                    //更新总记录数
                    $scope.paginationConf.totalItems = response.total;
                });
            };

            $scope.save=function () {
                var method ="add";
                if($scope.entity.id != null){
                    method="update"
                }
                $http.post("../brand/"+method+".do",$scope.entity).success(function (response) {
                    if(response.success){
                        //重新加载数据
                        $scope.reloadList();
                    }else{
                        alert(response.message);
                    }
                });
            };

            $scope.findOne=function (id) {
                $http.get("../brand/findOne.do?id="+id).success(function (response) {
                    $scope.entity=response;
                })
            };

            $scope.selectedIds=[];

            $scope.updateSelection=function ($event, id) {
                if($event.target.checked){
                    $scope.selectedIds.push(id);
                }else{
                    var index = $scope.selectedIds.indexOf(id);
                    $scope.selectedIds.splice(index,id);
                }
            };

            //批量删除
            $scope.delete = function () {
                if ($scope.selectedIds.length < 1) {
                    alert("请选择要删除的记录");
                    return;
                }
                if(confirm("确定要删除选中的记录吗？")){
                    $http.get("../brand/delete.do?ids=" +
                        $scope.selectedIds).success(function (response) {
                        if(response.success){
                            $scope.reloadList();
                            $scope.selectedIds = [];
                        } else {
                            alert(response.message);
                        }
                    });
                }
            };

            $scope.searchEntity={};

            $scope.search=function (page,rows) {
                $http.post("../brand/search.do?page="+page+"&rows="+rows,$scope.searchEntity).success(function (response) {
                    $scope.list=response.rows;
                    $scope.paginationConf.totalItems=response.total;
                })
            }

        });