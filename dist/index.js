"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 8081;
const endpoint = `/api`;
app.get(endpoint, (req, res) => {
    res.send({
        "client_ip": "127.0.0.1",
        "location": "California",
        "greeting": "Hello, Victory!, the temperature is 11 degrees Celsius in California"
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map