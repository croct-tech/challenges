export interface PersonalizationClient {
    createSessionToken(userId?: string): Promise<string>;

    evaluate<T>(expression: string, token: string, context?: Record<string, any>): Promise<T>;
}
