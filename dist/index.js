"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
const port = 8081;
const endpoint = `/api/hello/`;
app.get(endpoint, (req, res) => {
    const visitor_name = req.query.visitor_name;
    res.json({
        "client_ip": "127.0.0.1",
        "location": "California",
        "greeting": `Hello, ${visitor_name}!, the temperature is 11 degrees Celsius in California`
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map