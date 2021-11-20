<?php

namespace Croct\Challenge\Route;

use Croct\Challenge\Personalization\PersonalizationClient;
use Croct\Challenge\Personalization\PersonalizationClientException;
use Psr\Http\Message\ResponseFactoryInterface as ResponseFactory;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\StreamFactoryInterface as StreamFactory;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;

final class HomeRoute implements RequestHandler
{
    private string $template;

    private string $tokenCookieName;

    private PersonalizationClient $personalizationClient;

    private ResponseFactory $responseFactory;

    private StreamFactory $streamFactory;

    public function __construct(
        string $template,
        PersonalizationClient $personalizationClient,
        ?ResponseFactory $responseFactory,
        ?StreamFactory $streamFactory,
        string $cookieName = 'croctToken'
    ) {
        $this->personalizationClient = $personalizationClient;
        $this->template = $template;
        $this->responseFactory = $responseFactory;
        $this->streamFactory = $streamFactory;
        $this->tokenCookieName = $cookieName;
    }

    public function handle(Request $request): Response
    {
        try {
            $token = $this->getToken($request);
            $persona = $this->personalizationClient->evaluate("user's persona", $token);
        } catch (PersonalizationClientException $exception) {
            return $this->responseFactory->createResponse(500);
        }

        return $this->responseFactory->createResponse()
            ->withAddedHeader('Content-Type', 'text/html')
            ->withAddedHeader('Set-Cookie', $this->tokenCookieName . '=' . $token)
            ->withBody($this->streamFactory->createStream(
                $this->render(\array_replace($this->getContent($persona), [
                    'token' => $token,
                    'persona' => $persona ?? 'default',
                ])))
            );
    }

    /**
     * @throws PersonalizationClientException if an unexpected error occurs
     */
    private function getToken(Request $request): string {
        return $request->getCookieParams()[$this->tokenCookieName] ?? $this->personalizationClient->issueToken();
    }

    private function getContent(?string $persona): array
    {
        switch ($persona) {
            case 'developer':
                return [
                    'title' => 'Become your marketing team’s hero',
                    'subtitle' => 'Build rich user experiences that are easy for your team to evolve and maintain.',
                    'cta.label' => 'Watch our tutorial',
                    'cta.link' => 'https://croct.link/demo/developer',
                ];

            case 'marketer':
                return [
                    'title' => 'Get more out of your marketing investment',
                    'subtitle' => 'Optimize your digital customer experience to drive more sales and happier customers.',
                    'cta.label' => 'Book a demo',
                    'cta.link' => 'https://croct.link/demo/marketer',
                ];

            case 'growthHacker':
                return [
                    'title' => 'Grow faster with personalization',
                    'subtitle' => 'Hyper-targeted experiences that generate 5x more leads.',
                    'cta.label' => 'Try it now',
                    'cta.link' => 'https://croct.link/demo/growth-hacker',
                ];

            default:
                return [
                    'title' => 'Experience up to 20% more revenue faster',
                    'subtitle' => 'Deliver tailored experiences that drive satisfaction and growth.',
                    'cta.label' => 'Discover how',
                    'cta.link' => 'https://croct.link/demo',
                ];
        }
    }

    /**
     * @param array<mixed> $variables
     *
     * @return string
     */
    private function render(array $variables): string
    {
        foreach ($variables as $key => $value) {
            $variables['%'.$key.'%'] = $value;

            unset($variables[$key]);
        }

        return \strtr($this->template, $variables);
    }
}