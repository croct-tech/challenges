<?php

require_once __DIR__ . '/../vendor/autoload.php';

(function() {
    $apiKey = \getenv('CROCT_API_KEY');

    if (!\is_string($apiKey)) {
        exit('Environment variable CROCT_API_KEY is not set.');
    }

    $requestFactory = new \Laminas\Diactoros\RequestFactory();
    $responseFactory = new \Laminas\Diactoros\ResponseFactory();
    $streamFactory = new \Laminas\Diactoros\StreamFactory();

    (new \Laminas\HttpHandlerRunner\RequestHandlerRunner(
        new \Croct\Challenge\Route\HomeRoute(
            \file_get_contents(__DIR__ . '/../template/home.html'),
            new \Croct\Challenge\Personalization\CroctClient(
                $apiKey,
                new \Http\Client\Curl\Client(
                    $responseFactory,
                    $streamFactory
                ),
                $requestFactory
            ),
            $responseFactory,
            $streamFactory
        ),
        new \Laminas\HttpHandlerRunner\Emitter\SapiEmitter(),
        [\Laminas\Diactoros\ServerRequestFactory::class, 'fromGlobals'],
        function (Throwable $exception) use ($responseFactory): \Psr\Http\Message\ResponseInterface {
            return $responseFactory->createResponse()
                ->withStatus(500);
        }
    ))->run();
})();