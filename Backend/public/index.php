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


require __DIR__ . '/../src/routes/signup.php';
require __DIR__ . '/../src/routes/login.php';

$app->run();