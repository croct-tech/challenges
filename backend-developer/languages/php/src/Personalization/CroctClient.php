<?php

namespace Croct\Challenge\Personalization;

use Psr\Http\Client\ClientExceptionInterface as ClientException;
use Psr\Http\Client\ClientInterface as HttpClient;
use Psr\Http\Message\RequestFactoryInterface as RequestFactory;
use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

final class CroctClient implements PersonalizationClient
{
    private const TOKEN_ENDPOINT = 'https://api.croct.io/token/';

    private const EVALUATION_ENDPOINT = 'https://api.croct.io/session/web/evaluate';

    private const APP_ID_HEADER = 'X-App-Id';

    private const API_KEY_HEADER = 'X-Api-Key';

    private const TOKEN_HEADER = 'X-Token';

    private string $apiKey;

    private HttpClient $client;

    private RequestFactory $requestFactory;

    public function __construct(string $apiKey, HttpClient $client, RequestFactory $requestFactory) {
        $this->apiKey = $apiKey;
        $this->client = $client;
        $this->requestFactory = $requestFactory;
    }

    public function issueToken(string $userId = null): string
    {
        $response = $this->send(
            $this->requestFactory->createRequest('GET', self::TOKEN_ENDPOINT . $userId)
                ->withAddedHeader(self::API_KEY_HEADER, $this->apiKey)
        );

        if ($response->getStatusCode() !== 200) {
            throw new PersonalizationClientException('Failed to issue token.');
        }

        $body = \json_decode($response->getBody()->getContents(), true);

        return $body['token'];
    }

    public function evaluate(string $expression, string $token): mixed
    {
        $response = $this->send(
            $this->requestFactory->createRequest(
                'GET',
                self::EVALUATION_ENDPOINT . '?' . \http_build_query(['expression' => $expression])
            )
            ->withAddedHeader(self::TOKEN_HEADER, $token)
            ->withAddedHeader(self::APP_ID_HEADER, $this->getAppId($token))
        );

        if ($response->getStatusCode() !== 200) {
            throw new PersonalizationClientException('Failed to evaluate expression.');
        }

        return \json_decode($response->getBody()->getContents(), true);
    }

    /**
     * Extracts the app ID from the token's payload.
     *
     * @param string $token The JWT token.
     * @return string The app ID.
     */
    private function getAppId(string $token): string
    {
        $parts = \explode('.', $token, 2);
        $payload = \json_decode(\base64_decode($parts[0]), true);

        return $payload['appId'];
    }

    /**
     * @throws PersonalizationClientException
     */
    private function send(Request $request): Response
    {
        try {
            return $this->client->sendRequest($request);
        } catch (ClientException $exception) {
            throw new PersonalizationClientException($exception->getMessage(), $exception->getCode(), $exception);
        }
    }
}
