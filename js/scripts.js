
var urlApi = "https://apiadminbuss.herokuapp.com";
//var urlApi = "http://localhost:3000";
var app = angular.module("myApp", ['ngDialog']);

app.controller("CtrlClientes", function ($scope, $http, ngDialog) {
    $http.get(urlApi + "/api/cliente").then(function (response) {
        $scope.clientes = response.data;
    });

    $scope.nuevoCliente = function (index) {
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
            function (value) {
                //save the contact form
            },
            function (value) {
                //Cancel or do nothing
            }
            );
    };

});

app.controller("CtrlMovilidades", function ($scope, $http, ngDialog) {

    $http.get(urlApi + "/api/movilidad").then(function (response) {
        console.log(response.data);
        $scope.movilidades = response.data;
    });

    $scope.nuevoMovilidad = function (index) {
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
            function (value) {
                //save the contact form
            },
            function (value) {
                //Cancel or do nothing
            }
            );
    };

});

app.controller("CtrlEmbarques", function ($scope, $http, ngDialog) {
    $http.get(urlApi + "/api/embarque").then(function (response) {
        console.log(response.data);
        $scope.embarques = response.data;
    });

    $scope.nuevoEmbarque = function (index) {

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
            function (value) {
                //save the contact form
            },
            function (value) {
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
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }
            //console.log('nombre: '+$scope.form.cli.nombre+'dni: '+$scope.form.cli.DNI);
            $http.post(urlApi + '/api/cliente', data, config)
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
                Placa: $scope.form.mov.placa,
                Capacidad: $scope.form.mov.capacidad,
                Tipo: $scope.form.mov.tipo
            });

            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }
            $http.post(urlApi + '/api/movilidad', data, config)
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
    $scope.emb = {};
    $scope.emb.dd = $scope.CurrentDate.getDate();
    $scope.emb.mm = $scope.CurrentDate.getMonth() + 1;
    $scope.emb.yy = $scope.CurrentDate.getFullYear();
    $scope.emb.HH = $scope.CurrentDate.getHours();
    $scope.emb.MM = $scope.CurrentDate.getMinutes();
    $scope.emb.ingreso = 000;

    $http.get(urlApi + "/api/movilidad").then(function (response) {
        console.log(response.data);
        $scope.movilidades = response.data;
    });

    $scope.submitFormEmbarque = function () {

        var data = $.param({
            Movilidad: $scope.emb.movilidad,
            dd: $scope.emb.dd,
            mm: $scope.emb.mm,
            yy: $scope.emb.yy,
            HH: $scope.emb.HH,
            MM: $scope.emb.MM,
            ingreso: $scope.emb.ingreso
        });

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }
        $http.post(urlApi + '/api/embarque', data, config)
            .then(
            function (response) {
                alert("Guardado con Exito");
                ngDialog.closeAll();
                window.location.reload();
            },
            function (response) {
                alert("Error en guardado" + response);
            }
            );

    };

};

//detalle controller
app.controller("EmbarqueDetalleCtrl", function ($scope, $http, ngDialog) {
    $http.get(urlApi + "/api/embarque/" + id).then(function (response) {
        console.log(response.data);
        $scope.embarque = response.data;
        $scope.DataAsi = $scope.embarque.Asientos        
        $scope.asientos = [];
        for (var i = 0; i <= 100; i += 1) {
            $scope.asientos.push(i);
        }
    });

    // editar
    $scope.editarEmbarque = function (index) {

        ngDialog.openConfirm({
            template: 'template/embarqueEditar.html',
            controller: embarqueEditarctrl,
            resolve: {
                userForm: function () {
                    return $scope.userForm;
                }
            },
            scope: $scope //Pass the scope object if you need to access in the template
        }).then(
            function (value) {
                //save the contact form
            },
            function (value) {
                //Cancel or do nothing
            }
            );
    };

    $scope.registrar = function (index) {
        console.log("number: " + index);
        $scope.index = index;
        ngDialog.openConfirm({
            template: 'template/asientoForm.html',
            controller: asientoFormctrl,
            resolve: {
                userForm: function () {
                    return $scope.userForm;
                }
            },
            scope: $scope //Pass the scope object if you need to access in the template
        }).then(
            function (value) {
                //save the contact form
            },
            function (value) {
                //Cancel or do nothing
            }
            );
    };

    $scope.range = function (min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };

    $scope.getAsientoByNum =function (id) {
        for (var d = 0, len = $scope.DataAsi.length; d < len; d += 1) {
            if ($scope.DataAsi[d].NumAsiento === id) {
                return $scope.DataAsi[d].Cliente;
            }
        }
        return "Vacio"
    }
});

app.controller("MovilidadesDetalleCtrl", function ($scope, $http, ngDialog) {
    $http.get(urlApi + "/api/movilidad/" + id).then(function (response) {
        console.log(response.data);
        $scope.movilidad = response.data;
    });

    // editar
    $scope.editarMovilidad = function (index) {

        ngDialog.openConfirm({
            template: 'template/movilidadEditar.html',
            controller: movilidadEditarctrl,
            resolve: {
                userForm: function () {
                    return $scope.userForm;
                }
            },
            scope: $scope //Pass the scope object if you need to access in the template
        }).then(
            function (value) {
                //save the contact form
            },
            function (value) {
                //Cancel or do nothing
            }
            );
    };
});

