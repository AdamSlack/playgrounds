"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = __importDefault(require("@middy/core"));
const http_json_body_parser_1 = __importDefault(require("@middy/http-json-body-parser"));
const farewellBuilder = async (event) => {
    console.log(event);
    const { farewellTarget } = event.body;
    const farewell = `Farewell ${farewellTarget}!`;
    console.log(farewell);
    return { body: JSON.stringify({ farewell }), statusCode: 200 };
};
const handler = core_1.default(farewellBuilder)
    .use(http_json_body_parser_1.default());
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx1REFBK0I7QUFDL0IseUZBQXlEO0FBRXpELE1BQU0sZUFBZSxHQUFHLEtBQUssRUFBRSxLQUEwQyxFQUFnRCxFQUFFO0lBQ3ZILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFbEIsTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUE7SUFDckMsTUFBTSxRQUFRLEdBQUcsWUFBWSxjQUFjLEdBQUcsQ0FBQTtJQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRXJCLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFBO0FBQ2xFLENBQUMsQ0FBQTtBQUVELE1BQU0sT0FBTyxHQUFHLGNBQUssQ0FBQyxlQUFlLENBQUM7S0FDakMsR0FBRyxDQUFDLCtCQUFjLEVBQUUsQ0FBQyxDQUFBO0FBRWpCLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGR5IGZyb20gJ0BtaWRkeS9jb3JlJ1xuaW1wb3J0IGpzb25Cb2R5UGFyc2VyIGZyb20gJ0BtaWRkeS9odHRwLWpzb24tYm9keS1wYXJzZXInXG5cbmNvbnN0IGZhcmV3ZWxsQnVpbGRlciA9IGFzeW5jIChldmVudDogeyBib2R5OiB7IGZhcmV3ZWxsVGFyZ2V0OiBzdHJpbmcgfX0pOiBQcm9taXNlPHsgYm9keTogc3RyaW5nLCBzdGF0dXNDb2RlOiBudW1iZXJ9PiA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpXG5cbiAgICBjb25zdCB7IGZhcmV3ZWxsVGFyZ2V0IH0gPSBldmVudC5ib2R5XG4gICAgY29uc3QgZmFyZXdlbGwgPSBgRmFyZXdlbGwgJHtmYXJld2VsbFRhcmdldH0hYFxuICAgIGNvbnNvbGUubG9nKGZhcmV3ZWxsKVxuXG4gICAgcmV0dXJuIHsgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmYXJld2VsbCB9KSwgc3RhdHVzQ29kZTogMjAwIH1cbn1cblxuY29uc3QgaGFuZGxlciA9IG1pZGR5KGZhcmV3ZWxsQnVpbGRlcilcbiAgICAudXNlKGpzb25Cb2R5UGFyc2VyKCkpXG5cbmV4cG9ydCB7IGhhbmRsZXIgfVxuIl19