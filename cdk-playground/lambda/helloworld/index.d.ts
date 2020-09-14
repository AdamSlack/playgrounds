import middy from '@middy/core';
declare const greetingBuilder: (event: {
    body: {
        target: string;
    };
}) => Promise<{
    body: string;
    statusCode: number;
}>;
declare const handler: middy.Middy<{
    body: {
        target: string;
    };
}, {
    body: string;
    statusCode: number;
}, import("aws-lambda").Context>;
export { handler, greetingBuilder };
