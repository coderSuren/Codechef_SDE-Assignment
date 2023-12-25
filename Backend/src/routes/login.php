<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

// User Login
$app->post('/login', function (Request $request, Response $response) use ($db) {
    $data = $request->getParsedBody();
    $username = $data['username'];
    $password = $data['password'];

    $conn = $db->connect();
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        return $response->withJson(['message' => 'Login successful'], 200);
    } else {
        return $response->withJson(['message' => 'Invalid username or password'], 401);
    }
});