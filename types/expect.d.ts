export {};

declare global {
    function expect(received: number): {
        toBe(expected: number): boolean
    }
}