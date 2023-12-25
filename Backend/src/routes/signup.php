use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app->post('/signup', function (Request $request, Response $response) use ($db) {
    $data = $request->getParsedBody();
    $username = $data['username'];
    $password = password_hash($data['password'], PASSWORD_DEFAULT);
    $email = $data['email'];

    $conn = $db->connect();
    $stmt = $conn->prepare("INSERT INTO users (username, password, email) VALUES (?, ?, ?)");
    $result = $stmt->execute([$username, $password, $email]);

    if ($result) {
        return $response->withJson(['message' => 'User registered successfully'], 201);
    } else {
        return $response->withJson(['message' => 'Failed to register user'], 500);
    }
});