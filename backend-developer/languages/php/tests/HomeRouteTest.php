<?php

namespace Croct\Challenge;

use PHPUnit\Framework\TestCase;

/**
 * @coversDefaultClass \Croct\Challenge\Route\HomeRoute
 */
final class HomeRouteTest extends TestCase
{
    /**
     * @testdox Reuses previously issued token.
     * @covers ::handle
     */
    public function testHandleReusesIssuedToken(): void {
        // @todo
    }
}
