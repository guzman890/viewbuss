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
            <li class="active" ><a href="embarque.html">Embarque</a></li>
            <li><a href="clientes.html">Clientes</a></li>
            <li><a href="movilidades.html">Movilidades</a></li>
            <li><a href="reportes.html">Reportes</a></li>
        </ul>
        <h1>Embarque</h1>
    </header>
    <!-- angular inicio movilidad -->
    <div class="jumbotron"  ng-controller="EmbarqueDetalleCtrl">
            <h2> Placa: {{embarque.Placa}} </h2>     
            <h4 class="list-group-item-heading">Fecha: {{embarque.dd}}/{{embarque.mm}}/{{embarque.yy}}</h4>
            <h4 class="list-group-item-heading">Hora: {{embarque.H}}:{{embarque.M}}</h4>
            <div class="list-group-item-text">Capacidad: {{embarque.Capacidad}}</div>
            <div class="list-group-item-text">Tipo: {{embarque.Tipo}}</div>
            <div class="list-group-item-text"><h4>Ingreso: {{embarque.ingreso}}</h4></div>
            <br/>

        <button ng-click="editarEmbarque()" class="btn btn-warning">Editar</button>
        <button ng-click="" class="btn btn-danger">Eliminar</button>
    </div>

        <!-- angular fin movilidad -->

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
