import middy from '@middy/core';
declare const handler: middy.Middy<{
    body: {
        farewellTarget: string;
    };
}, {
    body: string;
    statusCode: number;
}, import("aws-lambda").Context>;
export { handler };
