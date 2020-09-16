# Typescript Object Mapping

An example in typescript using the node.js morphism lib with middy to transform an response from an external API into something else.

## Structure

Tests are implemented under `./tests` and can be executed using `npm run test`

Example Lambda, interfaces, middleware, and morphisms are implemented under `./src`

A simple `TransformObject` Middleware implementation will allow you to provide a `morphism` schema which will be applied to the return data of the lambda.

The example implements some arbirary interfaces for what is expected as a response from an API, and what the lambda is going to return as a result of the invocation.
