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
const assert_1 = require("@aws-cdk/assert");
const cdk = __importStar(require("@aws-cdk/core"));
const GreetingsProject = __importStar(require("../lib/greetings-api-stack"));
test('Deployment of greetings api stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new GreetingsProject.GreetingsApiStack(app, 'GreetingsApiStack');
    // THEN
    assert_1.expect(stack).to(assert_1.haveResource('AWS::Lambda::Function', {
        FunctionName: 'HelloWorldTestLambda'
    }));
    assert_1.expect(stack).to(assert_1.haveResource('AWS::Lambda::Function', {
        FunctionName: 'FarewellWorldTestLambda'
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZXRpbmdzLXByb2plY3QudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyZWV0aW5ncy1wcm9qZWN0LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQW9FO0FBQ3BFLG1EQUFxQztBQUNyQyw2RUFBK0Q7QUFFL0QsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLEdBQUcsRUFBRTtJQUMzQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUUxQixPQUFPO0lBQ1AsTUFBTSxLQUFLLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUUvRSxPQUFPO0lBQ1AsZUFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxxQkFBWSxDQUFDLHVCQUF1QixFQUFFO1FBQ3hELFlBQVksRUFBRSxzQkFBc0I7S0FDckMsQ0FBQyxDQUFDLENBQUE7SUFFSCxlQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLHFCQUFZLENBQUMsdUJBQXVCLEVBQUU7UUFDeEQsWUFBWSxFQUFFLHlCQUF5QjtLQUN4QyxDQUFDLENBQUMsQ0FBQTtBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhwZWN0IGFzIGV4cGVjdENESywgaGF2ZVJlc291cmNlIH0gZnJvbSAnQGF3cy1jZGsvYXNzZXJ0JztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIEdyZWV0aW5nc1Byb2plY3QgZnJvbSAnLi4vbGliL2dyZWV0aW5ncy1hcGktc3RhY2snO1xuXG50ZXN0KCdEZXBsb3ltZW50IG9mIGdyZWV0aW5ncyBhcGkgc3RhY2snLCAoKSA9PiB7XG4gICAgY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcblxuICAgIC8vIFdIRU5cbiAgICBjb25zdCBzdGFjayA9IG5ldyBHcmVldGluZ3NQcm9qZWN0LkdyZWV0aW5nc0FwaVN0YWNrKGFwcCwgJ0dyZWV0aW5nc0FwaVN0YWNrJyk7XG5cbiAgICAvLyBUSEVOXG4gICAgZXhwZWN0Q0RLKHN0YWNrKS50byhoYXZlUmVzb3VyY2UoJ0FXUzo6TGFtYmRhOjpGdW5jdGlvbicsIHtcbiAgICAgIEZ1bmN0aW9uTmFtZTogJ0hlbGxvV29ybGRUZXN0TGFtYmRhJ1xuICAgIH0pKVxuXG4gICAgZXhwZWN0Q0RLKHN0YWNrKS50byhoYXZlUmVzb3VyY2UoJ0FXUzo6TGFtYmRhOjpGdW5jdGlvbicsIHtcbiAgICAgIEZ1bmN0aW9uTmFtZTogJ0ZhcmV3ZWxsV29ybGRUZXN0TGFtYmRhJ1xuICAgIH0pKVxufSk7XG4iXX0=