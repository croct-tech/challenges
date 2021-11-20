export interface PersonalizationClient {
    /**
     * Issues a new token.
     *
     * @param {string} userId The ID of the user who is the subject of the token or null if the user is anonymous.
     * @returns {Promise<string>} The token.
     * @throws {PersonalizationClientError}
     */
    issueToken(userId?: string): Promise<string>;

    /**
     * Evaluates the given expression.
     *
     * @param {string} expression The expression to evaluate.
     * @param {string} token The token to use for the evaluation.
     * @returns {Promise<unknown>} The result of the evaluation.
     * @throws {PersonalizationClientError}
     */
    evaluate<T>(expression: string, token: string): Promise<T>;
}

export class PersonalizationClientError extends Error {}