app.controller("ClientesDetalleCtrl", function ($scope, $http, ngDialog) {
    $http.get(urlApi + "/api/cliente/" + id).then(function (response) {
        console.log(response.data);
        $scope.cliente = response.data;
    });

    // editar
    $scope.editarCliente = function (index) {

        ngDialog.openConfirm({
            template: 'template/clienteEditar.html',
            controller: clienteEditarctrl,
            resolve: {
                userForm: function () {
                    return $scope.userForm;
                }
            },
            scope: $scope //Pass the scope object if you need to access in the template
        }).then(
            function (value) {
                //save the contact form
            },
            function (value) {
                //Cancel or do nothing
            }
            );
    };
});
// controller modal Editar
var embarqueEditarctrl = function ($scope, $http, ngDialog) {
    $scope.parseInt = parseInt;
    $scope.CurrentDate = new Date();
    $scope.emb = {};
    $scope.emb.movilidad = $scope.embarque.Movilidad
    $scope.emb.dd = $scope.embarque.dd;
    $scope.emb.mm = $scope.embarque.mm;
    $scope.emb.yy = $scope.embarque.yy;
    $scope.emb.HH = $scope.embarque.HH;
    $scope.emb.MM = $scope.embarque.MM;
    $scope.emb.ingreso = $scope.embarque.ingreso;

    $http.get(urlApi + "/api/movilidad").then(function (response) {
        console.log(response.data);
        $scope.movilidades = response.data;
    });

    $scope.submitEditEmbarque = function () {

        var data = $.param({
            embarque: $scope.embarque._id,
            Movilidad: $scope.embarque.Movilidad._id,
            dd: $scope.emb.dd,
            mm: $scope.emb.mm,
            yy: $scope.emb.yy,
            HH: $scope.emb.HH,
            MM: $scope.emb.MM,
            ingreso: $scope.emb.ingreso
        });

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }
        $http.post(urlApi + '/api/embarque/update', data, config)
            .then(
            function (response) {
                alert("Guardado con Exito");
                ngDialog.closeAll();
                window.location.reload();
            },
            function (response) {
                alert("Error en guardado" + response);
            }
            );

    };

};
// asientoscontrol
var asientoFormctrl = function ($scope, $http, ngDialog) {
    $scope.asi = {};
    $scope.asi.nombre = "";
    $scope.asi.DNI = "";


    $scope.submitAsiento = function () {

        var data = $.param({
            embarque: $scope.embarque._id,
            Cliente: $scope.asi.nombre,
            DNI: $scope.asi.DNI,
            NumAsiento: $scope.index,
        });
        console.log(data);
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }
        $http.post(urlApi + '/api/embarque/asiento', data, config)
            .then(
            function (response) {
                alert("Guardado con Exito");
                ngDialog.closeAll();
                window.location.reload();
            },
            function (response) {
                alert("Error en guardado" + response);
            }
            );
    };

};


var movilidadEditarctrl = function ($scope, $http, ngDialog) {
    $scope.form = {};
    $scope.form.mov = {};
    $scope.form.mov.placa = $scope.movilidad.Placa;
    $scope.form.mov.capacidad = $scope.movilidad.Capacidad;
    $scope.form.mov.tipo = $scope.movilidad.Tipo;
    console.log($scope.movilidad);
    $scope.submitFormMovilidad = function () {
        if ($scope.form.userForm.$valid) {

            var data = $.param({
                movilidad: $scope.movilidad._id,
                Placa: $scope.form.mov.placa,
                Capacidad: $scope.form.mov.capacidad,
                Tipo: $scope.form.mov.tipo
            });

            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }
            $http.post(urlApi + '/api/movilidad/update', data, config)
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

var clienteEditarctrl = function ($scope, $http, ngDialog) {
    $scope.form = {};
    $scope.form.cli = {};
    $scope.form.cli.nombre = $scope.cliente.Nombre;
    $scope.form.cli.DNI = $scope.cliente.DNI;
    $scope.submitEditarCliente = function () {
        if ($scope.form.userForm.$valid) {

            var data = $.param({
                cliente: $scope.cliente._id,
                Nombre: $scope.form.cli.nombre,
                DNI: $scope.form.cli.DNI,

            });

            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }
            $http.post(urlApi + '/api/cliente/update', data, config)
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
// reportes

app.controller("CtrlReporte", function ($scope, $http, ngDialog) {
    $http.get(urlApi + "/api/embarque").then(function (response) {
        $scope.embarques = response.data;
    });
    $scope.getTotal = function () {
        var total = 0;
        for (var i = 0; i < $scope.embarques.length; i++) {
            var product = $scope.embarques[i];
            total += (product.ingreso);
        }
        return total;
    }
});

app.controller("CtrlReporte", function ($scope, $http, ngDialog) {
    $scope.rep = {};
    $scope.CurrentDate = new Date();
    $scope.rep.yy = $scope.CurrentDate.getFullYear();
    $scope.rep.mm = $scope.CurrentDate.getMonth() + 1;
    $scope.rep.ddi = 1;
    $scope.rep.ddf = 31;
    $http.get(urlApi + "/api/embarque").then(function (response) {
        $scope.embarques = response.data;
    });

    $scope.updateReport = function () {
        var data = $.param({
            yy: $scope.rep.yy,
            mm: $scope.rep.mm,
            ddi: $scope.rep.ddi,
            ddf: $scope.rep.ddf,
        });

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }

        $http.post(urlApi + "/api/report/embarque", data, config)
            .then(function (response) {
                $scope.embarques = response.data;
            });
    };

    $scope.getTotal = function () {
        var total = 0;
        for (var i = 0; i < $scope.embarques.length; i++) {
            var product = $scope.embarques[i];
            total += (product.ingreso);
        }
        return total;
    }

});