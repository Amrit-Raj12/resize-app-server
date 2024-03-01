"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dataManagement_1 = require("../controller/dataManagement");
const router = express_1.default.Router();
exports.default = () => {
    router.use("/update-user/:id", dataManagement_1.dataManagement.update_user);
    router.use("/add-user", dataManagement_1.dataManagement.add_user);
    router.use("/get-user", dataManagement_1.dataManagement.get_user);
    router.use("/get-add-count/:id/", dataManagement_1.dataManagement.get_add_count);
    return router;
};
//# sourceMappingURL=data_routes.js.map