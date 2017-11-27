
var urlApi = "http://apiadminbuss.herokuapp.com";
var app = angular.module("myApp", ['ngDialog']);

app.controller("CtrlClientes", function($scope, $http, ngDialog) {
    $http.get(urlApi+"/api/cliente").then(function (response) {
        $scope.clientes = response.data;
    });

    $scope.nuevoCliente = function(index){
        ngDialog.openConfirm({
            template: 'template/clienteForm.html',
            controller: clienteFormctrl,
            resolve: {
                userForm: function () {
                    return $scope.userForm;
                }
            },
            scope: $scope //Pass the scope object if you need to access in the template
		}).then(
			function(value) {
				//save the contact form
			},
			function(value) {
				//Cancel or do nothing
			}
		);
    };
        
});

app.controller("CtrlMovilidades", function($scope, $http, ngDialog) {
    
    $http.get(urlApi+"/api/movilidad").then(function (response) {
        console.log(response.data);        
        $scope.movilidades = response.data;
    });

    $scope.nuevoMovilidad = function(index){
        ngDialog.openConfirm({
            template: 'template/movilidadForm.html',
            controller: movilidadFormctrl,
            resolve: {
                userForm: function () {
                    return $scope.userForm;
                }
            },
            scope: $scope //Pass the scope object if you need to access in the template
		}).then(
			function(value) {
				//save the contact form
			},
			function(value) {
				//Cancel or do nothing
			}
		);
    };

});

app.controller("CtrlEmbarques", function($scope, $http, ngDialog) {
    $http.get(urlApi+"/api/embarque").then(function (response) {
        console.log(response.data);        
        $scope.embarques = response.data;
    });

    $scope.nuevoEmbarque = function(index){
        
        ngDialog.openConfirm({
            template: 'template/embarqueForm.html',
            controller: embarqueFormctrl,
            resolve: {
                userForm: function () {
                    return $scope.userForm;
                }
            },
            scope: $scope //Pass the scope object if you need to access in the template
		}).then(
			function(value) {
				//save the contact form
			},
			function(value) {
				//Cancel or do nothing
			}
		);
    };
});

// modal controller
var clienteFormctrl = function ($scope, $http, ngDialog) {
    $scope.form = {};
    $scope.submitFormCliente = function () {
        if ($scope.form.userForm.$valid) {

            var data = $.param({
                Nombre: $scope.form.cli.nombre,
                DNI: $scope.form.cli.DNI
            });

            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }
            //console.log('nombre: '+$scope.form.cli.nombre+'dni: '+$scope.form.cli.DNI);
            $http.post(urlApi+'/api/cliente', data, config)
                .then(
                    function (response) {
                        alert("Guardado con Exito");
                        ngDialog.closeAll();  
                        window.location.reload();                              
                    },
                    function (response) {
                        alert("Error en guardado");
                    }
                );            
        } else {
            console.log('userform is not in scope');
        }
    };

};

var movilidadFormctrl = function ($scope, $http, ngDialog) {
    $scope.form = {};
    $scope.submitFormMovilidad = function () {
        if ($scope.form.userForm.$valid) {

            var data = $.param({
                Placa : $scope.form.mov.placa,
                Capacidad : $scope.form.mov.capacidad,
                Tipo : $scope.form.mov.tipo 
            });

            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }
            $http.post(urlApi+'/api/movilidad', data, config)
                .then(
                    function (response) {
                        alert("Guardado con Exito");
                        ngDialog.closeAll();
                        window.location.reload();                                
                    },
                    function (response) {
                        alert("Error en guardado");
                    }
                );            
        } else {
            console.log('userform is not in scope');
        }
    };

};

var embarqueFormctrl = function ($scope, $http, ngDialog) {
    $scope.parseInt = parseInt;
    $scope.CurrentDate = new Date();
    $scope.emb={};
    $scope.emb.dd =$scope.CurrentDate.getDate();
    $scope.emb.mm =$scope.CurrentDate.getMonth()+1;
    $scope.emb.yy =$scope.CurrentDate.getFullYear();
    $scope.emb.HH =$scope.CurrentDate.getHours();
    $scope.emb.MM =$scope.CurrentDate.getMinutes();

    $http.get(urlApi+"/api/movilidad").then(function (response) {
        console.log(response.data);        
        $scope.movilidades = response.data;
    });
    
    $scope.submitFormEmbarque = function () {

            var data = $.param({
                Movilidad : $scope.emb.movilidad,
                dd: $scope.emb.dd,
                mm: $scope.emb.mm,
                yy: $scope.emb.yy,
                HH: $scope.emb.HH,
                MM: $scope.emb.MM 
            });
              
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }
            $http.post(urlApi+'/api/embarque', data, config)
                .then(
                    function (response) {
                        alert("Guardado con Exito");
                        ngDialog.closeAll();
                        window.location.reload();                                
                    },
                    function (response) {
                        alert("Error en guardado"+response);
                    }
                );            

    };

};

//detalle controller
app.controller("EmbarqueDetalleCtrl", function($scope, $http, ngDialog) {
    $http.get(urlApi+"/api/embarque/"+id).then(function (response) {
        console.log(response.data);        
        $scope.embarque = response.data;
    });

});

app.controller("MovilidadesDetalleCtrl", function($scope, $http, ngDialog) {
    $http.get(urlApi+"/api/movilidad/"+id).then(function (response) {
        console.log(response.data);        
        $scope.movilidad = response.data;
    });

});

app.controller("ClientesDetalleCtrl", function($scope, $http, ngDialog) {
    $http.get(urlApi+"/api/cliente/"+id).then(function (response) {
        console.log(response.data);        
        $scope.cliente = response.data;
    });

});
