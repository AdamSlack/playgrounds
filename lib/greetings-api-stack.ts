import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'
import * as apigateway from "@aws-cdk/aws-apigateway";

import * as path from 'path'

export class GreetingsApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloWorldLambda = new lambda.Function(this, 'HelloWorld', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda-build/helloworld')),
      functionName: 'HelloWorldTestLambda'
    })

    const farewellWorldLambda = new lambda.Function(this, 'FareWellWorld', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda-build/farewellworld')),
      functionName: 'FarewellWorldTestLambda'
    })

    const greetingApi = new apigateway.RestApi(this, 'greetings-api', {
      restApiName: 'Greetings API',
      description: 'Builds Greetings for y\'all'
    })

    const helloResource = greetingApi.root.addResource('hello')
    const getHelloGreetingIntegration = new apigateway.LambdaIntegration(helloWorldLambda)
    helloResource.addMethod('POST', getHelloGreetingIntegration)

    const farewellReource = greetingApi.root.addResource('farewell')
    const getFarewellIntegration = new apigateway.LambdaIntegration(farewellWorldLambda)
    farewellReource.addMethod('POST', getFarewellIntegration)

  }
}
