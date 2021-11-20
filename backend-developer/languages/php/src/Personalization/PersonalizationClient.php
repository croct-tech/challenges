<?php

namespace Croct\Challenge\Personalization;

interface PersonalizationClient
{
    /**
     * Issues a new token.
     *
     * @param string|null $userId The ID of the user who is the subject of the token or null if the user is anonymous.
     *
     * @return string The token.
     *
     * @throws PersonalizationClientException if an error occurs while issuing the token.
     */
    public function issueToken(string $userId = null): string;

    /**
     * Evaluates the given expression.
     *
     * @param string $expression The expression to evaluate.
     * @param string $token      The token to use for the evaluation.
     *
     * @return mixed The result of the evaluation.
     *
     * @throws PersonalizationClientException if an error occurs while evaluating the expression.
     */
    public function evaluate(string $expression, string $token): mixed;
}