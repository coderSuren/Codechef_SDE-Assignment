<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

// User Login
$app->post('/signin', function (Request $request, Response $response, array $args) {
    $data = $request->getParsedBody();
    $name = $data["username"];
    $password = $data["password"];
   
    $sql = "SELECT * FROM users WHERE name = :name AND password = :password";
    echo $sql;

    try {
      $db = new Db();
      $conn = $db->connect();
     
      $stmt = $conn->prepare($sql);
      $stmt->bindParam(':name', $name);
      $stmt->bindParam(':password', $password);
      $stmt->execute();
      $user = $stmt->fetch(PDO::FETCH_OBJ);
   
      $db = null;
      if ($user == null) {
        return $response
          ->withHeader('content-type', 'application/json')
          ->withStatus(404);
      }


      $response->getBody()->write(json_encode($user));
    } catch (PDOException $e) {
      $error = array(
        "message" => $e->getMessage()
      );
   
      $response->getBody()->write(json_encode($error));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(500);
    }
});
