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
const path = __importStar(require("path"));
class GreetingsApiStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const helloWorldLambda = new lambda.Function(this, 'HelloWorld', {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset(path.join(__dirname, '../lambda-build/helloworld')),
            functionName: 'HelloWorldTestLambda'
        });
        const farewellWorldLambda = new lambda.Function(this, 'FareWellWorld', {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset(path.join(__dirname, '../lambda-build/farewellworld')),
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
    }
}
exports.GreetingsApiStack = GreetingsApiStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZXRpbmdzLWFwaS1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyZWV0aW5ncy1hcGktc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFvQztBQUNwQyw0REFBNkM7QUFDN0Msb0VBQXNEO0FBRXRELDJDQUE0QjtBQUU1QixNQUFhLGlCQUFrQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzlDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUMvRCxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1lBQy9FLFlBQVksRUFBRSxzQkFBc0I7U0FDckMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUNyRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO1lBQ2xGLFlBQVksRUFBRSx5QkFBeUI7U0FDeEMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxXQUFXLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDaEUsV0FBVyxFQUFFLGVBQWU7WUFDNUIsV0FBVyxFQUFFLDZCQUE2QjtTQUMzQyxDQUFDLENBQUE7UUFFRixNQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMzRCxNQUFNLDJCQUEyQixHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDdEYsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsMkJBQTJCLENBQUMsQ0FBQTtRQUU1RCxNQUFNLGVBQWUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNoRSxNQUFNLHNCQUFzQixHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDcEYsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUMsQ0FBQTtJQUUzRCxDQUFDO0NBQ0Y7QUFoQ0QsOENBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnXG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSdcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSBcIkBhd3MtY2RrL2F3cy1hcGlnYXRld2F5XCI7XG5cbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGNsYXNzIEdyZWV0aW5nc0FwaVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IGhlbGxvV29ybGRMYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdIZWxsb1dvcmxkJywge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEyX1gsXG4gICAgICBoYW5kbGVyOiAnaW5kZXguaGFuZGxlcicsXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2xhbWJkYS1idWlsZC9oZWxsb3dvcmxkJykpLFxuICAgICAgZnVuY3Rpb25OYW1lOiAnSGVsbG9Xb3JsZFRlc3RMYW1iZGEnXG4gICAgfSlcblxuICAgIGNvbnN0IGZhcmV3ZWxsV29ybGRMYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdGYXJlV2VsbFdvcmxkJywge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEyX1gsXG4gICAgICBoYW5kbGVyOiAnaW5kZXguaGFuZGxlcicsXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2xhbWJkYS1idWlsZC9mYXJld2VsbHdvcmxkJykpLFxuICAgICAgZnVuY3Rpb25OYW1lOiAnRmFyZXdlbGxXb3JsZFRlc3RMYW1iZGEnXG4gICAgfSlcblxuICAgIGNvbnN0IGdyZWV0aW5nQXBpID0gbmV3IGFwaWdhdGV3YXkuUmVzdEFwaSh0aGlzLCAnZ3JlZXRpbmdzLWFwaScsIHtcbiAgICAgIHJlc3RBcGlOYW1lOiAnR3JlZXRpbmdzIEFQSScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0J1aWxkcyBHcmVldGluZ3MgZm9yIHlcXCdhbGwnXG4gICAgfSlcblxuICAgIGNvbnN0IGhlbGxvUmVzb3VyY2UgPSBncmVldGluZ0FwaS5yb290LmFkZFJlc291cmNlKCdoZWxsbycpXG4gICAgY29uc3QgZ2V0SGVsbG9HcmVldGluZ0ludGVncmF0aW9uID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oaGVsbG9Xb3JsZExhbWJkYSlcbiAgICBoZWxsb1Jlc291cmNlLmFkZE1ldGhvZCgnUE9TVCcsIGdldEhlbGxvR3JlZXRpbmdJbnRlZ3JhdGlvbilcblxuICAgIGNvbnN0IGZhcmV3ZWxsUmVvdXJjZSA9IGdyZWV0aW5nQXBpLnJvb3QuYWRkUmVzb3VyY2UoJ2ZhcmV3ZWxsJylcbiAgICBjb25zdCBnZXRGYXJld2VsbEludGVncmF0aW9uID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oZmFyZXdlbGxXb3JsZExhbWJkYSlcbiAgICBmYXJld2VsbFJlb3VyY2UuYWRkTWV0aG9kKCdQT1NUJywgZ2V0RmFyZXdlbGxJbnRlZ3JhdGlvbilcblxuICB9XG59XG4iXX0=