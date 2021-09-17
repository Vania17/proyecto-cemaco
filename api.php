<?php

    $dbHost = 'localhost';
    $dbName = 'cemaco';
    $dbUser = 'root';
    $dbPass = 'root';

    if(isset($_POST['opc'])){
        $opc = $_POST['opc'];
        $con=new mysqli(
            $dbHost,
            $dbUser, 
            $dbPass, 
            $dbName
        );

        if($opc == "productos"){
            $query = "SELECT * FROM productos where tipo like 'producto'";
        }else if($opc == "herramientas"){
            $query = "SELECT * FROM productos where tipo like 'herramientas'";
        }else {
            $query = "";
        }

        // Se verifica que se pueda ejecutar la consulta
        $results = [];
        if ($stmt = $con->prepare($query)) {
            $stmt->execute();
            $result = $stmt->get_result();
            // Se recorre el resultado obtenido y se guarda en la variable results
            while($row = $result->fetch_assoc()){
                $results[] = $row;
            }
        }

        echo json_encode($results);

    }else{
        echo "vacio";
    }
     