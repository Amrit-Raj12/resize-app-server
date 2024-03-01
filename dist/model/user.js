"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    address: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    add_count: { type: Number, default: 1 },
    update_count: { type: Number, default: 0 },
    sr: { type: Number, default: 1 },
});
exports.UserModel = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=user.js.map