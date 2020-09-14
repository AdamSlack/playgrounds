"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetingsApiStack = void 0;
const cdk = __importStar(require("@aws-cdk/core"));
const lambda = __importStar(require("@aws-cdk/aws-lambda"));
const apigateway = __importStar(require("@aws-cdk/aws-apigateway"));
const route53 = __importStar(require("@aws-cdk/aws-route53"));
const targets = __importStar(require("@aws-cdk/aws-route53-targets"));
const acm = __importStar(require("@aws-cdk/aws-certificatemanager"));
const path = __importStar(require("path"));
const aws_s3_1 = require("@aws-cdk/aws-s3");
const core_1 = require("@aws-cdk/core");
class GreetingsApiStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const helloWorldLambda = new lambda.Function(this, 'HelloWorld', {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda-build/helloworld')),
            functionName: 'HelloWorldTestLambda'
        });
        const farewellWorldLambda = new lambda.Function(this, 'FareWellWorld', {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda-build/farewellworld')),
            functionName: 'FarewellWorldTestLambda'
        });
        const greetingApi = new apigateway.RestApi(this, 'greetings-api', {
            restApiName: 'Greetings API',
            description: 'Builds Greetings for y\'all'
        });
        const helloResource = greetingApi.root.addResource('hello');
        const getHelloGreetingIntegration = new apigateway.LambdaIntegration(helloWorldLambda);
        helloResource.addMethod('POST', getHelloGreetingIntegration);
        const farewellReource = greetingApi.root.addResource('farewell');
        const getFarewellIntegration = new apigateway.LambdaIntegration(farewellWorldLambda);
        farewellReource.addMethod('POST', getFarewellIntegration);
        const sandpitHostedZoneName = 'sandpit.iw-c.co.uk';
        const sandpitHostedZoneId = 'ZUSAT11SGFQOC';
        const greetingsSiteDomainName = `greetings.${sandpitHostedZoneName}`;
        const greetingsApiDomainName = `api.${greetingsSiteDomainName}`;
        const greetingsSiteBucket = new aws_s3_1.Bucket(this, 'GreetingsSiteBucket', {
            bucketName: greetingsSiteDomainName,
            websiteIndexDocument: 'index.html',
            websiteErrorDocument: 'error.html',
            removalPolicy: core_1.RemovalPolicy.DESTROY,
        });
        greetingsSiteBucket.grantPublicAccess('*', 's3:GetObject');
        const sandpitHostedZone = route53.PublicHostedZone.fromHostedZoneAttributes(this, 'SandpitHostedZone', {
            hostedZoneId: sandpitHostedZoneId,
            zoneName: sandpitHostedZoneName
        });
        const greetingsApiCertificate = new acm.Certificate(this, 'GreetingsDomainCertificate', {
            domainName: greetingsSiteDomainName,
            validation: acm.CertificateValidation.fromDns(sandpitHostedZone),
            subjectAlternativeNames: [
                greetingsApiDomainName
            ]
        });
        const siteTarget = route53.RecordTarget.fromAlias(new targets.BucketWebsiteTarget(greetingsSiteBucket));
        const siteDomain = new route53.ARecord(this, 'GreetingsSiteAliasRecord', {
            recordName: greetingsSiteDomainName,
            target: siteTarget,
            zone: sandpitHostedZone
        });
        greetingApi.addDomainName('GreetingsApiDomain', {
            domainName: greetingsApiDomainName,
            certificate: greetingsApiCertificate
        });
        const apiTarget = route53.RecordTarget.fromAlias(new targets.ApiGateway(greetingApi));
        const apiDomain = new route53.ARecord(this, 'GreetingsApiAliasRecord', {
            recordName: greetingsApiDomainName,
            target: apiTarget,
            zone: sandpitHostedZone
        });
    }
}
exports.GreetingsApiStack = GreetingsApiStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZXRpbmdzLWFwaS1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyZWV0aW5ncy1hcGktc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFvQztBQUNwQyw0REFBNkM7QUFDN0Msb0VBQXFEO0FBQ3JELDhEQUErQztBQUMvQyxzRUFBdUQ7QUFDdkQscUVBQXNEO0FBRXRELDJDQUE0QjtBQUM1Qiw0Q0FBd0M7QUFDeEMsd0NBQTZDO0FBRTdDLE1BQWEsaUJBQWtCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDOUMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQy9ELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLGVBQWU7WUFDeEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLCtCQUErQixDQUFDLENBQUM7WUFDbEYsWUFBWSxFQUFFLHNCQUFzQjtTQUNyQyxDQUFDLENBQUE7UUFFRixNQUFNLG1CQUFtQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3JFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLGVBQWU7WUFDeEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGtDQUFrQyxDQUFDLENBQUM7WUFDckYsWUFBWSxFQUFFLHlCQUF5QjtTQUN4QyxD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QixJQUFJLEVBQUUsaUJBQWlCO1NBQ3hCLENBQUMsQ0FBQTtJQUdKLENBQUM7Q0FDRjtBQWhGRCw4Q0FnRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSdcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJ1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tIFwiQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXlcIlxuaW1wb3J0ICogYXMgcm91dGU1MyBmcm9tICdAYXdzLWNkay9hd3Mtcm91dGU1MydcbmltcG9ydCAqIGFzIHRhcmdldHMgZnJvbSAnQGF3cy1jZGsvYXdzLXJvdXRlNTMtdGFyZ2V0cydcbmltcG9ydCAqIGFzIGFjbSBmcm9tICdAYXdzLWNkay9hd3MtY2VydGlmaWNhdGVtYW5hZ2VyJ1xuXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBCdWNrZXQgfSBmcm9tICdAYXdzLWNkay9hd3MtczMnXG5pbXBvcnQgeyBSZW1vdmFsUG9saWN5IH0gZnJvbSAnQGF3cy1jZGsvY29yZSdcblxuZXhwb3J0IGNsYXNzIEdyZWV0aW5nc0FwaVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IGhlbGxvV29ybGRMYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdIZWxsb1dvcmxkJywge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEyX1gsXG4gICAgICBoYW5kbGVyOiAnaW5kZXguaGFuZGxlcicsXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL2xhbWJkYS1idWlsZC9oZWxsb3dvcmxkJykpLFxuICAgICAgZnVuY3Rpb25OYW1lOiAnSGVsbG9Xb3JsZFRlc3RMYW1iZGEnXG4gICAgfSlcblxuICAgIGNvbnN0IGZhcmV3ZWxsV29ybGRMYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdGYXJlV2VsbFdvcmxkJywge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEyX1gsXG4gICAgICBoYW5kbGVyOiAnaW5kZXguaGFuZGxlcicsXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uLy4uL2xhbWJkYS1idWlsZC9mYXJld2VsbHdvcmxkJykpLFxuICAgICAgZnVuY3Rpb25OYW1lOiAnRmFyZXdlbGxXb3JsZFRlc3RMYW1iZGEnXG4gICAgfSlcblxuICAgIGNvbnN0IGdyZWV0aW5nQXBpID0gbmV3IGFwaWdhdGV3YXkuUmVzdEFwaSh0aGlzLCAnZ3JlZXRpbmdzLWFwaScsIHtcbiAgICAgIHJlc3RBcGlOYW1lOiAnR3JlZXRpbmdzIEFQSScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0J1aWxkcyBHcmVldGluZ3MgZm9yIHlcXCdhbGwnXG4gICAgfSlcblxuICAgIGNvbnN0IGhlbGxvUmVzb3VyY2UgPSBncmVldGluZ0FwaS5yb290LmFkZFJlc291cmNlKCdoZWxsbycpXG4gICAgY29uc3QgZ2V0SGVsbG9HcmVldGluZ0ludGVncmF0aW9uID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oaGVsbG9Xb3JsZExhbWJkYSlcbiAgICBoZWxsb1Jlc291cmNlLmFkZE1ldGhvZCgnUE9TVCcsIGdldEhlbGxvR3JlZXRpbmdJbnRlZ3JhdGlvbilcblxuICAgIGNvbnN0IGZhcmV3ZWxsUmVvdXJjZSA9IGdyZWV0aW5nQXBpLnJvb3QuYWRkUmVzb3VyY2UoJ2ZhcmV3ZWxsJylcbiAgICBjb25zdCBnZXRGYXJld2VsbEludGVncmF0aW9uID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oZmFyZXdlbGxXb3JsZExhbWJkYSlcbiAgICBmYXJld2VsbFJlb3VyY2UuYWRkTWV0aG9kKCdQT1NUJywgZ2V0RmFyZXdlbGxJbnRlZ3JhdGlvbilcblxuXG4gICAgY29uc3Qgc2FuZHBpdEhvc3RlZFpvbmVOYW1lID0gJ3NhbmRwaXQuaXctYy5jby51aydcbiAgICBjb25zdCBzYW5kcGl0SG9zdGVkWm9uZUlkID0gJ1pVU0FUMTFTR0ZRT0MnXG4gICAgY29uc3QgZ3JlZXRpbmdzU2l0ZURvbWFpbk5hbWUgPSBgZ3JlZXRpbmdzLiR7c2FuZHBpdEhvc3RlZFpvbmVOYW1lfWBcbiAgICBjb25zdCBncmVldGluZ3NBcGlEb21haW5OYW1lID0gYGFwaS4ke2dyZWV0aW5nc1NpdGVEb21haW5OYW1lfWBcblxuICAgIGNvbnN0IGdyZWV0aW5nc1NpdGVCdWNrZXQgPSBuZXcgQnVja2V0KHRoaXMsICdHcmVldGluZ3NTaXRlQnVja2V0Jywge1xuICAgICAgYnVja2V0TmFtZTogZ3JlZXRpbmdzU2l0ZURvbWFpbk5hbWUsXG4gICAgICB3ZWJzaXRlSW5kZXhEb2N1bWVudDogJ2luZGV4Lmh0bWwnLFxuICAgICAgd2Vic2l0ZUVycm9yRG9jdW1lbnQ6ICdlcnJvci5odG1sJyxcbiAgICAgIHJlbW92YWxQb2xpY3k6IFJlbW92YWxQb2xpY3kuREVTVFJPWSxcbiAgICB9KVxuXG4gICAgZ3JlZXRpbmdzU2l0ZUJ1Y2tldC5ncmFudFB1YmxpY0FjY2VzcygnKicsICdzMzpHZXRPYmplY3QnKVxuXG4gICAgY29uc3Qgc2FuZHBpdEhvc3RlZFpvbmUgPSByb3V0ZTUzLlB1YmxpY0hvc3RlZFpvbmUuZnJvbUhvc3RlZFpvbmVBdHRyaWJ1dGVzKHRoaXMsICdTYW5kcGl0SG9zdGVkWm9uZScsIHtcbiAgICAgIGhvc3RlZFpvbmVJZDogc2FuZHBpdEhvc3RlZFpvbmVJZCxcbiAgICAgIHpvbmVOYW1lOiBzYW5kcGl0SG9zdGVkWm9uZU5hbWVcbiAgICB9KVxuXG4gICAgY29uc3QgZ3JlZXRpbmdzQXBpQ2VydGlmaWNhdGUgPSBuZXcgYWNtLkNlcnRpZmljYXRlKHRoaXMsICdHcmVldGluZ3NEb21haW5DZXJ0aWZpY2F0ZScsIHtcbiAgICAgIGRvbWFpbk5hbWU6IGdyZWV0aW5nc1NpdGVEb21haW5OYW1lLFxuICAgICAgdmFsaWRhdGlvbjogYWNtLkNlcnRpZmljYXRlVmFsaWRhdGlvbi5mcm9tRG5zKHNhbmRwaXRIb3N0ZWRab25lKSxcbiAgICAgIHN1YmplY3RBbHRlcm5hdGl2ZU5hbWVzOiBbXG4gICAgICAgIGdyZWV0aW5nc0FwaURvbWFpbk5hbWVcbiAgICAgIF1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNpdGVUYXJnZXQgPSByb3V0ZTUzLlJlY29yZFRhcmdldC5mcm9tQWxpYXMobmV3IHRhcmdldHMuQnVja2V0V2Vic2l0ZVRhcmdldChncmVldGluZ3NTaXRlQnVja2V0KSlcbiAgICBjb25zdCBzaXRlRG9tYWluID0gbmV3IHJvdXRlNTMuQVJlY29yZCh0aGlzLCAnR3JlZXRpbmdzU2l0ZUFsaWFzUmVjb3JkJywge1xuICAgICAgcmVjb3JkTmFtZTogZ3JlZXRpbmdzU2l0ZURvbWFpbk5hbWUsXG4gICAgICB0YXJnZXQ6IHNpdGVUYXJnZXQsXG4gICAgICB6b25lOiBzYW5kcGl0SG9zdGVkWm9uZVxuICAgIH0pXG5cbiAgICBncmVldGluZ0FwaS5hZGREb21haW5OYW1lKCdHcmVldGluZ3NBcGlEb21haW4nLCB7XG4gICAgICBkb21haW5OYW1lOiBncmVldGluZ3NBcGlEb21haW5OYW1lLFxuICAgICAgY2VydGlmaWNhdGU6IGdyZWV0aW5nc0FwaUNlcnRpZmljYXRlXG4gICAgfSlcblxuICAgIGNvbnN0IGFwaVRhcmdldCA9IHJvdXRlNTMuUmVjb3JkVGFyZ2V0LmZyb21BbGlhcyggbmV3IHRhcmdldHMuQXBpR2F0ZXdheShncmVldGluZ0FwaSkpXG4gICAgY29uc3QgYXBpRG9tYWluID0gbmV3IHJvdXRlNTMuQVJlY29yZCh0aGlzLCAnR3JlZXRpbmdzQXBpQWxpYXNSZWNvcmQnLCB7XG4gICAgICByZWNvcmROYW1lOiBncmVldGluZ3NBcGlEb21haW5OYW1lLFxuICAgICAgdGFyZ2V0OiBhcGlUYXJnZXQsXG4gICAgICB6b25lOiBzYW5kcGl0SG9zdGVkWm9uZVxuICAgIH0pXG5cblxuICB9XG59XG4iXX0=