"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const data_routes_1 = __importDefault(require("./router/data_routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
app.use("/", (0, data_routes_1.default)());
app.use((req, res, next) => {
    const allowedOrigins = [
        "http://localhost:3000",
        "http://192.168.29.152:3000",
        "",
        "http://127.0.0.1:5000",
    ];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }
    next();
});
const mongo_uri = "mongodb+srv://amritraj:hX3ZQvqhd8sooUgw@cluster0.jkbshwf.mongodb.net/tableDb?retryWrites=true&w=majority&appName=Cluster0";
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(mongo_uri);
mongoose_1.default.connection.on("error", (error) => console.log(error));
const server = http_1.default.createServer(app);
const port = process.env.PORT || 5050;
server.listen(port, () => {
    const address = server.address();
    console.log("Server running on " + String(port));
});
//# sourceMappingURL=index.js.map