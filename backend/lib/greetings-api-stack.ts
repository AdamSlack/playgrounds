import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'
import * as apigateway from "@aws-cdk/aws-apigateway"
import * as route53 from '@aws-cdk/aws-route53'
import * as targets from '@aws-cdk/aws-route53-targets'
import * as acm from '@aws-cdk/aws-certificatemanager'
import * as s3 from '@aws-cdk/aws-s3'

import * as path from 'path'
import { Bucket } from '@aws-cdk/aws-s3'
import { RemovalPolicy } from '@aws-cdk/core'

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


    const sandpitHostedZoneName = 'sandpit.iw-c.co.uk'
    const sandpitHostedZoneId = 'ZUSAT11SGFQOC'
    const greetingsSiteDomainName = `greetings.${sandpitHostedZoneName}`
    const greetingsApiDomainName = `api.${greetingsSiteDomainName}`

    const greetingsSiteBucket = new Bucket(this, 'GreetingsSiteBucket', {
      bucketName: greetingsSiteDomainName,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error.html',
      removalPolicy: RemovalPolicy.DESTROY,
    })

    greetingsSiteBucket.grantPublicAccess('*', 's3:GetObject')

    const sandpitHostedZone = route53.PublicHostedZone.fromHostedZoneAttributes(this, 'SandpitHostedZone', {
      hostedZoneId: sandpitHostedZoneId,
      zoneName: sandpitHostedZoneName
    })

    const greetingsApiCertificate = new acm.Certificate(this, 'GreetingsDomainCertificate', {
      domainName: greetingsSiteDomainName,
      validation: acm.CertificateValidation.fromDns(sandpitHostedZone),
      subjectAlternativeNames: [
        greetingsApiDomainName
      ]
    });

    const siteTarget = route53.RecordTarget.fromAlias(new targets.BucketWebsiteTarget(greetingsSiteBucket))
    const siteDomain = new route53.ARecord(this, 'GreetingsSiteAliasRecord', {
      recordName: greetingsSiteDomainName,
      target: siteTarget,
      zone: sandpitHostedZone
    })

    greetingApi.addDomainName('GreetingsApiDomain', {
      domainName: greetingsApiDomainName,
      certificate: greetingsApiCertificate
    })

    const apiTarget = route53.RecordTarget.fromAlias( new targets.ApiGateway(greetingApi))
    const apiDomain = new route53.ARecord(this, 'GreetingsApiAliasRecord', {
      recordName: greetingsApiDomainName,
      target: apiTarget,
      zone: sandpitHostedZone
    })


  }
}
