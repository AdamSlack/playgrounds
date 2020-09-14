"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetingBuilder = exports.handler = void 0;
const core_1 = __importDefault(require("@middy/core"));
const http_json_body_parser_1 = __importDefault(require("@middy/http-json-body-parser"));
const greetingBuilder = async (event) => {
    console.log(event);
    const { target } = event.body;
    const greeting = `Hello ${target}!`;
    console.log(greeting);
    return { body: JSON.stringify({ greeting }), statusCode: 200 };
};
exports.greetingBuilder = greetingBuilder;
const handler = core_1.default(greetingBuilder)
    .use(http_json_body_parser_1.default());
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx1REFBK0I7QUFDL0IseUZBQXlEO0FBRXpELE1BQU0sZUFBZSxHQUFHLEtBQUssRUFBRSxLQUFrQyxFQUFnRCxFQUFFO0lBQy9HLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFbEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUE7SUFDN0IsTUFBTSxRQUFRLEdBQUcsU0FBUyxNQUFNLEdBQUcsQ0FBQTtJQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRXJCLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFBO0FBQ2xFLENBQUMsQ0FBQTtBQU9HLDBDQUFlO0FBTG5CLE1BQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxlQUFlLENBQUM7S0FDakMsR0FBRyxDQUFDLCtCQUFjLEVBQUUsQ0FBQyxDQUFBO0FBR3RCLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGR5IGZyb20gJ0BtaWRkeS9jb3JlJ1xuaW1wb3J0IGpzb25Cb2R5UGFyc2VyIGZyb20gJ0BtaWRkeS9odHRwLWpzb24tYm9keS1wYXJzZXInXG5cbmNvbnN0IGdyZWV0aW5nQnVpbGRlciA9IGFzeW5jIChldmVudDogeyBib2R5OiB7IHRhcmdldDogc3RyaW5nIH19KTogUHJvbWlzZTx7IGJvZHk6IHN0cmluZywgc3RhdHVzQ29kZTogbnVtYmVyfT4gPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmJvZHlcbiAgICBjb25zdCBncmVldGluZyA9IGBIZWxsbyAke3RhcmdldH0hYFxuICAgIGNvbnNvbGUubG9nKGdyZWV0aW5nKVxuXG4gICAgcmV0dXJuIHsgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBncmVldGluZyB9KSwgc3RhdHVzQ29kZTogMjAwIH1cbn1cblxuY29uc3QgaGFuZGxlciA9IG1pZGR5KGdyZWV0aW5nQnVpbGRlcilcbiAgICAudXNlKGpzb25Cb2R5UGFyc2VyKCkpXG5cbmV4cG9ydCB7XG4gICAgaGFuZGxlcixcbiAgICBncmVldGluZ0J1aWxkZXJcbn1cbiJdfQ==