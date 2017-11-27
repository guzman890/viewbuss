<!DOCTYPE html>
<html>
<head>
    <script>
        <?php
        echo 'var id = "' . htmlspecialchars($_GET["id"]) . '";';
        ?>
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
    <link rel="stylesheet" href="lib/ng-dialog/css/ngDialog.min.css">
    <link rel="stylesheet" href="lib/ng-dialog/css/ngDialog-theme-default.min.css">
    <script src="lib/ng-dialog/js/ngDialog.min.js"></script>
    
    <script src="js/scripts.js"></script>
    <title>Desarrollo Software</title>
    <!-- Insertamos el archivo CSS compilado y comprimido -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <!-- Theme opcional -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
</head>
<body>
<div class="container" ng-app="myApp">
    <header class="page-header">
        <ul class="nav nav-pills pull-right">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="embarque.html">Embarque</a></li>
            <li class="active" ><a href="clientes.html">Clientes</a></li>
            <li><a href="movilidades.html">Movilidades</a></li>
        </ul>
        <h1>Clientes</h1>
    </header>
    
    <!-- angular inicio cliente -->
    <div class="jumbotron"  ng-controller="ClientesDetalleCtrl">
        <br/>
        <p class="list-group-item-heading">{{cliente.Nombre}}</p>
        <h5 class="list-group-item-text">{{cliente.DNI}}</h5>
        <br/>

        <button ng-click="" class="btn btn-warning">Editar</button>
        <button ng-click="" class="btn btn-danger">Eliminar</button>

    </div>
    <!-- angular fin cliente -->
    
    <div>
        <p>&copy; km4l30nc1t0-development</p>
    </div>
</div>

<!--Insertamos jQuery dependencia de Bootstrap-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!--Insertamos el archivo JS compilado y comprimido -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</body>
</html>