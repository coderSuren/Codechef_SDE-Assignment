use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;


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

