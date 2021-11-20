export interface Personalization {
    issueToken(userId?: string): Promise<string>;

    evaluate<T>(expression: string, token: string): Promise<T>;
}
