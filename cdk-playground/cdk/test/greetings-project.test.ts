import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as GreetingsProject from '../lib/greetings-api-stack';

test('Deployment of greetings api stack', () => {
    const app = new cdk.App();

    // WHEN
    const stack = new GreetingsProject.GreetingsApiStack(app, 'GreetingsApiStack');

    // THEN
    expectCDK(stack).to(haveResource('AWS::Lambda::Function', {
      FunctionName: 'HelloWorldTestLambda'
    }))

    expectCDK(stack).to(haveResource('AWS::Lambda::Function', {
      FunctionName: 'FarewellWorldTestLambda'
    }))
});
