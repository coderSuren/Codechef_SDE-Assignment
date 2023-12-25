<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../src/models/db.php';
header('Access-Control-Allow-Origin: *');
$app = AppFactory::create();


$app->get('/', function (Request $request, Response $response, $args) {
    $response->getBody()->write("Hello world!");
    return $response;
});


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


// create post route for adding new user by checking if the user already exists

$app->post('/signup', function (Request $request, Response $response, array $args) {
    $data = $request->getParsedBody();
    $name = $data["username"];
    $password = $data["password"];
   
    $sql = "SELECT * FROM users WHERE name = :name";
   
    try {
      $db = new Db();
      $conn = $db->connect();
     
      $stmt = $conn->prepare($sql);
      $stmt->bindParam(':name', $name);
      $stmt->execute();
      $user = $stmt->fetch(PDO::FETCH_OBJ);
   
      $db = null;
      if ($user != null) {
        return $response
          ->withHeader('content-type', 'application/json')
          ->withStatus(409);
      }
   
      $sql = "INSERT INTO users (name, password) VALUES (:name, :password)";
   
      $db = new Db();
      $conn = $db->connect();
     
      $stmt = $conn->prepare($sql);
      $stmt->bindParam(':name', $name);
      $stmt->bindParam(':password', $password);
   
      $result = $stmt->execute();
   
      $db = null;
      $response->getBody()->write(json_encode($result));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(200);
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


$app->post('/customers-data/add', function (Request $request, Response $response, array $args) {
    $data = $request->getParsedBody();
    $name = $data["name"];
    $email = $data["email"];
    $phone = $data["phone"];
   
    $sql = "INSERT INTO customers (name, email, phone) VALUES (:name, :email, :phone)";
   
    try {
      $db = new Db();
      $conn = $db->connect();
     
      $stmt = $conn->prepare($sql);
      $stmt->bindParam(':name', $name);
      $stmt->bindParam(':email', $email);
      $stmt->bindParam(':phone', $phone);
   
      $result = $stmt->execute();
   
      $db = null;
      $response->getBody()->write(json_encode($result));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(200);
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

$app->put(
    '/customers-data/update/{id}',
    function (Request $request, Response $response, array $args) 
{
 $id = $request->getAttribute('id');
 $data = $request->getParsedBody();
 $name = $data["name"];
 $email = $data["email"];
 $phone = $data["phone"];

 $sql = "UPDATE customers SET
           name = :name,
           email = :email,
           phone = :phone
 WHERE id = $id";

 try {
   $db = new Db();
   $conn = $db->connect();
  
   $stmt = $conn->prepare($sql);
   $stmt->bindParam(':name', $name);
   $stmt->bindParam(':email', $email);
   $stmt->bindParam(':phone', $phone);

   $result = $stmt->execute();

   $db = null;
   echo "Update successful! ";
   $response->getBody()->write(json_encode($result));
   return $response
     ->withHeader('content-type', 'application/json')
     ->withStatus(200);
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


$app->delete('/customers-data/delete/{id}', function (Request $request, Response $response, array $args) {
    $id = $args["id"];
   
    $sql = "DELETE FROM customers WHERE id = $id";
   
    try {
      $db = new Db();
      $conn = $db->connect();
     
      $stmt = $conn->prepare($sql);
      $result = $stmt->execute();
   
      $db = null;
      $response->getBody()->write(json_encode($result));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(200);
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


$app->run();